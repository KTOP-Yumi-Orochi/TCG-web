import { useWeb3React } from "@web3-react/core";
import React, { useMemo } from "react";
import { isDesktop } from "react-device-detect";
import styled from "styled-components";
import HeadlessModal from "../HeadlessModal";

import { FiExternalLink } from "react-icons/fi";

import { injected, SUPPORTED_WALLETS } from "../../config/wallets";

import Copy from "./Copy";
import { shortenAddress } from "functions/format";
import ConnectButton from "components/buttons/ConnetButton";
import TextDecorator from "components/textDecorator/TextDecorator";
import ArticleDecorator from "components/textDecorator/ArticleDecorator";

const tableContent = [
  {
    amount: "16",
    description: "NFTs",
  },
  {
    amount: "500",
    description: "TCGs",
  },
];

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const ConnectStatus = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  font-family: Roboto;
  color: white;
`;

const Address = styled.div`
  font-size: 28px;
  font-family: Roboto;
  font-weight: 500;
  color: white;
  padding: 10px 0px;
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const TableArea = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 460px) {
    transform: scale(0.92);
    margin-left: -15px;
  }
`;

const Notice = styled.div`
  max-width: 350px;
  color: white;
  font-size: 12px;
  text-align: center;
  font-family: Roboto;
  padding-bottom: 10px;
`;

const RowCorner1 = ({ amount, description, size }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.5)",
        width: "170px",
        height: "60px",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginTop: "-8px", marginLeft: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginTop: "-8px", marginLeft: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(-1 0 0 1 14 5.5)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7px", marginLeft: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7px", marginLeft: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(-1 0 0 1 14 5.5)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginTop: "-2px", right: "-13px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginTop: "-8px", right: "-7.5px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(-1 0 0 1 14 5.5)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7px", right: "-13px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7px", right: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(-1 0 0 1 14 5.5)"
          fill="white"
        />
      </svg>
      <CellContent
        amount={amount}
        description={description}
        size={size}
      ></CellContent>
    </div>
  );
};

const RowCorner2 = ({ amount, description, size }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.5)",
        width: "170px",
        height: "60px",
        position: "relative",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7px", marginLeft: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7px", marginLeft: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7px", marginLeft: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(-1 0 0 1 14 5.5)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-2px", right: "-13px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7.5px", right: "-7.5px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(-1 0 0 1 14 5.5)"
          fill="white"
        />
      </svg>
      <CellContent
        amount={amount}
        description={description}
        size={size}
      ></CellContent>
    </div>
  );
};

const CellContent = ({ amount, description, size }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <TextDecorator
        direction={"up"}
        fontSize={24}
        content={amount}
        fontFamily={"Kusanagi"}
        width="fit-content"
      ></TextDecorator>
      <ArticleDecorator
        content={description}
        fontFamily="Roboto"
        fontSize={12}
        lineHeight={14.4}
      />
    </div>
  );
};

const AccountDetails = ({ toggleWalletModal, ENSName }) => {
  const { chainId, account, connector, deactivate } = useWeb3React();

  const connectorName = useMemo(() => {
    const { ethereum } = window;
    const isMetaMask = !!(ethereum && ethereum.isMetaMask);
    const name = Object.keys(SUPPORTED_WALLETS)
      .filter(
        (k) =>
          SUPPORTED_WALLETS[k].connector === connector &&
          (connector !== injected || isMetaMask === (k === "METAMASK"))
      )
      .map((k) => SUPPORTED_WALLETS[k].name)[0];
    return <div>Connected with {name}</div>;
  }, [connector]);

  return (
    <Container>
      <HeadlessModal.Header
        header="Wallet Detail"
        onClose={toggleWalletModal}
      />
      <HeadlessModal.Content>
        <ConnectStatus>
          {connectorName}
          <ConnectButton
            isCorner={false}
            size="sm"
            background=""
            color="#FF1C6E"
            content={"Disconnect"}
            onClick={deactivate}
          />
        </ConnectStatus>
      </HeadlessModal.Content>
      <HeadlessModal.Content>
        <Address>
          {account && shortenAddress(account, isDesktop ? 10 : 5)}
        </Address>
        <Links>
          {chainId && account && (
            <a href="/" target="_blank" rel="noreferrer">
              <FiExternalLink color="white" />
            </a>
          )}
          {account && <Copy toCopy={account} />}
        </Links>
      </HeadlessModal.Content>
      <HeadlessModal.Content>
        <TableArea>
          {tableContent.map((tableCell, index) => {
            return parseInt(index / 2) === 0 ? (
              index % 2 === 0 ? (
                <RowCorner1 {...tableCell} key={index}></RowCorner1>
              ) : (
                <RowCorner2 {...tableCell} key={index} />
              )
            ) : (
              ""
            );
          })}
        </TableArea>
      </HeadlessModal.Content>
      <HeadlessModal.Content>
        <Notice>
          NOTICE: Your own custom web3 funnel to offer personalized services
        </Notice>
      </HeadlessModal.Content>
    </Container>
  );
};

export default AccountDetails;
