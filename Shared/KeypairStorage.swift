import Foundation
import os.log
import CodeServices

func generateEd25519KeyPair() -> KeyPair {
    return KeyPair.generate()!
}

func storeKeyPair(_ keypair: KeyPair) {
    let keysDictionary: [String: String] = [
        "publicKey": Base58.fromBytes(keypair.publicKey.bytes),
        "privateKey": Base58.fromBytes(keypair.privateKey.bytes)
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

func fetchStoredKeypair() -> KeyPair? {
    let logger = OSLog(subsystem: "solanamobile.SolanaSafariWalletExtension", category: "ExtensionHandler")

    guard let defaults = sharedUserDefaults() else {
        os_log("in fetchStoredKeypair: nil case", log: logger, type: .default)
        return nil
    }

    if let jsonString = defaults.string(forKey: "keyPair"),
       let jsonData = jsonString.data(using: .utf8) {
        
        do {
            if let deserialized = try JSONSerialization.jsonObject(with: jsonData, options: []) as? [String: String],
               let bs58PublicKey = deserialized["publicKey"],
               let bs58PrivKey = deserialized["privateKey"] {
                return KeyPair(publicKey: Key32(base58: bs58PublicKey)!, privateKey: Key64(base58: bs58PrivKey)!)
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
        print("Public Key (Base58): \(Base58.fromBytes(keypair.publicKey.bytes))")
        print("Private Key (Base58): \(Base58.fromBytes(keypair.privateKey.bytes))")
    } else {
        print("Public Key: null")
        print("Private Key: null")
    }
}

func sharedUserDefaults() -> UserDefaults? {
    return UserDefaults(suiteName: "group.solanamobile.safariextensionwallet")
}
