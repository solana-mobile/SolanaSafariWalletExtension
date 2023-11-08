# Safari Web Extension Wallet for iOS

> This repository showcases an example iOS wallet that utilizes a **Safari Web Extension** to enable wallet signing within the Safari browser.

## Demo

[Video](https://github.com/Michaelsulistio/SolanaSafariWalletExtension/assets/18451967/b40ce3e3-33bb-4c60-9486-4b34f8db0076) of a Jupiter Exchange swap

<div style="display: flex;">
    <img src="assets/ExtensionScreen1.png" width="25%">
    &nbsp;<img src="assets/ExtensionScreen2.png" width="25%">
    &nbsp;<img src="assets/ExtensionScreen3.png" width="25%">
</div>

## Installation

1. Download [Xcode](https://developer.apple.com/xcode/)
2. Build the Extension's JS bundle: `cd js-extension && npm install && npm run build:publish`
3. Open the project in Xcode, choose your simulator/device, build and run.

## Enable the extension

1. In Safari, press the _Aa_ menu and click _Manage Extensions_
2. In the extensions list, find the name, "Solana Safari Extension Wallet", and enable it.
3. Back in the _Aa_ menu, press new "Solana Safari Extension Wallet" button.
4. Select "Always allow" then "Always allow on every website".

## Reference

`js-extension`: The React UI that renders within the safari browser. The UI is bundled into raw minified `.js` scripts which are exported to the Safari Extension folder with `npm run build:publish`.

`SolanaSafariWalletExtension Extension`: The **Safari Web Extension** code. This contains the bundled `js` and `html` from the `js-extension` folder and also the _Extension handler_ code, which acts as a bridge between JS and the native app.

`SolanaSafariWalletExtension`: The native iOS wallet app built with SwiftUI.

## What is a Safari Web Extension?

A [Safari Web Extension](https://developer.apple.com/documentation/safariservices/safari_web_extensions) allows an iOS app to add customized functionality to
the Safari mobile browser. Similar to a Chrome browser extension, the Safari Web Extension can run background/content scripts and inject javascript into the web page.

The **key benefit** of the web extension on mobile is that it is able to securely communicate with the native iOS app and relay information to the web page.

## Wallet Standard

Just like Chrome extension wallets, this uses [Wallet-standard](https://github.com/solana-labs/wallet-standard/tree/master) to subscribe and respond to requests from the dApp. It is automatically compatible
with existing Solana web dApps.

## Diagram

TODO: Add Diagram of transaction signing
