import React, { Component } from 'react';
import styled from "styled-components";

import { TermHeader } from "../components/header";
import { PrivateTerm as PrivateTermText } from "../components/term";

const Container = styled.div`
    padding: 10px;
`;

const Content = styled.div``;

class PrivateTerm extends Component {
    public render() {
        return (
            <Container>
                <TermHeader />
                <Content>
                    <PrivateTermText />
                </Content>
            </Container>
        );
    }
}

export default PrivateTerm;
