import Foundation
import CodeServices
import ed25519
import os.log

final class SignMessageRequest: SafariExtensionRequest {
    
    private let input: Any?
    
    public init(input: Any?) {
        self.input = input;
    }

    var response: String? {
        os_log("In sign message", type: .default)

        guard let keypair = fetchStoredKeypair() else {
            return nil
        }

        guard let inputDict = input as? [String: Any],
              let message = inputDict["message"] as? String else {
            os_log("Invalid input or unable to extract message", type: .default)
            return nil
        }

        os_log("Signing", type: .default)
        
        let messageBytes = Base58.toBytes(message);
        let signedMessageBytes = keypair.sign(messageBytes)
        
        os_log("Done signing", type: .default)

        return Base58.fromBytes(signedMessageBytes.bytes)
    }

}
