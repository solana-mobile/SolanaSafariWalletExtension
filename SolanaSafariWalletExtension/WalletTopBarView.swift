//
//  WalletTopBarView.swift
//  SolanaSafariWalletExtension
//
//  Created by Mike Sulistio on 10/20/23.
//

import SwiftUI
import CodeServices

func truncatePubKey(pubKeyBase58: String) -> String {
    guard pubKeyBase58.count > 6 else { return pubKeyBase58 }
    return "\(pubKeyBase58.prefix(3))...\(pubKeyBase58.suffix(3))"
}


struct WalletTopBarView: View {
    
    var keypair: KeyPair?

    var body: some View {
        HStack(spacing: 0) {
            ZStack(alignment: .leading) {
                Image("WalletLogo")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 50, height: 50)
                    .clipShape(Circle())

                Circle()
                    .frame(width: 15, height: 15)
                    .foregroundColor(Color.black)
                    .overlay(
                        Image(systemName: "chevron.down")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 8, height: 8)
                            .font(Font.title.weight(.bold))
                            .foregroundColor(.white)
                            .padding(.top, 2)
                    )
                    .offset(x: 42)
            }
            
            .frame(maxWidth: .infinity, alignment: .leading)
            
            

            HStack(alignment: .center) {
                
                Text(keypair != nil ? truncatePubKey(pubKeyBase58: Base58.fromBytes(keypair!.publicKey.bytes)) : "...")
                    .font(.system(size: 12))
                    .foregroundColor(.black)


                Image(systemName: "doc.on.doc")
                    .font(.caption)
                    .foregroundColor(.black)
            }
            .frame(maxWidth: .infinity, alignment: .center)
            .padding(.horizontal, 10)  
            .padding(.vertical, 6)
            .background(Color(.secondarySystemBackground))
            .cornerRadius(50)
            
            
            VStack(alignment: .trailing) {
                Image(systemName: "qrcode.viewfinder")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 24, height: 24)
            }
            .frame(maxWidth: .infinity, alignment: .trailing)
        }
        .frame(maxWidth: .infinity)
        .padding(.bottom, 12)
        .background(Color(.systemBackground))
    }
}

struct WalletTopBarView_Previews: PreviewProvider {
    static var previews: some View {
        WalletTopBarView()
    }
}
