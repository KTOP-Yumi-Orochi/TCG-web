import styled from 'styled-components';
import ModalItem from 'components/modal/ModalItem';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const LeftSideContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin-right: 70px;
    @media (max-width: 768px) {
        width: 294px;
        height: 294px;
        margin-right: 0px;
        margin-top: 23px;
    }
`;
const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: fit-content;
    @media (max-width: 768px) {
        flex-direction: column;
        height: calc(100vh - 42px);
        overflow-y: scroll;
    }
`;
const RightSideContainer = styled.div`

`;
const Title = styled.div`
    font-size: 24px;
    line-height: 33.6px;
    color: white;
    font-family: Kusanagi;
    margin-bottom: 16px;
    @media (max-width: 768px) {
        margin-top: 17px;
    }
`;
const Content = styled.div`
    max-width: 440px;
    font-family: 'Roboto';
    font-size: 16px;
    line-height: 22.4px;
    color: white;
    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 19.6px;
        max-width: 321.16px;
    }
`;
const CloseButton = styled.div`
    position: absolute;
    top: 11px;
    right: 0px;
    height: fit-content;
    cursor: pointer;
    z-index: 4;
    opacity: 0.6;
    &:hover {
        opacity: 1;
    }
    @media (max-width: 768px) {
        top: 0px;
    }
`;

export default function MetaverseModal ({isOpen, onClose, src, title, content}) {

    const keyEventHandler = (e) => {
        if(e.key === 'Escape') onClose(false);
        document.removeEventListener('keydown', keyEventHandler);
    }
    document.addEventListener('keydown', keyEventHandler);
    const handleModalClose = (e) => {
        if(e.target.id === 'MetaverseModal') {
            onClose(false);
        }
    }
    return (
        isOpen ? <Container id="MetaverseModal" onClick={(e) => handleModalClose(e)}>
            <ModalContainer onTouchMove={e => e.stopPropagation()}>
                <LeftSideContainer>
                    <ModalItem src={src}></ModalItem>
                </LeftSideContainer>
                <RightSideContainer>
                    <Title>
                        {title}
                    </Title>
                    <Content>
                        The Aether Sands biome can best be described as a heady mix of the ancient and the modern. The angular architecture from ancient times combines with the skyscrapers of the modern era, creating an interesting mix of styles.
                    </Content>
                    <br />
                    <Content>
                        This biome is largely unexplored, and there are many ruins of massive Kroaton structures which are still untouched. One of the most fascinating features of this biome is the abundance of Aether Crystal energy, such that the sands sometimes seem to glow on the horizon at night, due to the concentration of energy in the area due to Crystal dust in the sands, blown from Crystal Valley to the north. This biome is an interesting place to explore, and offers a unique flavor of adventure and lifestyle that cannot be found elsewhere. Those seeking undiscovered Kroaton ruins will surely find them in The Aether Sands.
                    </Content>
                </RightSideContainer>
                <CloseButton onClick={() => onClose(false)}>
                    <img src="assets/images/modal/close-icon.png" alt=''></img>
                </CloseButton>
            </ModalContainer>
        </Container>
        : ''
    )
}