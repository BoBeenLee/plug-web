import Image from "plug-images";
import React, { Component } from 'react';
import styled from 'styled-components';
import { PWButton } from '../button';


const Container = styled.header`
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 22px 0;
    margin: auto;
    max-width: 1100px;
`;

const Content = styled.div`
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const AppLogo = styled.img`
    height: 60px;
`;

class PWHeader extends Component {
    public render() {
        return (
            <Container>
                <AppLogo src={Image.logo} className="App-logo" alt="logo" />
                <Content>
                    <PWButton type="list" label={"이용방법"} />
                    <PWButton type="list" label={"안내문 받기"} />
                </Content>
            </Container>
        );
    }
}

export default PWHeader;
