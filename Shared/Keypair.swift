//
//  Keypair.swift
//  SolanaSafariWalletExtension
//
//  Created by Mike Sulistio on 10/23/23.
//

import CryptoKit
import Base58Swift

// Ed25519 keypair
class Keypair {
    private var privateKey: Curve25519.Signing.PrivateKey
    private var publicKey: Curve25519.Signing.PublicKey

    init() {
        self.privateKey = Curve25519.Signing.PrivateKey()
        self.publicKey = privateKey.publicKey
    }

    static func fromPrivateKey(base58PrivateKey: String) -> Keypair? {
        guard let privateKeyData = Base58.base58Decode(base58PrivateKey),
              let privateKey = try? Curve25519.Signing.PrivateKey(rawRepresentation: privateKeyData) else {
            return nil
        }
        
        let keypair = Keypair()
        keypair.privateKey = privateKey
        keypair.publicKey = privateKey.publicKey
        return keypair
    }
    

    func privateKeyToBase58String() -> String {
        return Base58.base58Encode([UInt8](privateKey.rawRepresentation))
    }

    func publicKeyToBase58String() -> String {
        return Base58.base58Encode([UInt8](publicKey.rawRepresentation))
    }
}
