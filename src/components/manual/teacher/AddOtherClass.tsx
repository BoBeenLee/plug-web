import React, { Component } from "react";
import images from "../../../assets/images";

class AddOtherClass extends Component {
  public render() {
    return (
      <div>
        <h3>새로운 클래스 만들기</h3>
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
              <b>새로운 클래스 만들기</b>
            </mark>
            버튼을 선택합니다.
          </li>
          <img src={images.guide_AddOtherClass_1} alt="" width="620px" />

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
          <img src={images.guide_AddOtherClass_2} alt="" width="620px" />
        </ol>
      </div>
    );
  }
}

export default AddOtherClass;
