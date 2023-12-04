import Foundation
import SafariServices

public enum SafariRequestType {

  case connect
  case signMessage(Any?)
  case signTransaction(Any?)

  public func getRequest() -> SafariExtensionRequest {
    switch self {
    case .connect:
        return ConnectRequest()
    case .signMessage(let input):
        return SignMessageRequest(input: input)
    case .signTransaction(let input):
        return SignTransactionRequest(input: input)
    }
  }
}

extension NSExtensionContext {

  public func requestMethod() -> SafariRequestType? {
    guard let item = inputItems.first as? NSExtensionItem,
      let rawMessage = item.userInfo?[SFExtensionMessageKey],
      let message = rawMessage as? [String: Any],
      let method = message["method"] as? String
    else {
      return nil
    }

    switch method {
        case "SOLANA_CONNECT":
            return .connect
        case "SOLANA_SIGN_MESSAGE":
            return .signMessage(message["input"])
        case "SOLANA_SIGN_TRANSACTION":
            return .signTransaction(message["input"])
    default:
      return nil
    }
  }
}
