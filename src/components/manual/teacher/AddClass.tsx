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

class AddClass extends Component {
  public render() {
    return (
      <div>
        <H3>
          클래스에 초대하기 <br />{" "}
        </H3>
        <ol>
          <li>클래스를 만들면 클래스 초대코드가 생성됩니다.</li>
          <li>
            해당 초대코드를 학부모님에게 전달합니다.
            <ul>
              <li>
                초대코드는 플러그에서 제공하는 안내문 양식을 이용하여 가정통신문
                또는 알림장으로 전달할 수 있습니다.
              </li>
              <li>
                안내문 양식은 PC에서{" "}
                <mark>
                  <b>plugapp.me</b>
                </mark>{" "}
                에 접속하여 홈페이지 우측 상단의{" "}
                <mark>
                  <b>안내문 받기</b>
                </mark>
                버튼을 클릭하여 받을 수 있습니다.
              </li>
            </ul>
          </li>
          <Img src={images.guide_addClass_1} alt="" width="" />

          <br />
          <li>학부모님이 초대코드를 입력하면 해당 클래스에 가입됩니다.</li>
          <ul>
            <li>학부모님은 전달 받은 초대코드를 입력합니다.</li>
            <li>자녀 이름을 입력하여 클래스 가입을 완료합니다.</li>
          </ul>
          <Img src={images.guide_addClass_2} alt="" width="" />
        </ol>
      </div>
    );
  }
}

export default AddClass;
