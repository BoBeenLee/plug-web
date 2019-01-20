import React, { Component } from 'react';
import styled from "styled-components";

import { TermHeader } from "../components/header";
import { UsageTerm as UsageTermText } from "../components/term";

const Container = styled.div`
    padding: 10px;
`;

const Content = styled.div``;

class UsageTerm extends Component {
    public render() {
        return (
            <Container>
                <TermHeader />
                <Content>
                    <UsageTermText />
                </Content>
            </Container>
        );
    }
}

export default UsageTerm;
