import React, { Component } from 'react';
import styled from "styled-components";

import { Router } from "../../../routes";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const Link = styled.a``;

class TermHeader extends Component {
    public render() {
        return (
            <Container>
                <Link href="#" onClick={this.navigateUsageTerm}>
                    이용약관
                </Link>
                <Link href="#" onClick={this.navigatePrivateTerm}>
                    개인정보취급방침
                </Link>
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

export default TermHeader;
