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

class ParentChat extends Component {
  public render() {
    return (
      <div>
        <H3>
          채팅하기 <br />{" "}
        </H3>
        <ol>
          <li>
            <mark>
              <b>채팅 화면</b>
            </mark>
            에서 채팅하고 싶은 선생님을 선택합니다.
          </li>
          <li>선생님과 채팅을 시작합니다.</li>
          <Img src={images.guide_addClass_1} alt="" width="" />
        </ol>
      </div>
    );
  }
}

export default ParentChat;
