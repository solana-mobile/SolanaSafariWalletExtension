import Foundation

final class SignMessageRequest: SafariExtensionRequest {
    
    private let input: Any?
    
    public init(input: Any?) {
        self.input = input;
    }

    var response: String? {
        if let keypair = fetchStoredKeypair() {
            let publicKeyEncoded = keypair.publicKeyToBase58String()
            return publicKeyEncoded
        } else {
            return nil
        }
    }
}
