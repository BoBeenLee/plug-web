import React from "react";
import styled from "styled-components";
import { PWHeader } from "../components/header";

const Container = styled.div``;

export default class Manual extends React.Component {
  public render() {
    return (
      <Container>
        <PWHeader />
        ServiceManual
      </Container>
    );
  }
}
