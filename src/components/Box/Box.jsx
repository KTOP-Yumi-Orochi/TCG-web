import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:103px;
    height:114px;
    position:relative;
`
const OutLine = styled.div`
    position:absolute;
`
const ImageContent = styled.div`
    position:absolute;
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
`

const Box = ({name}) => {

    return(<Container>
                <OutLine>
                <svg width="103" height="114" viewBox="0 0 103 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M1 25.1L51.9024 1L102.361 25.2664L99.7812 84.0048L51.5141 112.903L3.7185 83.8107L1 25.1Z" stroke="white"/>
                </svg>

                </OutLine>
                <ImageContent>

                    <img src={name} alt="Game"  style ={{width:'90px'}}/>
                </ImageContent>
            </Container>)
        }

export default Box