import { Base58EncodedAddress } from "../Approval/ApprovalScreen";

function parseGetAccountsResponse(
  accountsJson: any
): Base58EncodedAddress[] | null {
  try {
    console.log("right before parse", accountsJson);
    const accounts = JSON.parse(accountsJson);

    if (
      !Array.isArray(accounts) ||
      !accounts.every((item) => typeof item === "string")
    ) {
      throw new Error("Invalid format");
    }

    return accounts as Base58EncodedAddress[];
  } catch (err: any) {
    console.error("Error parsing get accounts response: ", err);
    return null;
  }
}

export async function requestNativeGetAccounts(): Promise<{
  accounts: Base58EncodedAddress[];
} | null> {
  const response = await browser.runtime.sendNativeMessage("id", {
    method: "GET_ACCOUNTS"
  });

  const accounts = parseGetAccountsResponse(response.value);

  if (accounts === null) {
    return null;
  }

  return {
    accounts
  };
}
