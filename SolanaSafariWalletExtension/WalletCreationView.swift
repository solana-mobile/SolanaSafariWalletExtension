import SwiftUI

struct WalletCreationView: View {
    @State private var publicKey: String? = nil
    @State private var isContinueEnabled: Bool = false
    @State private var shouldNavigate: Bool = false

    var body: some View {
        VStack(spacing: 20) {
            // Text
            Text("Generate a keypair")
                .font(.title)
                .fontWeight(.medium)
                .multilineTextAlignment(.leading)
            
            // Vertical button stack
            HStack(spacing: 4) {
                Button(action: generateKey) {
                    Text("Generate")
                        .padding()
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .cornerRadius(8)
                }
                
                Button(action: {
                    self.shouldNavigate = true
                }) {
                    Text("Continue")
                        .padding()
                        .background(isContinueEnabled ? Color.green : Color.gray)
                        .foregroundColor(.white)
                        .cornerRadius(8)
                }
                .disabled(!isContinueEnabled)

                NavigationLink(destination: WalletView(), isActive: $shouldNavigate) {
                    EmptyView()
                }
            }

            Spacer()
        }
        .padding()
        .navigationBarBackButtonHidden(true)
    }

    func generateKey() {
        publicKey = "SampleGeneratedKey12345"
        isContinueEnabled = true
    }
}
