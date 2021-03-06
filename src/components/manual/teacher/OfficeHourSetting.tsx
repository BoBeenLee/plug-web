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

class OfficeHourSetting extends Component {
  public render() {
    return (
      <div>
        <H3>
          근무시간 설정 <br />{" "}
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
              <b>플러그 오프 설정</b>
            </mark>{" "}
            영역 에서는 플러그 오프 설정/해제, 휴일 설정, 근무 시작/종료 시간을
            설정 할 수 있습니다.
            <br />
            *플러그 오프 설정이 꺼져 있는 상태에서는 플러그 오프 설정을 켭니다.
          </li>
          <Img src={images.guide_officeHourSetting_1} alt="" width="" />

          <br />
          <br />
          <li>
            토,일요일이 기본 휴일로 설정되어 있습니다. 요일을 선택하여 휴일로
            설정하거나 해제할 수 있습니다.
          </li>
          <li>
            <mark>
              <b>근무 시작시간</b>
            </mark>
            ,{" "}
            <mark>
              <b>근무 종료시간</b>
            </mark>
            을 선택하여 시간을 선택할 수 있습니다.
            <ul>
              <li>
                해당 시간에는 학부모님에게 선생님이 연락을 받기 어려울 수 있음을
                안내해드립니다.
              </li>
              <li>해당 시간에는 알람이 울리지 않습니다.</li>
            </ul>
          </li>
          <Img src={images.guide_officeHourSetting_2} alt="" width="" />
        </ol>
      </div>
    );
  }
}

export default OfficeHourSetting;
