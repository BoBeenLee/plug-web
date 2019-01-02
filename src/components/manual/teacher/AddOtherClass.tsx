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

class AddOtherClass extends Component {
  public render() {
    return (
      <div>
        <H3>
          새로운 클래스 만들기 <br />{" "}
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
              <b>새로운 클래스 만들기</b>
            </mark>
            버튼을 선택합니다.
          </li>
          <Img src={images.guide_AddOtherClass_1} alt="" width="" />

          <br />
          <li>
            처음 클래스를 만들 때와 마찬가지로 클래스 이름을 입력하고 학년도를
            선택합니다.
          </li>
          <li>
            새로 만든 클래스의 초대코드가 생성됩니다.
            <br />
            초대코드를 학부모님들에게 전달하여 클래스에 초대합니다.
          </li>
          <Img src={images.guide_AddOtherClass_2} alt="" width="" />
        </ol>
      </div>
    );
  }
}

export default AddOtherClass;
