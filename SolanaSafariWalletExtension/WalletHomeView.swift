import SwiftUI

struct WalletHomeView: View {
    
    @State private var keypair: Keypair?;

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            
            WalletTopBarView(keypair: keypair)
            
            
            Text("Main Wallet")
                .font(.title2)
                .fontWeight(.semibold)
                .foregroundColor(.black)
                .padding(.top)

                        
            // Balance Section
            VStack(alignment: .leading, spacing: 8) {
                Text("Current Balance")
                    .font(.subheadline)
                    .fontWeight(.semibold)
                    .foregroundColor(.secondary)
                Text("$0.00")
                    .font(.system(size: 44))
                    .fontWeight(.semibold)
            }
            .padding(.vertical);

            Divider()
            
            Text("Tokens").font(.subheadline).fontWeight(.semibold) .foregroundColor(.secondary).padding(.top)
            
            VStack(spacing: 32) {
                TokenRowView(tokenImage: "SolToken", tokenName: "Solana", tokenAmount: "0", tokenSymbol: "SOL", usdAmount: "0.00")
                
                TokenRowView(tokenImage: "USDCToken", tokenName: "USDC", tokenAmount: "0", tokenSymbol: "USDC", usdAmount: "0.00")
            }
            
            Spacer()
            
            HStack() {
                Spacer()
                Button(action: {
                    // Action when button is tapped
                }) {
                    HStack(alignment: .center, spacing: 4) {
                        Text("Send")
                            .foregroundColor(Color.white)
                            .font(.subheadline)
                            .fontWeight(.bold)
                        
                        Image(systemName: "arrow.up")
                            .foregroundColor(Color.white)
                            .font(.subheadline.weight(.heavy))
                    }
                    .padding(.horizontal, 20)
                    .padding(.vertical, 14)
                    .background(Color.black)
                    .cornerRadius(100)
                }
                .padding(.bottom)
            }


            
            Divider()
        }
        .padding(.bottom)
        .padding(.horizontal)
        .background(Color(.systemBackground))
        .onAppear {
            self.keypair = fetchStoredKeypair()
        }
    }
}

struct WalletHomeView_Previews: PreviewProvider {
    static var previews: some View {
        WalletHomeView()
    }
}
