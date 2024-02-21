//
//  SafariWebExtensionHandler.swift
//  SolanaSafariWalletExtension Extension
//
//  Created by Mike Sulistio on 10/3/23.
//

import SafariServices
import os.log
import SafariExtensionWalletlibSwift

class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {
    
    private let logger = OSLog(subsystem: "solanamobile.SolanaSafariWalletExtension", category: "ExtensionHandler")
    
    private var context: NSExtensionContext?
    
    func beginRequest(with context: NSExtensionContext) {
        os_log("DEBUGLOG: beginRequest start")
        guard let method = context.requestMethod() else {
            context.completeRpcRequestWith(errorMessage: "Unsupported method")
            return
        }

        
        
        switch method {
        case GET_ACCOUNTS_REQUEST_METHOD:
            handleGetAccountsRequest(context: context)
        case SIGN_PAYLOADS_REQUEST_METHOD:
            handleSignPayloadsRequest(context: context)
        default:
            context.completeRpcRequestWith(errorMessage: "Unsupported method")
        }
    }
    
    func handleGetAccountsRequest(context: NSExtensionContext) {
        let signer = SharedSolanaSigner()
        if let address = signer.fetchWalletPubkey() {
            context.completeRpcRequestWith(result: GetAccountsResult(addresses: [address]))
        } else {
            context.completeRpcRequestWith(errorMessage: "Failed to fetch account")
        }
    }
    
    func handleSignPayloadsRequest(context: NSExtensionContext) {
        guard let params: SignPayloadsParams = context.decodeRpcRequestParameter(toType: SignPayloadsParams.self),
              !params.payloads.isEmpty else {
            context.completeRpcRequestWith(errorMessage: "Error parsing Sign Payloads request")
            return
        }
        
        let signer = SharedSolanaSigner()
        guard signer.fetchWalletPubkey() == params.address else {
            context.completeRpcRequestWith(errorMessage: "Mismatched wallet account address")
            return
        }
        
        if let signedPayload = signer.signPayload(base64EncodedPayload: params.payloads[0], forAddress: params.address) {
            context.completeRpcRequestWith(result: SignPayloadsResult(signed_payloads: [signedPayload]))
        } else {
            context.completeRpcRequestWith(errorMessage: "Error during payload signing")
        }
    }
}
