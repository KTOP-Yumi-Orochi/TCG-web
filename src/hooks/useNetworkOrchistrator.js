import { useWeb3React } from "@web3-react/core";
import Cookies from "js-cookie";
import { useEffect } from "react";

import { SUPPORTED_NETWORKS } from "../config/networks";

function useNetworkOrchistrator() {
  useEffect(() => {
    const { ethereum } = window;
    if (ethereum && ethereum.on) {
      const handleChainChanged = (chainIdHex) => {
        const chainId = Number(chainIdHex);
        const chainIdFromCookie = Number(Cookies.get("chain-id"));
        // If chainId does not equal chainIdFromCookie, and we have a chain id subdomain mapping, replace location...
        // if (chainId !== chainIdFromCookie && chainId in CHAIN_ID_SUBDOMAIN) {
        if (chainId !== chainIdFromCookie) {
          // Remove the cookie to prevent wallet prompt from running while location is reassigned
          Cookies.remove("chain-id");
          window.location.assign(window.location.href); //comment on development mode
        }
      };
      ethereum.on("chainChanged", handleChainChanged);
      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("chainChanged", handleChainChanged);
        }
      };
    }
  }, []);

  const { chainId, library, account } = useWeb3React();
  useEffect(() => {
    const chainIdFromCookie = Number(Cookies.get("chain-id"));

    if (!chainId || !chainIdFromCookie) {
      return;
    }

    const promptWalletSwitch = async () => {
      const params = SUPPORTED_NETWORKS[chainIdFromCookie];
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${chainIdFromCookie.toString(16)}` }],
        });
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [params],
            });
          } catch (addError) {
            console.error(`Add chain error ${addError}`);
          }
        }
        console.error(`Switch chain error ${switchError}`);
      }
    };
    promptWalletSwitch();
  }, [account, chainId, library]);
}

export default useNetworkOrchistrator;
