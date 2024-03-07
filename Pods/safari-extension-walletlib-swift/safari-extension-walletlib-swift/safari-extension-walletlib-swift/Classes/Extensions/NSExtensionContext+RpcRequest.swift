import Foundation
import SafariServices

public extension NSExtensionContext {
    func requestId() -> String? {
        guard let item = self.inputItems.first as? NSExtensionItem,
              let rawMessage = item.userInfo?[SFExtensionMessageKey] as? [String: Any],
              let id = rawMessage["id"] as? String else {
            return nil
        }
        return id
    }
    
    func requestMethod() -> String? {
        guard let item = self.inputItems.first as? NSExtensionItem,
              let rawMessage = item.userInfo?[SFExtensionMessageKey] as? [String: Any],
              let method = rawMessage["method"] as? String else {
            return nil
        }
        return method
    }
    
    func decodeRpcRequestParameter<T: Decodable>(toType type: T.Type) -> T? {
        guard let item = self.inputItems.first as? NSExtensionItem,
              let rawMessage = item.userInfo?[SFExtensionMessageKey] as? [String: Any],
              let paramsJsonString = rawMessage["params"] as? String else {
            return nil
        }
        
        guard let jsonData = paramsJsonString.data(using: .utf8) else {
            return nil
        }
        
        do {
            // Convert paramsJSON back to Data for decoding
            let decoder = JSONDecoder()
            let params = try decoder.decode(T.self, from: jsonData)
            return params
        } catch {
            return nil
        }
    }
    
    func completeRpcRequestWith(result: Encodable) {
        do {
            let encoder = JSONEncoder()
            let resultJsonData = try encoder.encode(result)
            let resultJsonString = String(data: resultJsonData, encoding: .utf8)
            
            let response = NSExtensionItem()
            response.userInfo = [
                SFExtensionMessageKey: [
                    
                    "jsonrpc": "2.0",
                    "id": self.requestId(),
                    "result": resultJsonString, // Pass jsonString here
                    "error": nil,
                ]
            ]
            self.completeRequest(returningItems: [response])
        } catch {
            self.completeRpcRequestWith(error: WalletlibRpcErrors.internalError)
        }
    }
    
    func completeRpcRequestWith(error: RPCError) -> Void {
        self.completeRpcRequestWith(errorCode: error.code, errorMessage: error.message)
    }
    
    func completeRpcRequestWith(errorCode: Int, errorMessage: String) -> Void {
        let response = NSExtensionItem()
        response.userInfo = [
            SFExtensionMessageKey: [
                "jsonrpc": "2.0",
                "id": self.requestId(),
                "result": nil,
                "error": [
                    "code": errorCode,
                    "message": errorMessage
                ]
            ]
        ]
        self.completeRequest(returningItems: [response])
    }
}
