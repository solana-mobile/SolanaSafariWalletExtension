export const injectApp = () => {
  console.log(`injectApp: starting...`);

  try {
    class SolanaSafariWallet extends HTMLElement {}
    window.customElements.define("solana-ui", SolanaSafariWallet);
    const app = document.createElement("solana-ui");
    app.setAttribute("id", "solana-safari-wallet-ui");

    const body = document.querySelector("body");
    if (!body) {
      throw Error("Failed to find body element");
    }
    body.append(app);

    console.log(`injectApp: complete`);
  } catch (error) {
    console.error("Provider injection failed.", error);
  }
};
