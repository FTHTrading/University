import { readFileSync } from "fs";

export interface IpfsAddResult {
  cid: string;
  uri: string;
  gatewayUrl: string;
}

const DEFAULT_IPFS_RPC_URL = process.env.IPFS_RPC_URL || "http://127.0.0.1:5001";
const DEFAULT_IPFS_GATEWAY = process.env.IPFS_GATEWAY_BASE || "http://127.0.0.1:8080/ipfs";

function normalizeRpcBase(url: string) {
  return url.replace(/\/$/, "");
}

export async function assertLocalIpfsAvailable() {
  const response = await fetch(`${normalizeRpcBase(DEFAULT_IPFS_RPC_URL)}/api/v0/version`, {
    method: "POST",
    headers: {
      Origin: "http://localhost:3000",
    },
  });

  if (!response.ok) {
    throw new Error(`IPFS RPC unavailable (${response.status}). Ensure Kubo is running on ${DEFAULT_IPFS_RPC_URL}.`);
  }
}

export async function addJsonToIpfs(fileName: string, payload: Record<string, unknown>): Promise<IpfsAddResult> {
  const form = new FormData();
  form.append(
    "file",
    new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }),
    fileName
  );

  const response = await fetch(
    `${normalizeRpcBase(DEFAULT_IPFS_RPC_URL)}/api/v0/add?pin=true&cid-version=1&wrap-with-directory=false`,
    {
      method: "POST",
      headers: {
        Origin: "http://localhost:3000",
      },
      body: form,
    }
  );

  if (!response.ok) {
    throw new Error(`IPFS add failed (${response.status})`);
  }

  const text = await response.text();
  const lastLine = text.trim().split("\n").filter(Boolean).pop();
  if (!lastLine) {
    throw new Error("IPFS add returned no payload");
  }

  const parsed = JSON.parse(lastLine) as { Hash?: string };
  if (!parsed.Hash) {
    throw new Error("IPFS add returned no CID");
  }

  return {
    cid: parsed.Hash,
    uri: `ipfs://${parsed.Hash}`,
    gatewayUrl: `${DEFAULT_IPFS_GATEWAY.replace(/\/$/, "")}/${parsed.Hash}`,
  };
}

export async function addFileToIpfs(filePath: string): Promise<IpfsAddResult> {
  const fileBytes = readFileSync(filePath);
  const fileName = filePath.replace(/^.*[\\/]/, "");
  const form = new FormData();
  form.append("file", new Blob([fileBytes]), fileName);

  const response = await fetch(
    `${normalizeRpcBase(DEFAULT_IPFS_RPC_URL)}/api/v0/add?pin=true&cid-version=1&wrap-with-directory=false`,
    {
      method: "POST",
      headers: {
        Origin: "http://localhost:3000",
      },
      body: form,
    }
  );

  if (!response.ok) {
    throw new Error(`IPFS file add failed (${response.status})`);
  }

  const text = await response.text();
  const lastLine = text.trim().split("\n").filter(Boolean).pop();
  if (!lastLine) {
    throw new Error("IPFS file add returned no payload");
  }

  const parsed = JSON.parse(lastLine) as { Hash?: string };
  if (!parsed.Hash) {
    throw new Error("IPFS file add returned no CID");
  }

  return {
    cid: parsed.Hash,
    uri: `ipfs://${parsed.Hash}`,
    gatewayUrl: `${DEFAULT_IPFS_GATEWAY.replace(/\/$/, "")}/${parsed.Hash}`,
  };
}

async function main() {
  await assertLocalIpfsAvailable();
  console.log(`IPFS RPC reachable at ${DEFAULT_IPFS_RPC_URL}`);
}

if (process.argv[1]?.endsWith("scripts\\ipfs-client.ts") || process.argv[1]?.endsWith("scripts/ipfs-client.ts")) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
