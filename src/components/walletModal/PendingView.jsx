import Lottie from "lottie-react";
import React from "react";
import styled from "styled-components";

import HeadlessModal from "../HeadlessModal";

import { SUPPORTED_WALLETS } from "../../config/wallets";

import Option from "./Option";

import loadingCircle from "../animation/loading-circle.json";

const PendingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 40px;
  gap: 30px;
`;

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  svg {
    width: 40px;
    height: 40px;
  }
`;

const PendingView = ({
  id,
  connector,
  error = false,
  setPendingError,
  tryActivation,
}) => {
  return (
    <PendingContainer>
      <HeadlessModal.BorderedContent>
        {error ? (
          <div>
            <div>Error while trying to connect</div>
            <div
              onClick={() => {
                setPendingError(false);
                connector && tryActivation(connector, id);
              }}
            >
              Try Again
            </div>
          </div>
        ) : (
          <LoadingContainer>
            <Lottie
              style={{ width: 40, height: 40 }}
              animationData={loadingCircle}
              autoplay
              loop
            />
            <div>Initializing...</div>
          </LoadingContainer>
        )}
      </HeadlessModal.BorderedContent>
      {Object.keys(SUPPORTED_WALLETS).map((_key) => {
        const option = SUPPORTED_WALLETS[_key];
        if (id === _key) {
          return (
            <Option
              id={`connect-${_key}`}
              key={_key}
              clickable={false}
              header={option.name}
              subheader={option.description}
              color={option.color}
              description={option.description}
              icon={`assets/images/wallets/${option.iconName}`}
            />
          );
        }
        return null;
      })}
    </PendingContainer>
  );
};

export default PendingView;
