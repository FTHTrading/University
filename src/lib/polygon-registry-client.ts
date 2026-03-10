const CHAIN_BASE_URL =
  typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:8787"
    : "https://university.xxxiii.io";

export interface PolygonOffering {
  id: string;
  name: string;
  category: string;
  tokenStandard: string;
  contractAddress: string;
  description: string;
  mintMode: string;
}

export interface WalletProvisionRequest {
  name: string;
  email?: string;
  entityType: "student" | "staff" | "visiting-intelligence" | "sponsor" | "partner";
  programme: string;
  walletAddress: string;
}

export interface ProvisionedWallet {
  walletId: string;
  address: string;
  vaultRef: string;
  network: string;
  programme: string;
  entityType: string;
  mintEligible: string[];
  custodyModel?: string;
}

export interface MintRequest {
  walletId: string;
  offeringId: string;
  recipientName: string;
  programme: string;
}

export interface MintReceipt {
  mintId: string;
  status: string;
  address: string;
  offeringId: string;
  offeringName: string;
  contractAddress: string;
  metadataUri: string;
  registryAnchor: string;
  settlement: string;
  safeAddress?: string;
  safeTxServiceUrl?: string;
  documentationUri?: string;
}

export async function fetchPolygonCatalog() {
  const res = await fetch(`${CHAIN_BASE_URL}/api/chain/catalog`, {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Unable to load registry catalog (${res.status})`);
  }

  return (await res.json()) as {
    network: { name: string; chainId: number; currency: string };
    offerings: PolygonOffering[];
    programmes: string[];
  };
}

export async function provisionPolygonWallet(request: WalletProvisionRequest) {
  const res = await fetch(`${CHAIN_BASE_URL}/api/chain/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    throw new Error(`Unable to provision wallet (${res.status})`);
  }

  return (await res.json()) as ProvisionedWallet;
}

export async function mintInstitutionalOffering(request: MintRequest) {
  const res = await fetch(`${CHAIN_BASE_URL}/api/chain/mint`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    throw new Error(`Unable to mint offering (${res.status})`);
  }

  return (await res.json()) as MintReceipt;
}
