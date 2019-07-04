import React, { Component } from "react";
import styled from "styled-components";

import { Router } from "../../../routes";

const Container = styled.div`
  display: flex;
  background-color: #4a4a4a;
  flex-direction: column;
  height: 250px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  border-top: 1px solid #dfdfdf;
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
`;

const Text = styled.p`
  color: #fff;
`;

class Footer extends Component {
  public render() {
    return (
      <Container>
        <Term>
          <Link href="#" onClick={this.navigateTerm}>
            이용약관 및 개인정보취급방침
          </Link>
        </Term>
        <Text>이용문의: teamplugcs@gmail.com</Text>
        <div>
          <Text>ⓒ Teamplug 2019</Text>
        </div>
      </Container>
    );
  }

  private navigateTerm = () => {
    Router.pushRoute(`/privateTerm`);
  };
}

export default Footer;
