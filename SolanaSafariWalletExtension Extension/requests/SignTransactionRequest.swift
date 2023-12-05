import Foundation
import CodeServices

final class SignTransactionRequest: SafariExtensionRequest {
    
    private let input: Any?
    
    public init(input: Any?) {
        self.input = input;
    }

    var response: String? {
        if let keypair = fetchStoredKeypair() {
            let publicKeyEncoded = Base58.fromBytes(keypair.publicKey.bytes)
            return publicKeyEncoded
        } else {
            return nil
        }
    }
}
