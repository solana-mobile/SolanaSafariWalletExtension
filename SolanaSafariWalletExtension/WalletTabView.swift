import SwiftUI

struct WalletTabView: View {
    @State private var selectedTab: Int = 0
    
    var body: some View {
        TabView(selection: $selectedTab) {
            WalletHomeView()
                .tabItem {
                    WalletTabItemView(iconName: "Wallet", buttonTitle: "Wallet", isSelected: selectedTab == 0)
                }
                .tag(0)
                .background(Color.blue)
                
            SettingsView()
                .tabItem {
                    WalletTabItemView(iconName: "Settings", buttonTitle: "Settings", isSelected: selectedTab == 1)
                }
                .tag(1)

        }
        .navigationBarBackButtonHidden(true)
    }
}
