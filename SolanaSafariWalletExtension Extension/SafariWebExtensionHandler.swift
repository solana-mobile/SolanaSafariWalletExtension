//
//  SafariWebExtensionHandler.swift
//  SolanaSafariWalletExtension Extension
//
//  Created by Mike Sulistio on 10/3/23.
//

import SafariServices
import os.log

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
                "value": method.getRequest().response ?? "",
            ]
        ]
        os_log("Completing request", log: logger, type: .default)
        context.completeRequest(returningItems: [response], completionHandler: nil)
    }
}
