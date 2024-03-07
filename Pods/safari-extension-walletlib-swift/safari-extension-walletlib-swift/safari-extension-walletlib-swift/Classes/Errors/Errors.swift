import Foundation

public struct RPCError {
    let code: Int
    let message: String
}

public class WalletlibRpcErrors {
    public static let parseError = RPCError(code: -32700, message: "Parse error")
    public static let invalidRequest = RPCError(code: -32600, message: "Invalid Request")
    public static let methodNotFound = RPCError(code: -32601, message: "Method not found")
    public static let invalidParams = RPCError(code: -32602, message: "Invalid params")
    public static let internalError = RPCError(code: -32603, message: "Internal error")
    public static let notSigned = RPCError(code: -3, message: "Payload not signed")
}
