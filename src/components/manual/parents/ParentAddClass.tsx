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

class ParentAddClass extends Component {
  public render() {
    return (
      <div>
        <H3>
          새로운 클래스에 가입하기
          <br />{" "}
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
              <b>클래스 가입하기</b>
            </mark>
            버튼을 선택합니다.
          </li>
          <Img src={images.guide_ParentAddClass_1} alt="" width="" />
          <br />
          <li>
            선생님이 전달한{" "}
            <mark>
              <b>초대코드</b>
            </mark>{" "}
            6자리를 입력합니다. 초대코드는 알파벳 대문자 6자리 입니다.
          </li>
          <li>
            가입한 클래스 이름을 확인하고{" "}
            <mark>
              <b>자녀이름</b>
            </mark>
            을 입력하고{" "}
            <mark>
              <b>완료</b>
            </mark>
            버튼을 눌러 클래스 가입을 완료합니다.
          </li>
          <Img src={images.guide_ParentAddClass_2} alt="" width="" />{" "}
        </ol>
      </div>
    );
  }
}

export default ParentAddClass;
