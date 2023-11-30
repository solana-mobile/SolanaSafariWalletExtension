import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { useState, useEffect } from "react";

function parseKeypairFromNativeResponse(response: any): Keypair {
  const encodedPrivateKey = response.value.keypair.privateKey;
  const encodedPublicKey = response.value.keypair.publicKey;
  const privateKeyBytes = bs58.decode(encodedPrivateKey);
  const publicKeyBytes = bs58.decode(encodedPublicKey);

  // Create a new Uint8Array with a size of 64 bytes
  const secretKey = new Uint8Array(64);
  // Set the first 32 bytes to be the privateKeyBytes
  secretKey.set(privateKeyBytes, 0);
  // Set the next 32 bytes to be the publicKeyBytes
  secretKey.set(publicKeyBytes, 32);
  return Keypair.fromSecretKey(secretKey);
}

const useDummyKeypair = (): Keypair | null => {
  const [keypair, setKeypair] = useState<Keypair | null>(null);

  useEffect(() => {
    const fetchKeypair = async () => {
      const response = await browser.runtime.sendNativeMessage(
        "id",
        "fetch-keypair"
      );

      if (response?.value?.keypair && response.status === "success") {
        const parsedKeypair: Keypair = parseKeypairFromNativeResponse(response);
        console.log("parsedPubKey: ", parsedKeypair.publicKey.toBase58());
        setKeypair(parsedKeypair);
      } else if (response && response.status === "error") {
        console.error("Error fetching keypair:", response.message);
        setKeypair(null);
      } else {
        console.error("Unexpected response format from native message");
      }
    };
    fetchKeypair();
  }, []);

  return keypair;
};

export default useDummyKeypair;
