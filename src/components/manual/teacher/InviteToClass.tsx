import React, { Component } from "react";
import styled from "styled-components";
import images from "../../../assets/images";

const H3 = styled.h3`
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
`;

class InviteToClass extends Component {
  public render() {
    return (
      <div>
        <H3>
          기존 클래스에 초대 <br />{" "}
        </H3>
        <ol>
          <li>
            화면 아래 위치한{" "}
            <mark>
              <b>내 클래스</b>
            </mark>{" "}
            버튼을 선택합니다.
          </li>
          <li>
            내 클래스 화면에서{" "}
            <mark>
              <b>기존 클래스에 초대하기</b>
            </mark>
            버튼을 선택합니다.
          </li>
          <Img src={images.guide_inviteToClass_1} alt="" width="" />

          <br />
          <li>
            초대코드를 학부모님에게 전달합니다.
            <br />
            <b>
              <mark> 하나의 클래스당 하나의 초대코드</mark>
            </b>
            가 만들어집니다.
          </li>

          <Img src={images.guide_inviteToClass_2} alt="" width="" />
        </ol>
      </div>
    );
  }
}

export default InviteToClass;
