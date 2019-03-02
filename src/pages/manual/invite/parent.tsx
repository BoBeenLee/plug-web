import _ from "lodash";
import React from "react";
import styled from "styled-components";

import {
  EditChildName,
  ParentAddClass,
  ParentRegister
} from "../../../components/manual/parents";

interface IProps {
  url: any;
}

const Container = styled.div``;

const Header = styled.header`
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  padding: 22px 0;
  margin: auto;
  max-width: 1100px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    display: flex;
    align-items: center;
  }
`;

const Title = styled.h2``;

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

const Aside = styled.div`
  display: flex;
  padding: 20px 40px 20px 0;
  min-width: 200px;
  background-color: #f9f9f9;
  flex-direction: column;
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
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

type NumberType = "1" | "2" | "3" | "4";

interface IContentData {
  Component: React.ReactNode;
  name: string;
}

const ParentContentMap = new Map<NumberType, IContentData>()
  .set("1", {
    Component: ParentRegister,
    name: "플러그 가입하기"
  })
  .set("2", {
    Component: ParentAddClass,
    name: "새로운 클래스에 가입하기"
  })
  .set("3", {
    Component: EditChildName,
    name: "자녀 이름 변경하기"
  });

export default class Parent extends React.Component<IProps> {
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
    const TargetComponent = ParentContentMap.get(id)!.Component as any;
    return <TargetComponent />;
  };
}
