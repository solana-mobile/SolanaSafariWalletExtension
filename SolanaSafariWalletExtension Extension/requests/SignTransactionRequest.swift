import Foundation
import CodeServices
import os.log

final class SignTransactionRequest: SafariExtensionRequest {
    
    private let input: Any?
    
    public init(input: Any?) {
        self.input = input;
    }

    var response: String? {
        os_log("In sign transaction", type: .default)

        guard let keypair = fetchStoredKeypair() else {
            return nil
        }

        guard let inputDict = input as? [String: Any],
              let jsonData = try? JSONSerialization.data(withJSONObject: inputDict, options: []) else {
            os_log("Invalid input or unable to convert dictionary to JSON", type: .default)
            return nil
        }
        
        os_log("JSON Data: %@", String(data: jsonData, encoding: .utf8) ?? "Invalid JSON")

        
        do {
            let transactionParams = try JSONDecoder().decode(SignTransactionParams.self, from: jsonData)
            os_log("Signing", type: .default)
            
            // Mismatched accounts
            if (transactionParams.account != keypair.publicKey.base58) {
                return nil;
            }

            guard var tx = SolanaTransaction(data: Data(Base58.toBytes(transactionParams.transaction))) else {
                os_log("Unable to serialize transaction", type: .default)
                return nil
            }
            
            try tx.sign(using: keypair);
            os_log("Done signing", type: .default)
            return Base58.fromBytes(tx.encode().bytes)
        } catch {
            os_log("Failed to decode JSON: %@", type: .error, error.localizedDescription)
            return nil
        }
    }

}
