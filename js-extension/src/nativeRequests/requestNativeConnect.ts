import {
  ConnectRequest,
  StandardConnectOutputEncoded,
  WalletAccountEncoded
} from "../types/messageTypes";

type Address = string;

function parseConnectResponse(response: any): Address[] | null {
  try {
    const accounts = JSON.parse(response.value);

    if (
      !Array.isArray(accounts) ||
      !accounts.every((item) => typeof item === "string")
    ) {
      throw new Error("Invalid format");
    }

    return accounts as Address[];
  } catch (err: any) {
    console.error("Error parsing connect response: ", err);
    return null;
  }
}

export async function requestNativeConnect(
  request: ConnectRequest
): Promise<StandardConnectOutputEncoded | null> {
  const response = await browser.runtime.sendNativeMessage("id", request);

  const accounts = parseConnectResponse(response.value);

  if (accounts === null) {
    return null;
  }

  const account: WalletAccountEncoded = {
    address: accounts[0],
    publicKey: accounts[0],
    chains: [
      "solana:mainnet",
      "solana:devnet",
      "solana:testnet",
      "solana:localnet"
    ],
    features: [],
    label: "Sample Safari Extension Wallet"
  };

  return {
    accounts: [account]
  };
}
