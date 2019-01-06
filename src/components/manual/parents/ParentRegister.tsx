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

class ParentRegister extends Component {
  public render() {
    return (
      <div>
        <H3>
          플러그 가입하기 <br />{" "}
        </H3>
        <ol>
          <li>
            앱스토어 또는 구글 플레이스토어에서 "플러그"를 다운로드 받습니다.
          </li>
          <li>
            <b>
              <mark>카카오톡으로 회원가입</mark>
            </b>{" "}
            또는{" "}
            <b>
              <mark>이메일로 회원가입</mark>
            </b>{" "}
            버튼을 눌러 회원가입을 시작합니다.
          </li>
          <li>
            <b>
              <mark>저는 학부모입니다</mark>
            </b>{" "}
            버튼을 선택합니다.
          </li>
          <Img src={images.guide_ParentRegister_1} alt="" width="" />
          <li>
            <mark>
              <b>카메라 아이콘</b>
            </mark>
            을 눌러 프로필 사진을 지정하거나,{" "}
            <mark>
              <b>기본 캐릭터</b>
            </mark>
            를 이용하여 프로필 사진을 선택합니다.{" "}
          </li>
          <li>
            이름 입력란에 본인의 이름을 입력하고{" "}
            <mark>
              <b>다음</b>
            </mark>{" "}
            버튼을 선택합니다.
          </li>
          <li>
            선생님이 전달한{" "}
            <mark>
              <b>초대코드</b>
            </mark>{" "}
            6자리를 입력합니다. 초대코드는 알파벳 대문자 6자리 입니다.
          </li>
          <Img src={images.guide_ParentRegister_2} alt="" width="" />
          <li>
            가입한 클래스 이름을 확인하고{" "}
            <mark>
              <b>자녀이름</b>
            </mark>
            을 입력합니다.
          </li>
          <li>
            <mark>
              <b>플러그 시작하기</b>
            </mark>
            버튼을 눌러 가입을 완료합니다.
          </li>
          <Img src={images.guide_ParentRegister_3} alt="" width="" />
        </ol>
      </div>
    );
  }
}

export default ParentRegister;
