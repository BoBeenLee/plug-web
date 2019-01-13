// import Image from "plug-images";
import React, { Component } from "react";
import styled from "styled-components";
import { PWButton } from "../button";

const ContentArea = styled.div`
  top: 0;
  display: flex;
  flex-direction: row-reverse;
  padding: 22px 0;
  margin: auto;
  max-width: 1100px;
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 90%;
    display: flex;
  }
`;

const GuideText = styled.div`
  display: flex;
`;

const DownloadTextArea = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  width: 40%;
`;

const Invite = styled.div`
  background: #ffffff;
  box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 50px;
  margin: 10px 60px 0px 0px;
`;

class GuidePageContents extends Component {
  public render() {
    return (
      <ContentArea>
        <DownloadTextArea>
          <div>
            <p>
              메신저 안내문 쪽지 알림장 한글 파일을
              <br />
              다운로드 할 수 있습니다.
            </p>
            <PWButton key="guide" type="primary" label={"한글파일 다운로드"} onClick={this.downloadGuideFile} />
          </div>
        </DownloadTextArea>

        <Aside>
          <GuideText>
            <p>
              <b>플러그 안내문으로 학부모님들의 가입을 도와드릴 수 있어요.</b>
              <br />*
              <i>
                <mark>
                  <b>교실 번호</b>
                </mark>{" "}
                와{" "}
                <mark>
                  <b>가입코드</b>
                </mark>
                를 변경하여 전달해주세요.
              </i>
            </p>
          </GuideText>
          <Invite>
            <p>
              <h3>연락 방법 안내</h3>
            </p>

            <p>
              저에게 연락이 필요하신 경우,
              <mark>
                <b>(전화번호)</b>
              </mark>
              로 전화주신 후{" "}
              <mark>
                <b>(교실 번호)</b>
              </mark>
              를 누르시면 연결이 가능합니다. 휴대전화로 연락이 필요하신 경우
              플러그 앱을 통해 메시지가 가능합니다. 플러그 앱은 알림장 등 저와
              학부모님 간의 연락 수단으로 활용될 예정입니다.
            </p>
            <p>
              <b>플러그 설치 방법</b>
              <ol>
                <li>
                  플레이스토어 혹은 앱스토어에서 ‘플러그’를 검색 후 앱을
                  다운로드, 설치합니다.
                </li>
                <li>
                  홈 화면에서{" "}
                  <mark>
                    <b>(가입코드)</b>
                  </mark>
                  을 입력하면 클래스에 가입됩니다.
                </li>
                <li>플러그 앱 실행 후 회원가입을 합니다.</li>
                <li>
                  클래스에 가입된 이후 저에게 메시지를 보내실 수 있습니다.
                </li>
              </ol>
            </p>
          </Invite>
        </Aside>
      </ContentArea>
    );
  }
  private downloadGuideFile = () => {
    window.location.href = "https://s3.ap-northeast-2.amazonaws.com/plug-data/%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3_%E1%84%92%E1%85%A1%E1%86%A8%E1%84%87%E1%85%AE%E1%84%86%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A2%E1%84%8C%E1%85%A1%E1%86%BC.hwp";
  }
}

export default GuidePageContents;
