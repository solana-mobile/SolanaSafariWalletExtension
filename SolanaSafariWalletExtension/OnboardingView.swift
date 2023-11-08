import SwiftUI

struct OnboardingView: View {
    var body: some View {
        VStack(spacing: 40) {
            Spacer()
            
            // Logo
            Image("Logo")
                .resizable()
                .scaledToFit()
                .frame(width: 150, height: 150)
            
            // Text
            Text("Sample iOS Wallet")
                .font(.title)
                .fontWeight(.medium)
            
            // Buttons
                NavigationLink(destination: WalletTabView()) {
                    Text("Create wallet")
                        .padding()
                        .frame(maxWidth: .infinity) // Stretch to the parent's width
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .cornerRadius(8)
                }
            
            Spacer()
        }
        .padding()
    }
}
