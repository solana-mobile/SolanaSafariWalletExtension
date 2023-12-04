import Foundation
import os.log

final class ConnectRequest: SafariExtensionRequest {
    private let logger = OSLog(subsystem: "solanamobile.SolanaSafariWalletExtension", category: "ExtensionHandler")

  var response: String? {
    if let keypair = fetchStoredKeypair() {
        os_log("Fetched keypair", log: logger, type: .default)
        let publicKeyEncoded = keypair.publicKeyToBase58String()
        return publicKeyEncoded
    } else {
        os_log("Failed to fetch keypair", log: logger, type: .default)
        return nil
    }
  }
}
