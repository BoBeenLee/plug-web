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
    border-bottom: 1px solid #DFDFDF;
`;

const Content = styled.div`
    margin-bottom: 150px;
`;

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
                <img src={Image.app_mockup} alt="Mockup_image" height="600px"/>
            </Container>

        );
    }
}

export default Body;
