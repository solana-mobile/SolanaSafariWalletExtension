import SwiftUI

struct TokenRowView: View {
    var tokenImage: String  // the name of the image for the token
    var tokenName: String   // the name of the token
    var tokenAmount: String // the amount of the token
    var tokenSymbol: String // the amount of the token
    var usdAmount: String   // the equivalent USD amount

    var body: some View {
        HStack {
            Image(tokenImage)  // Image on the very left
                .frame(width: 36, height: 36)
                .clipShape(Circle())
                .background(Circle().fill(Color.init(uiColor: UIColor.systemGray5)))  // Adding a gray circle background

            VStack(alignment: .leading, spacing: 6) {  // VStack with Token Name and Token Amount
                Text(tokenName)
                    .font(.body)
                Text(tokenAmount + " " + tokenSymbol)
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            .padding(.leading, 6)

            Spacer()

            Text("$\(usdAmount)")  // USD amount on the very right
                .font(.headline)
                .padding(.trailing, 8)
        }
    }
}

struct TokenRowView_Previews: PreviewProvider {
    static var previews: some View {
        TokenRowView(tokenImage: "token_image_name", tokenName: "TokenName", tokenAmount: "123.456", tokenSymbol: "SOL",
                     usdAmount: "789.01")
            .previewLayout(.sizeThatFits)
    }
}
