import { useWeb3React } from "@web3-react/core";
import React, { useEffect } from "react";

import useEagerConnect from "../../hooks/useEagerConnect";
import useInactiveListener from "../../hooks/useInactiveListener";
import useNetworkOrchistrator from "../../hooks/useNetworkOrchistrator";

import { ChainId } from "../../config/chainIds";
import { network } from "../../config/wallets";

export const Web3ReactManager = ({ children }) => {
  const { active, chainId, error, activate: activateNetwork } = useWeb3React();

  // try to eagerly connect to an injected provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  useNetworkOrchistrator();

  // after eagerly trying injected,
  // if the network connect ever isn't active or in an error state, activate itd
  useEffect(() => {
    const activate = async () => {
      if ((triedEager && !active && !error) || chainId !== ChainId.ETHEREUM) {
        const Cookies = (await import("js-cookie")).default;
        Cookies.set("chain-id", ChainId.ETHEREUM.toString());
        console.log(`CHANGE CHAIN TO ${Number(Cookies.get("chain-id"))}`);
        network.changeChainId(Number(ChainId.ETHEREUM.toString()));
        activateNetwork(network);
      }
    };
    activate();
  }, [triedEager, active, chainId, error, activateNetwork]);

  // when there's no account connected, react to logins (broadly speaking)
  // on the injected provider, if it exists
  useInactiveListener(!triedEager);

  // on page load, do nothing until we've tried to connect to the injected connector
  if (!triedEager) {
    return null;
  }

  if (chainId !== ChainId.ETHEREUM) {
    return null;
  }
  // if the account context isn't active, and there's an error on the network context,
  // it's an irrecoverable error
  if (!active && error) {
    return (
      <div className="flex h-80 items-center justify-center">
        <div className="text-secondary">
          Oops! An unknown error occurred. Please refresh the page, or visit
          from another browser or device
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Web3ReactManager;
