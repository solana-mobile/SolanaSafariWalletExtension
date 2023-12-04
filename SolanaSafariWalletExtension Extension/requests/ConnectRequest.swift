import Foundation
import os.log

final class ConnectRequest: SafariExtensionRequest {
    var response: String? {
        if let keypair = fetchStoredKeypair() {
            os_log("Fetched keypair", type: .default)
            let publicKeyArray = [keypair.publicKeyToBase58String()]
            
            // Convert array to JSON string
            if let jsonData = try? JSONSerialization.data(withJSONObject: publicKeyArray, options: []),
               let jsonString = String(data: jsonData, encoding: .utf8) {
                return jsonString
            } else {
                os_log("Failed to serialize public key to JSON", type: .error)
                return nil
            }
        } else {
            os_log("Failed to fetch keypair", type: .default)
            return nil
        }
    }
}
