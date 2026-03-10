"use client";

import { useEffect, useMemo, useState } from "react";
import {
  fetchPolygonCatalog,
  mintInstitutionalOffering,
  provisionPolygonWallet,
  type MintReceipt,
  type PolygonOffering,
  type ProvisionedWallet,
  type WalletProvisionRequest,
} from "@/lib/polygon-registry-client";

const entityOptions = [
  { value: "student", label: "Student" },
  { value: "staff", label: "Staff" },
  { value: "visiting-intelligence", label: "Visiting Intelligence" },
  { value: "sponsor", label: "Sponsor" },
  { value: "partner", label: "Partner" },
] as const;

export function PolygonRegistryConsole() {
  const [offerings, setOfferings] = useState<PolygonOffering[]>([]);
  const [programmes, setProgrammes] = useState<string[]>([]);
  const [wallet, setWallet] = useState<ProvisionedWallet | null>(null);
  const [receipt, setReceipt] = useState<MintReceipt | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [minting, setMinting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<WalletProvisionRequest>({
    name: "",
    email: "",
    entityType: "student",
    programme: "B.Intel — Intelligence Engineering",
    walletAddress: "",
  });

  useEffect(() => {
    let active = true;

    fetchPolygonCatalog()
      .then((data) => {
        if (!active) return;
        setOfferings(data.offerings);
        setProgrammes(data.programmes);
        if (data.programmes[0]) {
          setForm((current) => ({ ...current, programme: data.programmes[0] }));
        }
      })
      .catch(() => {
        if (!active) return;
        setError("The Polygon registry is temporarily behaving like a committee minute: present, but not especially responsive.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const eligibleOfferings = useMemo(() => {
    if (!wallet) return offerings;
    return offerings.filter((offering) => wallet.mintEligible.includes(offering.id));
  }, [offerings, wallet]);

  async function handleProvision(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setReceipt(null);

    try {
      const created = await provisionPolygonWallet(form);
      setWallet(created);
    } catch {
      setError("Wallet provisioning failed. The custodial sub-committee may be at lunch.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleMint(offeringId: string) {
    if (!wallet) return;

    setMinting(true);
    setError(null);
    try {
      const minted = await mintInstitutionalOffering({
        walletId: wallet.walletId,
        offeringId,
        recipientName: form.name,
        programme: form.programme,
      });
      setReceipt(minted);
    } catch {
      setError("Mint orchestration failed. The chain remains sovereign, but sadly unimpressed.");
    } finally {
      setMinting(false);
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8 max-w-6xl mx-auto">
      <div className="border border-gold/20 bg-ivory p-8 gold-emboss">
        <p className="engraved text-gold mb-3">Custodial Provisioning Console</p>
        <h3 className="font-serif text-2xl font-bold mb-3">Register an external Polygon wallet</h3>
        <p className="text-stone leading-relaxed mb-6">
          The institution now registers externally controlled wallets rather than creating
          new hot-custody wallets inside the worker. That is less theatrical, more defensible,
          and considerably easier to explain to counsel, investors, and anyone who has ever read
          a custody incident report.
        </p>

        <form onSubmit={handleProvision} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs tracking-widest uppercase text-stone-light">Name or System Title</span>
              <input
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                className="mt-2 w-full border border-gold/20 bg-white px-4 py-3 text-stone focus:outline-none focus:border-gold"
                placeholder="Ava Langley / Tutor-Model-7"
                required
              />
            </label>
            <label className="block">
              <span className="text-xs tracking-widest uppercase text-stone-light">Email</span>
              <input
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="mt-2 w-full border border-gold/20 bg-white px-4 py-3 text-stone focus:outline-none focus:border-gold"
                placeholder="admissions@fitzherbert.university"
                type="email"
              />
            </label>
            <label className="block">
              <span className="text-xs tracking-widest uppercase text-stone-light">Polygon Wallet Address</span>
              <input
                value={form.walletAddress}
                onChange={(event) => setForm((current) => ({ ...current, walletAddress: event.target.value }))}
                className="mt-2 w-full border border-gold/20 bg-white px-4 py-3 text-stone focus:outline-none focus:border-gold"
                placeholder="0x..."
                required
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs tracking-widest uppercase text-stone-light">Entity Type</span>
              <select
                value={form.entityType}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    entityType: event.target.value as WalletProvisionRequest["entityType"],
                  }))
                }
                className="mt-2 w-full border border-gold/20 bg-white px-4 py-3 text-stone focus:outline-none focus:border-gold"
              >
                {entityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs tracking-widest uppercase text-stone-light">Programme</span>
              <select
                value={form.programme}
                onChange={(event) => setForm((current) => ({ ...current, programme: event.target.value }))}
                className="mt-2 w-full border border-gold/20 bg-white px-4 py-3 text-stone focus:outline-none focus:border-gold"
              >
                {programmes.map((programme) => (
                  <option key={programme} value={programme}>
                    {programme}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting || loading}
            className="inline-block bg-maroon text-parchment px-8 py-3 text-sm tracking-widest uppercase font-serif hover:bg-maroon-light transition-colors disabled:opacity-60"
          >
            {submitting ? "Registering Wallet..." : "Register Wallet"}
          </button>
        </form>

        {error ? <p className="mt-4 text-sm text-maroon">{error}</p> : null}

        {wallet ? (
          <div className="mt-8 border-t border-gold/20 pt-6">
            <p className="engraved text-gold mb-2">Provisioned Identity</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-stone">
              <div><strong className="text-navy">Wallet ID:</strong> {wallet.walletId}</div>
              <div><strong className="text-navy">Address:</strong> {wallet.address}</div>
              <div><strong className="text-navy">Vault Ref:</strong> {wallet.vaultRef}</div>
              <div><strong className="text-navy">Eligible Tracks:</strong> {wallet.mintEligible.length}</div>
              <div><strong className="text-navy">Custody:</strong> {wallet.custodyModel ?? "external"}</div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="border border-gold/20 bg-navy p-8 text-parchment">
        <p className="engraved text-gold mb-3">Institutional Proposal Rail</p>
        <h3 className="font-serif text-2xl font-bold text-gold mb-3">Queue Safe proposals for credentials and token offerings</h3>
        <p className="text-parchment/80 leading-relaxed mb-6">
          Once a wallet is registered, the worker prepares a mint proposal for treasury approval.
          The Safe executes later. No hot signing occurs in the worker, which means the system is
          finally beginning to behave like an institution rather than an enthusiastic prototype.
        </p>

        <div className="space-y-4">
          {(loading ? [] : eligibleOfferings).map((offering) => (
            <div key={offering.id} className="border border-gold/20 p-4 bg-navy/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-serif text-lg font-bold text-parchment">{offering.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-gold/80 mt-1">
                    {offering.category} · {offering.tokenStandard}
                  </p>
                </div>
                <button
                  type="button"
                  disabled={!wallet || minting}
                  onClick={() => handleMint(offering.id)}
                  className="shrink-0 border border-gold text-gold px-4 py-2 text-xs tracking-widest uppercase font-serif hover:bg-gold hover:text-navy transition-colors disabled:opacity-50"
                >
                  {minting ? "Queueing..." : "Queue"}
                </button>
              </div>
              <p className="text-sm text-parchment/80 leading-relaxed mt-3">{offering.description}</p>
              <p className="text-xs text-parchment/60 mt-3">{offering.contractAddress}</p>
            </div>
          ))}
        </div>

        {receipt ? (
          <div className="mt-6 border-t border-gold/20 pt-6 text-sm text-parchment/85">
            <p className="engraved text-gold mb-2">Latest Mint Receipt</p>
            <p><strong className="text-parchment">Offering:</strong> {receipt.offeringName}</p>
            <p><strong className="text-parchment">Status:</strong> {receipt.status}</p>
            <p><strong className="text-parchment">Registry Anchor:</strong> {receipt.registryAnchor}</p>
            <p><strong className="text-parchment">Metadata:</strong> {receipt.metadataUri}</p>
            <p><strong className="text-parchment">Settlement:</strong> {receipt.settlement}</p>
            <p><strong className="text-parchment">Safe:</strong> {receipt.safeAddress}</p>
            <p><strong className="text-parchment">Safe Service:</strong> {receipt.safeTxServiceUrl}</p>
            {receipt.documentationUri ? (
              <p><strong className="text-parchment">Dossier:</strong> {receipt.documentationUri}</p>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
