import Foundation

final class ConnectRequest: SafariExtensionRequest {
  var response: String? {
    if let keypair = fetchStoredKeypair() {
        let publicKeyEncoded = keypair.publicKeyToBase58String()
        return publicKeyEncoded
    } else {
        return nil
    }
  }
}
