import { Base58EncodedAddress } from '../Approval/ApprovalScreen';
import {
  ConnectRequest,
  StandardConnectOutputEncoded,
  WalletAccountEncoded,
} from '../messages/walletMessage';

function parseConnectResponse(
  accountsJson: any
): Base58EncodedAddress[] | null {
  try {
    const accounts = JSON.parse(accountsJson);

    if (
      !Array.isArray(accounts) ||
      !accounts.every(item => typeof item === 'string')
    ) {
      throw new Error('Invalid format');
    }

    return accounts as Base58EncodedAddress[];
  } catch (err: any) {
    console.error('Error parsing connect response: ', err);
    return null;
  }
}

export async function requestNativeConnect(
  request: ConnectRequest
): Promise<StandardConnectOutputEncoded | null> {
  const response = await browser.runtime.sendNativeMessage('id', request);
  const accounts = parseConnectResponse(response.value);

  if (accounts === null) {
    return null;
  }

  const account: WalletAccountEncoded = {
    address: accounts[0],
    publicKey: accounts[0],
    chains: [
      'solana:mainnet',
      'solana:devnet',
      'solana:testnet',
      'solana:localnet',
    ],
    features: [],
    label: 'Sample Safari Extension Wallet',
  };

  return {
    accounts: [account],
  };
}
