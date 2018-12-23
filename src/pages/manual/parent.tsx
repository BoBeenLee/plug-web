import React from "react";
import styled from "styled-components";
import { ManualHeader, PWHeader } from "../../components/header";

interface IProps {
    url: any;
}

const Container = styled.div``;

export default class Parent extends React.Component<IProps> {
    public render() {
        const { url } = this.props;
        return (
            <Container>
                <PWHeader activePathname={url.pathname} />
                <ManualHeader activePathname={url.pathname} />
                parent
      </Container>
        );
    }
}
