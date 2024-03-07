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
        guard let method = context.requestMethod() else {
            context.completeRpcRequestWith(error: WalletlibRpcErrors.methodNotFound)
            return
        }

        switch method {
        case GET_ACCOUNTS_REQUEST_METHOD:
            handleGetAccountsRequest(context: context)
        case SIGN_PAYLOADS_REQUEST_METHOD:
            handleSignPayloadsRequest(context: context)
        default:
            context.completeRpcRequestWith(error: WalletlibRpcErrors.methodNotFound)
        }
    }
    
    func handleGetAccountsRequest(context: NSExtensionContext) {
        let signer = SharedSolanaSigner()
        if let address = signer.fetchWalletPubkey() {
            context.completeRpcRequestWith(result: GetAccountsResult(addresses: [address]))
        } else {
            context.completeRpcRequestWith(error: WalletlibRpcErrors.internalError)
        }
    }
    
    func handleSignPayloadsRequest(context: NSExtensionContext) {
        guard let params: SignPayloadsParams = context.decodeRpcRequestParameter(toType: SignPayloadsParams.self),
              !params.payloads.isEmpty else {
            context.completeRpcRequestWith(error: WalletlibRpcErrors.invalidParams)
            return
        }
        
        let signer = SharedSolanaSigner()
        guard signer.fetchWalletPubkey() == params.address else {
            context.completeRpcRequestWith(error: WalletlibRpcErrors.notSigned)
            return
        }
        
        if let signedPayload = signer.signPayload(base64EncodedPayload: params.payloads[0], forAddress: params.address) {
            context.completeRpcRequestWith(result: SignPayloadsResult(signed_payloads: [signedPayload]))
        } else {
            context.completeRpcRequestWith(error: WalletlibRpcErrors.notSigned)
        }
    }
}
