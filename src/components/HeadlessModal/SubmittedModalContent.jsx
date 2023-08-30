import Lottie from "lottie-react";
import React from "react";

import HeadlessModal from "./index";
import { shortenString } from "functions/format";

const SubmittedModalContent = ({
  header,
  children,
  subheader,
  animationData,
  txHash = "",
  onDismiss,
  onBack,
  actions,
}) => {

  return (
    <HeadlessModal.Body>
      {animationData && (
        <div>
          <Lottie animationData={animationData} autoplay loop={false} />
        </div>
      )}
      <HeadlessModal.Header
        onClose={onDismiss}
        onBack={onBack}
        header={header}
        subheader={subheader}
      />
      <HeadlessModal.Content>
        <div>
          <div>
            <div>Transaction Hash</div>
            {txHash && (
              <div>
                <a target="_blank" rel="noreferrer" href="/">
                  {shortenString(
                    "0x376c05d690faac163bb042b8755ea3c604776b3743f70c5ee4eda503f284ff1c",
                    12
                  )}
                </a>
              </div>
            )}
          </div>

          <div>
            <div>Status</div>
          </div>
        </div>
        {children}
      </HeadlessModal.Content>
      <HeadlessModal.Actions>
        <HeadlessModal.Action main={!actions} onClick={onDismiss}>
          Close
        </HeadlessModal.Action>
        {actions}
      </HeadlessModal.Actions>
    </HeadlessModal.Body>
  );
};

export default SubmittedModalContent;
