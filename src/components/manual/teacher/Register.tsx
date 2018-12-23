import React, { Component } from "react";
import images from "../../../assets/images";

class Register extends Component {
  public render() {
    return (
      <div>
        <h3>플러그 가입하기</h3>
        <br />

        <ol>
          <li>원하는 회원가입 유형을 선택합니다.</li>
          <li>
            <mark>
              <b>저는 선생님입니다.</b>
            </mark>
            를 선택합니다.
            <br />
            (학부모의 경우 클래스를 만들 수 없습니다.)
            <img src={images.guide_register_1} alt="" height="500px" />
          </li>
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
          <li>이름 입력란에 본인의 이름을 입력합니다.</li>
          <li>학급 이름 입력하고 학년도를 선택하여 클래스를 만듭니다.</li>
          <img src={images.guide_register_2} alt="" height="500px" />
        </ol>
      </div>
    );
  }
}

export default Register;
