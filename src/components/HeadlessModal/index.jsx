import { Dialog, Transition } from "@headlessui/react";
import {
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import React, { Fragment } from "react";
import { isDesktop } from "react-device-detect";
import styled from "styled-components";
import ModalAction from "./Action";
import ModalActions from "./Actions";
import ModalBody from "./Body";
import ModalContent, { BorderedModalContent } from "./Content";
import ModalError from "./Error";
import ModalHeader from "./Header";
import SubmittedModalContent from "./SubmittedModalContent";

import WalletCardBackgroundImage from "assets/images/backgrounds/wallet_card_back.png";
const DialogWrapper = styled.div`
  z-index: 50;
  position: fixed;
  inset: 0;
`;

const DialogContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  text-algin: center;
`;

const DialogOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
`;

const DialogConent = styled.div`
  z-index: 1;
  position: relative;
  background-image: url(${WalletCardBackgroundImage});
  background-size: 100% 100%;
  background-position: center;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  ${(props) =>
    props.isDesktop
      ? "width: 500px; max-width: 85vw; max-height: 85vh; overflow-y: auto; margin: auto;"
      : "width: 100%"};
`;

const HeadlessModal = ({ children: childrenProp, trigger: triggerProp }) => {
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen(true);
  }, []);

  const trigger = useMemo(
    () =>
      typeof triggerProp === "function"
        ? triggerProp({ onClick, open, setOpen })
        : isValidElement(triggerProp)
        ? cloneElement(triggerProp, onClick)
        : null,
    [onClick, open, triggerProp]
  );

  const children = useMemo(
    () =>
      typeof childrenProp === "function"
        ? childrenProp({ onClick, open, setOpen })
        : children,
    [onClick, open, childrenProp]
  );

  return (
    <>
      {trigger && trigger}
      <HeadlessUiModalControlled isOpen={open} onDismiss={() => setOpen(false)}>
        {children}
      </HeadlessUiModalControlled>
    </>
  );
};

const HeadlessUiModalControlled = ({
  isOpen,
  onDismiss,
  afterLeave,
  children,
  transparent = false,
  unmount,
}) => {
  return (
    <Transition
      appear
      show={isOpen}
      as={Fragment}
      afterLeave={afterLeave}
      unmount={unmount}
    >
      <Dialog as={DialogWrapper} onClose={onDismiss} unmount={unmount}>
        <DialogContainer>
          <Transition.Child
            unmount={false}
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay as={DialogOverlay} />
          </Transition.Child>

          <Transition.Child
            unmount={unmount}
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogConent isDesktop={isDesktop}>
              {children}
            </DialogConent>
          </Transition.Child>
        </DialogContainer>
      </Dialog>
    </Transition>
  );
};

HeadlessModal.Controlled = HeadlessUiModalControlled;
HeadlessModal.Header = ModalHeader;
HeadlessModal.Body = ModalBody;
HeadlessModal.Content = ModalContent;
HeadlessModal.BorderedContent = BorderedModalContent;
HeadlessModal.Actions = ModalActions;
HeadlessModal.Action = ModalAction;
HeadlessModal.Error = ModalError;
HeadlessModal.SubmittedModalContent = SubmittedModalContent;

export default HeadlessModal;
