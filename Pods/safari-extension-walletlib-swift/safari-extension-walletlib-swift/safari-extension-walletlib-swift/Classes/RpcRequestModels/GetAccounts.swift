public struct GetAccountsResult: Encodable {
    // Base58 encoded address
    public let addresses: [String]
    
    public init(addresses: [String]) {
        self.addresses = addresses
    }
}

public let GET_ACCOUNTS_REQUEST_METHOD = "NATIVE_GET_ACCOUNTS_METHOD"
