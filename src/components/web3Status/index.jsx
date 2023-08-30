import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { isDesktop } from "react-device-detect";

import { shortenAddress } from "../../functions/format";

import WalletModal from "../walletModal";
import Web3Connect from "../web3Connect";

import styled, { keyframes } from "styled-components";
import ConnectButton from "components/buttons/ConnetButton";

const ButtonAnimation = keyframes`
    0%{
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const Container = styled.div`
  transform: scale(0);
  cursor: pointer;
  margin-right: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${ButtonAnimation} 1.5s 0.5s ease 1;
  animation-fill-mode: forwards;
  &:hover svg {
    transform: scale(1.2);
    transition: transform 0.5s ease;
  }
  @media (max-width: 490px) {
    display: none;
  }
`;

function Web3StatusInner({ toggleWalletModal }) {
  const { account } = useWeb3React();

  if (account) {
    return (
      <div id="web3-status-connected" onClick={toggleWalletModal}>
        <ConnectButton
          content={account && shortenAddress(account, isDesktop ? 4 : 4)}
        />
      </div>
    );
  } else {
    return (
      <Web3Connect
        className="text-white"
        toggleWalletModal={toggleWalletModal}
      />
    );
  }
}

const Web3Status = () => {
  const { account } = useWeb3React();
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleWalletModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <>
      <Container>
        <Web3StatusInner toggleWalletModal={toggleWalletModal} />
      </Container>
      <WalletModal
        ENSName={account ?? undefined}
        walletModalOpen={isShowModal}
        toggleWalletModal={toggleWalletModal}
      />
    </>
  );
};

export default Web3Status;
