import Image from "plug-images";
import React, { Component } from 'react';
import styled from 'styled-components';

import { PWButton } from '../button';


const Container = styled.header`
    position: fixed;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    margin: auto;
    width: 100%;
    z-index: 100;
    background-color: white;
    box-shadow: 0px 2px 4px 0px rgba(0,0,68,.1);
`;

const AppLogo = styled.img`
    height: 80px;
`;

const Content = styled.div`
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const InviteButton = styled(PWButton)`
    margin-right: 10px;
`;



class PWHeader extends Component {


    public render() {
        return (
            <Container>
                <Content>
                    <AppLogo src={Image.logo} className="App-logo" alt="logo" />
                    <InviteButton type="secondary" label={"학부모 초대장"} />
                </Content>
            </Container>
        );
    }
}

export default PWHeader;
