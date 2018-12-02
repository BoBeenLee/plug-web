import Image from "plug-images";
import React, { Component } from 'react';
import styled from 'styled-components';



const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    max-width: 1100px;
    height: 700px;
    /* Mobile Device */
    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        justify-content: flex-start;
        height: 500px;
        margin-bottom: 40px;
    }
`


const MainImg = styled.img`
    width: 40%;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 80%;
        
    }
`

const Content = styled.div`
    margin-bottom: 150px;
    @media (min-width: 320px) and (max-width: 480px) {
        margin-bottom: 30px;
        width: 80%
    }
`

const BlueSpan = styled.span`
    color: #3867D6;
`



class Body extends Component {
    public render() {
        return (
            <Container>
                <Content>
                    <h1><BlueSpan>플러그,</BlueSpan> <br/> 학부모와 교사를 <br/>새롭게 연결합니다.</h1>
                </Content>
                <MainImg src={Image.app_mockup} alt="App Image" />
            </Container>

        );
    }
}

export default Body;
