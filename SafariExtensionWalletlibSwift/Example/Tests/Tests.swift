// https://github.com/Quick/Quick

import Quick
import Nimble
import SafariExtensionWalletlibSwift

class TableOfContentsSpec: QuickSpec {
    override func spec() {
        describe("Basic Request Processing") {
            let rpcRequestProcessor = RPCRequestProcessor()
            // Process the request
            rpcRequestProcessor.processExtensionRequest(NSExtensionContext()) { request, completion in
                // Here, you'd handle different types of requests based on `request.method`
                switch request.method {
                case "testMethod":
                    print("Handling testMethod")
                    // Create a mock response
                    // Call completion with the mock response
                    completion(response)
                default:
                    print("Unknown method")
                    // Optionally, you could call completion with an error response here
                }
            }
            it("can do maths") {
                expect(1) == 2
            }

            it("can read") {
                expect("number") == "string"
            }

            it("will eventually fail") {
                expect("time").toEventually( equal("done") )
            }
            
            context("these will pass") {

                it("can do maths") {
                    expect(23) == 23
                }

                it("can read") {
                    expect("🐮") == "🐮"
                }

                it("will eventually pass") {
                    var time = "passing"

                    DispatchQueue.main.async {
                        time = "done"
                    }

                    waitUntil { done in
                        Thread.sleep(forTimeInterval: 0.5)
                        expect(time) == "done"

                        done()
                    }
                }
            }
        }
    }
}
