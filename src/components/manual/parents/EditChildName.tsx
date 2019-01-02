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

class EditChildName extends Component {
  public render() {
    return (
      <div>
        <H3>
          자녀이름 변경 <br />{" "}
        </H3>
        <ol>
          <li>
            화면 아래 위치한{" "}
            <mark>
              <b>설정</b>
            </mark>{" "}
            버튼을 선택합니다.
          </li>
          <li>
            <mark>
              <b>클래스 정보 설정</b>
            </mark>{" "}
            영역 자녀 이름을 변경하고 싶은 클래스를 선택합니다.
            <br />
          </li>
          <Img src={images.guide_EditChildName_1} alt="" width="" />
          <li>
            <mark>
              <b>자녀이름</b>
            </mark>
            을 선택하면 편집 상태로 변경됩니다.
          </li>
          <li>
            이름을 변경하고{" "}
            <li>
              <mark>
                <b>뒤로가기 버튼</b>
              </mark>
              을 선택하면 변경이 완료됩니다.
            </li>
          </li>
          <Img src={images.guide_EditChildName_2} alt="" width="" />
        </ol>
      </div>
    );
  }
}

export default EditChildName;
