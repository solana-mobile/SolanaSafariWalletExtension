//
//  SolanaSigner.swift
//  SolanaSafariWalletExtension Extension
//
//  Created by Mike Sulistio on 2/14/24.
//

import Foundation

class SharedSolanaSigner {
    
    func signPayload(base64EncodedPayload: String, forAddress: String) -> String? {
        guard let keypair = fetchStoredKeypair() else {
            return nil
        }

        guard let messageBytes = Data(base64Encoded: base64EncodedPayload) else {
            return nil
        }
        
        let signedMessageBytes = keypair.sign(messageBytes)
        return signedMessageBytes.bytes.data.base64EncodedString()
    }
}
