// swift-tools-version:5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "SolanaCore",
    platforms: [
        .iOS(.v15),
        .macOS(.v11),
    ],
    products: [
        .library(
            name: "CodeServices",
            targets: ["CodeServices", "ed25519"]
        ),
    ],
    targets: [
        .target(
            name: "CodeServices",
            dependencies: [
                "ed25519",
            ]
        ),
        .target(
            name: "ed25519",
            dependencies: []
        ),
        .testTarget(
            name: "CodeServicesTests",
            dependencies: ["CodeServices"]
        ),
    ]
)
