import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join, resolve } from "path";
import { sha256 } from "../src/lib/canonical";
import { addJsonToIpfs, assertLocalIpfsAvailable } from "./ipfs-client";

interface CredentialRequest {
  recipientName: string;
  walletAddress: string;
  programme: string;
  credentialType: "degree" | "certificate" | "fellowship";
  title: string;
  distinction?: string;
  issuedBy?: string;
  effectiveDate?: string;
}

function usage() {
  console.log("Usage: npx tsx --tsconfig tsconfig.scripts.json scripts/issue-credential.ts <request.json>");
}

async function main() {
  const inputPath = process.argv[2];
  if (!inputPath) {
    usage();
    process.exit(1);
  }

  const absoluteInput = resolve(process.cwd(), inputPath);
  const request = JSON.parse(readFileSync(absoluteInput, "utf8")) as CredentialRequest;
  const issuedAt = request.effectiveDate || new Date().toISOString();

  await assertLocalIpfsAvailable();

  const registryAnchor = sha256(
    [
      request.recipientName,
      request.walletAddress,
      request.programme,
      request.credentialType,
      request.title,
      issuedAt,
    ].join("|")
  );

  const metadata = {
    name: `${request.title} — ${request.recipientName}`,
    description: `${request.credentialType} issued by Fitzherbert University to ${request.recipientName}.`,
    image: "https://university.xxxiii.io/images/coat-of-arms.png",
    external_url: "https://university.xxxiii.io/on-chain",
    attributes: [
      { trait_type: "Recipient", value: request.recipientName },
      { trait_type: "Wallet", value: request.walletAddress },
      { trait_type: "Programme", value: request.programme },
      { trait_type: "Credential Type", value: request.credentialType },
      { trait_type: "Registry Anchor", value: registryAnchor },
      ...(request.distinction ? [{ trait_type: "Distinction", value: request.distinction }] : []),
    ],
  };

  const dossier = {
    institution: "Fitzherbert University",
    issuedBy: request.issuedBy || "Office of the Registrar",
    issuedAt,
    registryAnchor,
    request,
    metadata,
    chain: {
      network: "Polygon PoS",
      settlementMode: "Safe proposal / institutional execution",
    },
    archive: {
      canonicalProfile: "Credential Issuance v1",
      ipfsOrigin: process.env.IPFS_RPC_URL || "http://127.0.0.1:5001",
    },
  };

  const metadataIpfs = await addJsonToIpfs(`${registryAnchor}-metadata.json`, metadata);
  const dossierIpfs = await addJsonToIpfs(`${registryAnchor}-dossier.json`, dossier);

  const manifest = {
    generatedAt: new Date().toISOString(),
    registryAnchor,
    metadata: metadataIpfs,
    dossier: dossierIpfs,
    request,
  };

  const outPath = join(process.cwd(), "artifacts", "credentials", `${registryAnchor}.json`);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(manifest, null, 2), "utf8");

  console.log("─────────────────────────────────────────────");
  console.log("  FITZHERBERT CREDENTIAL ISSUANCE");
  console.log("─────────────────────────────────────────────");
  console.log(`  ✓ Registry anchor: ${registryAnchor}`);
  console.log(`  ✓ Metadata CID:   ${metadataIpfs.cid}`);
  console.log(`  ✓ Dossier CID:    ${dossierIpfs.cid}`);
  console.log(`  ✓ Manifest:       ${outPath}`);
  console.log("─────────────────────────────────────────────");
}

main().catch((error) => {
  console.error("Credential issuance failed:", error instanceof Error ? error.message : error);
  process.exit(1);
});
