import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import ConnectButton from "components/buttons/ConnetButton";
import React from "react";

export default function Web3Connect({ className = "", toggleWalletModal }) {
  const { error } = useWeb3React();
  return error ? (
    <div onClick={toggleWalletModal}>
      {error instanceof UnsupportedChainIdError
        ? `You are on the wrong network`
        : `Error`}
    </div>
  ) : (
    <ConnectButton
      id="connect-wallet"
      onClick={toggleWalletModal}
      content={"connect"}
    />
  );
}
