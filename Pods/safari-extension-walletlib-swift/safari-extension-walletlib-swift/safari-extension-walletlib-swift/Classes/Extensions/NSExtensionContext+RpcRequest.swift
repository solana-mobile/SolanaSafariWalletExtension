//
//  NSExtensionContext+RpcParsing.swift
//  FBSnapshotTestCase
//
//  Created by Mike Sulistio on 2/13/24.
//

import Foundation
import SafariServices

public extension NSExtensionContext {
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
            print("Error converting Params JSON string to Data")
            return nil
        }
        
        do {
            // Convert paramsJSON back to Data for decoding
            let decoder = JSONDecoder()
            let params = try decoder.decode(T.self, from: jsonData)
            return params
        } catch {
            print("Failed to decode parameters: \(error)")
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
                    "result": resultJsonString, // Pass jsonString here
                    "error": nil
                ]
            ]
            self.completeRequest(returningItems: [response])
        } catch {
            self.completeRpcRequestWith(errorMessage: "Failed to encode result to JSON")
        }
    }
    
    func completeRpcRequestWith(errorMessage: String) -> Void {
        let response = NSExtensionItem()
        response.userInfo = [
            SFExtensionMessageKey: [
                "result": nil,
                "error": [
                    "message": errorMessage
                ]
            ]
        ]
        self.completeRequest(returningItems: [response])
    }
}
