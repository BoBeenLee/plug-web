import React from "react";
import styled from "styled-components";

import Logo from "../components/Logo";

import env from "../configs/environment";

const Container = styled.div``;

export default class Index extends React.Component {
    public render() {
        console.log(env.NODE_ENV);
        return (
            <Container>
                <Logo />
                <div>Hello World{env.NODE_ENV}</div>
            </Container>
        );
    }
}
