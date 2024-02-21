export type Base64EncodedAddress = string;
export type Base64EncodedTransaction = string;
export type Base64EncodedMessage = string;
export type Base58EncodedAddress = string;
export type Base64EncodedPayload = string;
export type Base64EncodedSignedPayload = string;

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONArray
  | JSONObject;

export interface JSONArray extends Array<JSONValue> {}

export interface JSONObject {
  [key: string]: JSONValue;
}

export interface NativeRpcRequest {
  method: string;
  params: JSONObject;
}

export interface NativeRpcResponse {
  result?: string;
  error?: {
    code: number;
    message: string;
  };
}
