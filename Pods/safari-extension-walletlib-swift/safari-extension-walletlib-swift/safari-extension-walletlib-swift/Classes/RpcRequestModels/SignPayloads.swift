public struct SignPayloadsParams: Decodable {
    public let address: String // Base64EncodedAddress
    public let payloads: [String] // Base64EncodedPayload
    public let extra_data: [String: String]?
}

public struct SignPayloadsResult: Encodable {
    public let signed_payloads: [String] // Base64EncodedSignedPayload
    
    public init(signed_payloads: [String]) {
        self.signed_payloads = signed_payloads
    }
}

public let SIGN_PAYLOADS_REQUEST_METHOD = "NATIVE_SIGN_PAYLOADS_METHOD"
