import React from "react";
import styled from "styled-components";

import Logo from "../components/Logo";

const Container = styled.div``;

export default class Index extends React.Component {
    public render() {
        return (
            <Container>
                <Logo />
                <div>Hello World</div>
            </Container>
        );
    }
}
