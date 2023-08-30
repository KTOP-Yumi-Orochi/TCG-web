import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

import { usePrevious } from "../../hooks/usePrevious";

import AccountDetails from "../AccountDetails";
import HeadlessModal from "../HeadlessModal";

import { injected, SUPPORTED_WALLETS } from "../../config/wallets";

import Option from "./Option";
import PendingView from "./PendingView";

import MetamaskImage from "assets/images/wallets/metamask.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Options = styled.div`
  flex: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 30px;
  padding: 20px 40px;
`;

const Notice = styled.div`
  max-width: 350px;
  color: white;
  font-size: 12px;
  text-align: center;
  font-family: Roboto;
  padding-bottom: 10px;
`;

const WALLET_VIEWS = {
  OPTIONS: "options",
  ACCOUNT: "account",
  PENDING: "pending",
};

const WalletModal = ({ ENSName, walletModalOpen, toggleWalletModal }) => {
  const { active, account, connector, activate, error, deactivate } =
    useWeb3React();
  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);
  const [pendingWallet, setPendingWallet] = useState();
  const [pendingError, setPendingError] = useState();
  const previousAccount = usePrevious(account);
  const activePrevious = usePrevious(active);
  const connectorPrevious = usePrevious(connector);

  // close on connection, when logged out before
  useEffect(() => {
    if (account && !previousAccount && walletModalOpen) toggleWalletModal();
  }, [account, previousAccount, toggleWalletModal, walletModalOpen]);

  // always reset to account view
  useEffect(() => {
    if (walletModalOpen) {
      setPendingError(false);
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [walletModalOpen]);

  useEffect(() => {
    if (
      walletModalOpen &&
      ((active && !activePrevious) ||
        (connector && connector !== connectorPrevious && !error))
    ) {
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [
    setWalletView,
    active,
    error,
    connector,
    walletModalOpen,
    activePrevious,
    connectorPrevious,
  ]);

  const handleBack = useCallback(() => {
    setPendingError(undefined);
    setWalletView(WALLET_VIEWS.ACCOUNT);
  }, []);

  const handleDeactivate = useCallback(() => {
    deactivate();
    setWalletView(WALLET_VIEWS.ACCOUNT);
  }, [deactivate]);

  const tryActivation = useCallback(
    async (connector, id) => {
      const conn =
        typeof connector === "function" ? await connector() : connector;

      Object.keys(SUPPORTED_WALLETS).map((key) => {
        if (connector === SUPPORTED_WALLETS[key].connector) {
          return (SUPPORTED_WALLETS[key].name);
        }
        return true;
      });
      setPendingWallet({ connector: conn, id }); // set wallet for pending view
      setWalletView(WALLET_VIEWS.PENDING);

      // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
      if (conn instanceof WalletConnectConnector) {
        conn.walletConnectProvider = undefined;
      }

      conn &&
        activate(conn, undefined, true).catch((error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(conn); // a little janky...can't use setError because the connector isn't set
          } else {
            setPendingError(true);
          }
        });
    },
    [activate]
  );

  // get wallets user can switch too, depending on device/browser
  const options = useMemo(() => {
    const isMetamask = window.ethereum && window.ethereum.isMetaMask;
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key];
      // check for mobile options
      if (isMobile) {
        // disable portis on mobile for now
        if (option.name === "Portis") {
          return null;
        }

        if (!window.web3 && !window.ethereum && option.mobile) {
          return (
            <Option
              onClick={() => tryActivation(option.connector, key)}
              id={`connect-${key}`}
              key={key}
              active={option.connector && option.connector === connector}
              link={option.href}
              header={option.name}
              color={option.color}
              description={option.description}
              subheader={null}
              icon={`../../assets/images/wallets/${option.iconName}`}
            />
          );
        }
        return null;
      }

      // overwrite injected when needed
      if (option.connector === injected) {
        // don't show injected if there's no injected provider
        if (!(window.web3 || window.ethereum)) {
          if (option.name === "MetaMask") {
            return (
              <Option
                id={`connect-${key}`}
                key={key}
                header="Install Metamask"
                subheader={null}
                link="https://metamask.io/"
                color={option.color}
                description={option.description}
                icon={MetamaskImage}
              />
            );
          } else {
            return null; // dont want to return install twice
          }
        }
        // don't return metamask if injected provider isn't metamask
        else if (option.name === "MetaMask" && !isMetamask) {
          return null;
        }
        // likewise for generic
        else if (option.name === "Injected" && isMetamask) {
          return null;
        }
      }

      // return rest of options
      return (
        !option.mobileOnly && (
          <Option
            id={`connect-${key}`}
            onClick={() => {
              option.connector === connector
                ? setWalletView(WALLET_VIEWS.ACCOUNT)
                : !option.href && tryActivation(option.connector, key);
            }}
            key={key}
            active={option.connector === connector}
            link={option.href}
            header={option.name}
            color={option.color}
            description={option.description}
            subheader={null} // use option.descriptio to bring back multi-line
            icon={`../../assets/images/wallets/${option.iconName}`}
          />
        )
      );
    });
  }, [connector, tryActivation]);
  return (
    <HeadlessModal.Controlled
      isOpen={walletModalOpen}
      onDismiss={toggleWalletModal}
    >
      {error ? (
        <div>
          <HeadlessModal.Header
            onClose={toggleWalletModal}
            header={
              error instanceof UnsupportedChainIdError
                ? `Wrong Network`
                : `Error connecting`
            }
          />
          <HeadlessModal.BorderedContent>
            <div>
              {error instanceof UnsupportedChainIdError
                ? `Please connect to the appropriate Cascadia network.`
                : `Error connecting. Try refreshing the page.`}
            </div>
          </HeadlessModal.BorderedContent>
          <div onClick={handleDeactivate}>Disconnect</div>
        </div>
      ) : account && walletView === WALLET_VIEWS.ACCOUNT ? (
        <AccountDetails
          toggleWalletModal={toggleWalletModal}
          ENSName={ENSName}
          openOptions={() => setWalletView(WALLET_VIEWS.OPTIONS)}
        />
      ) : (
        <Container>
          <HeadlessModal.Header
            header="Select a wallet"
            onClose={toggleWalletModal}
            {...(walletView !== WALLET_VIEWS.ACCOUNT && { onBack: handleBack })}
          />
          {walletView === WALLET_VIEWS.PENDING && pendingWallet ? (
            <PendingView
              id={pendingWallet.id}
              connector={pendingWallet.connector}
              error={pendingError}
              setPendingError={setPendingError}
              tryActivation={tryActivation}
            />
          ) : (
            <Options>{options}</Options>
          )}
          <Notice>Learn more about wallets</Notice>
        </Container>
      )}
    </HeadlessModal.Controlled>
  );
};

export default WalletModal;
