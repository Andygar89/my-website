class Phantom {
  redirect() {
    if ('solana' in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
    window.open('https://phantom.app/', '_blank');
  }

  provider() {
    return this.redirect();
  }

  disconnect() {
    window.solana.disconnect();
  }

  async connectWallet(params) {
    const { publicKey } = await window.solana.connect(params);
    const key = publicKey.toString();

    return key;
  }

  async autoConnect(onlyIfTrusted = true) {
    if (onlyIfTrusted) {
      return await this.connectWallet({ onlyIfTrusted })
    }
  }
}

export default new Phantom();
