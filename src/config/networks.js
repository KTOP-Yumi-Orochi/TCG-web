import { ChainId } from "./chainIds";

const Mainnet = "/images/tokens/mainnet.jpg";

export const NETWORK_ICON = {
  [ChainId.ETHEREUM]: Mainnet,
};

export const NETWORK_LABEL = {
  [ChainId.ETHEREUM]: "Ethereum",
};

export const SUPPORTED_NETWORKS = {
  [ChainId.ETHEREUM]: {
    chainId: "0x1",
    chainName: "Ethereum",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.infura.io/v3"],
    blockExplorerUrls: ["https://etherscan.com"],
  },
};
