public struct GetAccountsParams: Decodable {
    public let extra_data: [String: String]?
}

public struct GetAccountsResult: Encodable {
    public let addresses: [String] // Assuming Base58EncodedAddress is a base58-encoded string
    
    // Public initializer
    public init(addresses: [String]) {
        self.addresses = addresses
    }
}

public let GET_ACCOUNTS_REQUEST_METHOD = "NATIVE_GET_ACCOUNTS_METHOD"
