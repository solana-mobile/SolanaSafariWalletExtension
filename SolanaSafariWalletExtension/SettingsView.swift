import SwiftUI
import CryptoKit
import Base58Swift

struct SettingsView: View {
    @State private var keypair: Keypair?;

    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            
            Group {
                Text("Public Key:")
                    .bold()
                if let keypair {
                    Text(keypair.publicKeyToBase58String())
                        .frame(maxWidth: .infinity, minHeight: 50)
                        .font(.footnote)
                        .padding()
                        .background(Color.gray.opacity(0.2))
                        .cornerRadius(8)
                } else {
                    Text("Not Generated")
                }
            }


            Group {
                Text("Private Key:")
                    .bold()
                    
                
                if let keypair {
                    Text(keypair.privateKeyToBase58String())
                        .frame(maxWidth: .infinity, minHeight: 50)
                        .font(.footnote)
                        .padding()
                        .background(Color.gray.opacity(0.2))
                        .cornerRadius(8)
                } else {
                    Text("Not Generated")
                }
            }
            
            HStack(alignment: .center, spacing: 6) {
                Button(action: {
                    keypair = generateEd25519KeyPair()
                    storeKeyPair(keypair!)
                }) {
                    Text("Reset wallet")
                        .frame(maxWidth: .infinity)
                }
                .buttonStyle(.borderedProminent)
                .controlSize(.large)
                .frame(maxWidth: .infinity)

                Button(action: {
                    logKeypairFromUserDefaults()
                }) {
                    Text("Log keypair")
                        .frame(maxWidth: .infinity)
                }
                .buttonStyle(.bordered)
                .controlSize(.large)
            }
        }
        .padding()
        .onAppear {
            keypair = fetchStoredKeypair()
        }
    }
}

struct SettingsView_Previews: PreviewProvider {
    static var previews: some View {
        SettingsView()
    }
}
