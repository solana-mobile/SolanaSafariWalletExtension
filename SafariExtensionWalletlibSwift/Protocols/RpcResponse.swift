//
//  RpcResponse.swift
//  FBSnapshotTestCase
//
//  Created by Mike Sulistio on 2/13/24.
//

import Foundation

public protocol RpcResponse: Decodable {
    var result: String? { get };
    var error: [String: String]? { get }
}

