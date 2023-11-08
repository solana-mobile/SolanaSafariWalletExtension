import SwiftUI

struct WalletTabItemView: View {
    let iconName: String
    let buttonTitle: String
    let isSelected: Bool  // State to handle selected state of button

    var body: some View {
        VStack(spacing: 4) {
            Image(iconName)
                .resizable()
                .scaledToFit()
                .frame(width: 24, height: 24) // Adjust based on your preference
            Text(buttonTitle)
                .font(.title3)
                .foregroundColor(Color.primary)
        }
        .padding(8)  // Adjust this value to make sure the entire button including background is 72x58
        .frame(width: 72, height: 58)
        .background(isSelected ? Color.init(uiColor: UIColor.systemGray4) : Color.black)
        .cornerRadius(10)
    }
}

struct WalletTabItemView_Previews: PreviewProvider {
    static var previews: some View {
        WalletTabItemView(iconName: "SolToken", buttonTitle: "Files", isSelected: true)
    }
}
