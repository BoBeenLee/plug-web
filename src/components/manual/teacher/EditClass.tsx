import React, { Component } from "react";
import images from "../../../assets/images";

class EditClass extends Component {
  public render() {
    return (
      <div>
        <h3>클래스 편집</h3>
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
            <mark>
              <b>관리중인 클래스</b>
            </mark>
            중 편집하고 싶은 클래스를 선택합니다.
          </li>
          <img src={images.guide_editClass_1} alt="" width="620px" />

          <br />
          <li>
            클래스 상세 화면에서 우측 상단의{" "}
            <mark>
              <b>편집</b>
            </mark>
            버튼을 선택합니다.
            <br />- 편집 모드에서 클래스 이름 변경, 학년도 변경, 멤버 삭제를 할
            수 있습니다.
          </li>
          <li>
            <mark>
              <b>클래스 이름</b>
            </mark>
            을 선택하면 클래스 이름 변경 화면이 나옵니다.
          </li>
          <li>
            <mark>
              <b>멤버 옆 (-)아이콘</b>
            </mark>
            을 선택하면 삭제 버튼이 나옵니다.
          </li>
          <img src={images.guide_editClass_2} alt="" width="620px" />
          <li>
            클래스 이름 변경 화면에서 이름을 변경하고{" "}
            <mark>
              <b>완료</b>
            </mark>{" "}
            버튼을 선택하면 이름이 변경됩니다.{" "}
          </li>
          <li>
            멤버 삭제 모드에서{" "}
            <mark>
              <b>삭제</b>
            </mark>
            버튼을 선택하면 해당 멤버를 삭제합니다.
          </li>
          <img src={images.guide_editClass_3} alt="" width="620px" />
        </ol>
      </div>
    );
  }
}

export default EditClass;
