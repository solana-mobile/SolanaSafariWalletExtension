import SwiftUI

struct TokenRowView: View {
    var tokenImage: String  
    var tokenName: String   
    var tokenAmount: String 
    var tokenSymbol: String 
    var usdAmount: String   

    var body: some View {
        HStack {
            Image(tokenImage)  
                .frame(width: 36, height: 36)
                .clipShape(Circle())
                .background(Circle().fill(Color.init(uiColor: UIColor.systemGray5)))  

            VStack(alignment: .leading, spacing: 6) {  
                Text(tokenName)
                    .font(.body)
                Text(tokenAmount + " " + tokenSymbol)
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            .padding(.leading, 6)

            Spacer()

            Text("$\(usdAmount)") 
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
