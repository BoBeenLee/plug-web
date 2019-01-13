import React from "react";
import styled from "styled-components";
import { GuideHeader, PWHeader } from "../components/header";
import { GuidePageContents } from "../components/section";

interface IProps {
  url: any;
}

const Container = styled.div``;

export default class Guide extends React.Component<IProps> {
  public render() {
    const { url } = this.props;
    return (
      <Container>
        <PWHeader activePathname={url.pathname} />
        <GuideHeader />
        <GuidePageContents />
      </Container>
    );
  }
}
