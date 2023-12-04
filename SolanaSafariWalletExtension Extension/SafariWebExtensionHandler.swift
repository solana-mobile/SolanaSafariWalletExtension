//
//  SafariWebExtensionHandler.swift
//  SolanaSafariWalletExtension Extension
//
//  Created by Mike Sulistio on 10/3/23.
//

import SafariServices
import os.log
import Base58Swift

class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {
    
    private let logger = OSLog(subsystem: "solanamobile.SolanaSafariWalletExtension", category: "ExtensionHandler")
    
    private var context: NSExtensionContext?

    func beginRequest(with context: NSExtensionContext) {
        os_log("In beginRequest", log: logger, type: .default)
        guard let method = context.requestMethod() else {
            os_log("Method request failed", log: logger, type: .default)
            return
        }
        let response = NSExtensionItem()
        response.userInfo = [
            SFExtensionMessageKey: [
                "output": method.getRequest().response ?? "",
            ]
        ]
        os_log("Completing request", log: logger, type: .default)
        context.completeRequest(returningItems: [response], completionHandler: nil)
    }

//    func beginRequest(with context: NSExtensionContext) {
//        os_log("in beginRequest", log: logger, type: .default)
//
//        guard let item = context.inputItems.first as? NSExtensionItem,
//              let userInfo = item.userInfo as? [String: Any],
//              let message = userInfo[SFExtensionMessageKey] as? String else {
//            onError(context: context, errorMessage: "Invalid message format received by Extension handler")
//            return
//        }
//
//        if message != "fetch-keypair" {
//            onError(context: context, errorMessage: "Invalid message type received by Extension handler")
//        }
//
//
//
//        if let keypair = fetchStoredKeypair() {
//            onSuccess(context: context, value: [
//                "keypair": [
//                    "publicKey": keypair.publicKeyToBase58String(),
//                    "privateKey": keypair.privateKeyToBase58String()
//                ]
//            ])
//        } else {
//            // Handle the case where keypair is nil but no error was thrown
//            onError(context: context, errorMessage: "Failed to fetch keypair")
//        }
//    }
    
    
    // Success handler
    func onSuccess(context: NSExtensionContext, value: [String: Any]) {
        let response = NSExtensionItem()
        response.userInfo = [
            SFExtensionMessageKey: [
                "status": "success",
                "value": value
            ]
        ]
        context.completeRequest(returningItems: [response], completionHandler: nil)
    }

    // Error handler
    func onError(context: NSExtensionContext, errorMessage: String) {
        let response = NSExtensionItem()
        response.userInfo = [
            SFExtensionMessageKey: [
                "status": "error",
                "message": errorMessage
            ]
        ]
        context.completeRequest(returningItems: [response], completionHandler: nil)
    }
}
