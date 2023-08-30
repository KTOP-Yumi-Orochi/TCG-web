import React from 'react';
import styled, { keyframes } from 'styled-components';
import MarketplaceLayout from 'layout/marketplace-layout';
import { LandingContext } from 'contexts/LandingContext';
import MetaverseModal from 'components/modal/MetaverseModal';

const TransitionAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
const Transition = styled.div`
    animation: ${TransitionAnimation} 1s ease 1;
    animation-fill-mode: forwards;
`;

export default function Marketplace() {
    const {metaverseModalOpen, setMetaverseModalOpen, modalInfo} = React.useContext(LandingContext);
    return (
        <Transition>
            <MarketplaceLayout />
            <MetaverseModal isOpen={metaverseModalOpen} onClose={setMetaverseModalOpen} src={modalInfo?.imgUrl} title={modalInfo?.title} content={modalInfo?.content}></MetaverseModal>
        </Transition>
    )
}