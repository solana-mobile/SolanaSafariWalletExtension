import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

const DUMMY_PUBLIC_KEY = "BtTKesmqAEaBoKBnwFKPFtJEGiJz2Q92bnAbqb6oWN2V";
const DUMMY_SECRET_KEY =
  "4z2CZjiaKXVFaPG5G3MRDCEfAKEXBVusN9ZPB8vY4fdTLi7o6gKJrUY2Gj88UgBcALVTyiXxsTxaj6SCL8dgboBP";

export default async function getDummyKeypair(): Promise<Keypair> {
  try {
    const response = await browser.runtime.sendNativeMessage(
      "id",
      "fetch-keypair"
    );

    if (response && response.status === "success") {
      console.log("Fetched keypair: ", response.value.keypair);
      const keypair = Keypair.fromSecretKey(response.value.keypair.privateKey);
      return keypair;
    } else if (response && response.status === "error") {
      console.error("Error fetching keypair: ", response.message);
      throw new Error(response.message);
    } else {
      console.error("Unexpected response format from native message");
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error communicating with native app:", error);
    throw error;
  }
}
