import Image from "plug-images";
import React, { Component } from "react";
import styled from "styled-components";

import { Router } from "../../../routes";
import { isMobile } from '../../utils/navigator';
import { PWButton } from "../button";

interface IProps {
  activePathname: string;
}

const Container = styled.header`
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
  margin: auto;
  max-width: 1100px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`;

const Content = styled.div`
  width: 1100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const AppLogo = styled.img`
  height: 60px;
  cursor: pointer;
`;

class PWHeader extends Component<IProps> {
  public render() {
    const { activePathname } = this.props;
    return (
      <Container>
        <AppLogo
          src={Image.logo}
          className="App-logo"
          alt="logo"
          onClick={this.navigateToHome}
        />
        <Content>
          <PWButton
            key="manual"
            active={new RegExp(/\/manual\/*\w+/g).test(activePathname)}
            type="list"
            label={"이용방법"}
            onClick={this.navigateToServiceManual}
          />
          {!isMobile() ? <PWButton
            key="guide"
            active={activePathname === "/guide"}
            type="list"
            label={"안내문 받기"}
            onClick={this.navigateToGuideDownload}
          /> : null}
        </Content>
      </Container>
    );
  }

  private navigateToHome = () => {
    Router.pushRoute("/");
  };

  private navigateToServiceManual = () => {
    Router.pushRoute("/manual/teacher");
  };

  private navigateToGuideDownload = () => {
    Router.pushRoute("/guide");
  };
}

export default PWHeader;
