import Image from "plug-images";
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #f9f9f9;
  flex-direction: column;
  height: 250px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  border-top: 1px solid #dfdfdf;
`;

const TextBox = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    width: 75%;
    text-align: center;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 364px;
  margin-top: 30px;
`;

const Button = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.05, 1.05);
  }
  @media (min-width: 320px) and (max-width: 480px) {
    height: 70%;
  }
`;

class DownloadGuideSection extends Component {
  public render() {
    return (
      <Container>
        <TextBox>
          <h3>학부모와 교사를 위한 메신저 플러그, 지금 이용해보세요.</h3>
        </TextBox>
        <ButtonSection>
          <Button
            src={Image.btn_app_store}
            alt="App Store Button"
            height="50px"
            onClick={this.iosLink}
          />
          <Button
            src={Image.btn_google_play}
            alt="Google Play Store Button"
            height="50px"
            onClick={this.androidLink}
          />
        </ButtonSection>
      </Container>
    );
  }

  private iosLink = () => {
    window.location.href = "https://itunes.apple.com/kr/app//id1449416216?mt=8";
  };
  private androidLink = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.plug.android";
  };
}

export default DownloadGuideSection;
