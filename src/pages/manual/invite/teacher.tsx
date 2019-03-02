import _ from "lodash";
import React from "react";
import styled from "styled-components";

import {
  AddClass,
  AddOtherClass,
  EditClass,
  InviteToClass,
  OfficeHourSetting,
  Register
} from "../../../components/manual/teacher";

interface IProps {
  url: any;
}

const Container = styled.div``;

const Section = styled.div`
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
  margin: auto;
  max-width: 1100px;
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: 800px;
  padding: 20px;
  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
    width: 100%;
    left: -10%;
  }
`;

type NumberType = "1" | "2" | "3" | "4" | "5" | "6";

interface IContentData {
  Component: React.ReactNode;
  name: string;
}

const TeacherContentMap = new Map<NumberType, IContentData>()
  .set("1", {
    Component: Register,
    name: "플러그 가입하기"
  })
  .set("2", {
    Component: AddClass,
    name: "클래스에 초대하기"
  })
  .set("3", {
    Component: InviteToClass,
    name: "기존 클래스에 초대"
  })
  .set("4", {
    Component: AddOtherClass,
    name: "새로운 클래스 만들기"
  })
  .set("5", {
    Component: EditClass,
    name: "클래스 편집"
  })
  .set("6", {
    Component: OfficeHourSetting,
    name: "근무시간 설정"
  });

export default class Teacher extends React.Component<IProps> {
  public render() {
    const selectedId = "2";

    return (
      <Container>
        <Section>
          <Content>
            {this.renderContent(selectedId)}
          </Content>
        </Section>
      </Container>
    );
  }

  private renderContent = (id: NumberType) => {
    const TargetComponent = TeacherContentMap.get(id)!.Component as any;
    return <TargetComponent />;
  };
}
