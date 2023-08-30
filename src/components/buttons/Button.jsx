import styled from 'styled-components';

const ButtonContainer = styled.div`
    width: 246px;
    height: 56px;
    background-image: url('assets/images/buttons/Button.png');
    background-size: 100% 100%;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: Kusanagi;
    font-size: 14px;
    &:hover {
        background-image: url('assets/images/buttons/Button_click.png');
    }
`

export default function Button ({content}) {
    return (
        <ButtonContainer>
            {content}
        </ButtonContainer>
    )
}