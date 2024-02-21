//
//  RpcRequest.swift
//  FBSnapshotTestCase
//
//  Created by Mike Sulistio on 2/13/24.
//

import Foundation

public protocol RpcRequest: Decodable {
    var method: String { get };
    var params: Decodable { get }
}
