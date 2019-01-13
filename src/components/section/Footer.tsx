import React, { Component } from 'react';
import styled from 'styled-components';

import { Router } from "../../../routes";

const Container = styled.div`
    display: flex;
    background-color: #4A4A4A;
    flex-direction: column;
    height: 250px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #DFDFDF;
    border-top: 1px solid #DFDFDF;
`;

const Term = styled.div`
    display: flex;
    flex-direction: row;
`;

const Link = styled.a`
    all: unset;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    margin-left: 5px;
    margin-right: 5px;
`

const Text = styled.p`
    color: #fff;
`

class Footer extends Component {
    public render() {
        return (
            <Container>
                <Term>
                    <Link href="#" onClick={this.navigateUsageTerm}>이용약관</Link><Link href="#" onClick={this.navigatePrivateTerm}>개인정보취급방침</Link>
                </Term>
                <Text>이용문의: plugcs@gmail.com</Text>
                <div>
                    <Text>ⓒ Teamplug 2019</Text>
                </div>
            </Container>
        );
    }

    private navigateUsageTerm = () => {
        Router.replaceRoute(`/usageTerm`);
    };

    private navigatePrivateTerm = () => {
        Router.replaceRoute(`/privateTerm`);
    };

}

export default Footer;
