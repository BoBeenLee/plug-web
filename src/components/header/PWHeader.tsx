import Image from "plug-images";
import React, { Component } from 'react';
import styled from 'styled-components';


import { Router } from "../../../routes";
import { PWButton } from '../button';

const Container = styled.header`
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 22px 0;
    margin: auto;
    max-width: 1100px;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 90%;
      }
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
                    <PWButton type="list" label={"이용방법"} onClick={this.navigateToServiceManual} />
                    <PWButton type="list" label={"안내문 받기"} onClick={this.navigateToGuideDownload} />
                </Content>
            </Container>
        );
    }

    private navigateToServiceManual = () => {
        Router.pushRoute('/service/manual');
    }

    private navigateToGuideDownload = () => {
        // NOTHING
    }
}

export default PWHeader;
