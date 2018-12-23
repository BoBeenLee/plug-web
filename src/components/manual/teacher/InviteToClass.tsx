import React, { Component } from "react";
import images from "../../../assets/images";

class InviteToClass extends Component {
  public render() {
    return (
      <div>
        <h3>기존 클래스에 초대</h3>
        <br />

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
          <img src={images.guide_inviteToClass_1} alt="" width="620px" />

          <br />
          <li>
            초대코드를 학부모님에게 전달합니다.
            <br />
            <mark> *하나의 클래스당 하나의 초대코드가 만들어집니다.</mark>
          </li>

          <img src={images.guide_inviteToClass_2} alt="" width="620px" />
        </ol>
      </div>
    );
  }
}

export default InviteToClass;
