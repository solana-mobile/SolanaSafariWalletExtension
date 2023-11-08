import CryptoKit
import Foundation
import Base58Swift
import os.log

func generateEd25519KeyPair() -> Keypair {
    return Keypair()
}

func storeKeyPair(_ keypair: Keypair) {
    let keysDictionary: [String: String] = [
        "publicKey": keypair.publicKeyToBase58String(),
        "privateKey": keypair.privateKeyToBase58String()
    ]

    do {
        let jsonData = try JSONSerialization.data(withJSONObject: keysDictionary, options: .prettyPrinted)
        if let jsonString = String(data: jsonData, encoding: .utf8) {
            sharedUserDefaults()?.set(jsonString, forKey: "keyPair")
        }
    } catch {
        print("Error serializing JSON: \(error)")
    }
}

func fetchStoredKeypair() -> Keypair? {
    let logger = OSLog(subsystem: "solanamobile.SolanaSafariWalletExtension", category: "ExtensionHandler")

    guard let defaults = sharedUserDefaults() else {
        os_log("in fetchStoredKeypair: nil case", log: logger, type: .default)
        return nil
    }

    if let jsonString = defaults.string(forKey: "keyPair"),
       let jsonData = jsonString.data(using: .utf8) {
        
        do {
            if let deserialized = try JSONSerialization.jsonObject(with: jsonData, options: []) as? [String: String],
               let _ = deserialized["publicKey"],
               let bs58PrivKey = deserialized["privateKey"] {
                return Keypair.fromPrivateKey(base58PrivateKey: (bs58PrivKey));
            }
        } catch {
            print("Error deserializing JSON: \(error)")
        }
    }
    os_log("in fetchStoredKeypair: end nil case", log: logger, type: .default)

    return nil
}

func logKeypairFromUserDefaults() {
    if let keypair = fetchStoredKeypair() {
        print("Public Key (Base58): \(keypair.publicKeyToBase58String())")
        print("Private Key (Base58): \(keypair.privateKeyToBase58String())")
    } else {
        print("Public Key: null")
        print("Private Key: null")
    }
}

func sharedUserDefaults() -> UserDefaults? {
    return UserDefaults(suiteName: "group.solanamobile.safariextensionwallet")
}
