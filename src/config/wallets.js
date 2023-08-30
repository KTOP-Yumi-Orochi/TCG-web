import { InjectedConnector } from "@web3-react/injected-connector";

import { NetworkConnector } from "../entities";

import { ChainId } from "./chainIds";
import RPC from "./rpc";

const supportedChainIds = Object.values(ChainId);

export const network = new NetworkConnector({
  defaultChainId: ChainId.ETHEREUM,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds,
});

export const SUPPORTED_WALLETS = {
  INJECTED: {
    connector: injected,
    name: "Injected",
    iconName: "injected.svg",
    description: "Injected web3 provider.",
    href: null,
    color: "#0063C7",
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: "MetaMask",
    iconName: "metamask.png",
    description: "Easy-to-use browser extension.",
    href: null,
    color: "#0063C7",
  },
  METAMASK_MOBILE: {
    name: "MetaMask",
    iconName: "metamask.png",
    description: "Open in MetaMask app.",
    href: "",
    color: "#0063C7",
    mobile: true,
    mobileOnly: true,
  },
  WALLET_CONNECT: {
    connector: async () => {
      const { WalletConnectConnector } = await import(
        "@web3-react/walletconnect-connector"
      );
      return new WalletConnectConnector({
        rpc: RPC,
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
        supportedChainIds,
      });
    },
    name: "WalletConnect",
    iconName: "walletConnect.png",
    description: "Connect to Trust Wallet, Rainbow Wallet and more...",
    href: null,
    color: "#004A96",
    mobile: true,
  },
  COINBASE_LINK: {
    name: "Coinbase Wallet",
    iconName: "coinbase.png",
    description: "Open in Coinbase Wallet app.",
    href: "https://go.cb-w.com",
    color: "#003363",
    mobile: true,
  },
};
