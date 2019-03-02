import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { Router } from "../../../routes";
import { PWButton } from "../../components/button";
import { ManualHeader, PWHeader } from "../../components/header";

import {
  EditChildName,
  ParentAddClass,
  ParentRegister
} from "../../components/manual/parents";

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

const DropDown = styled.div`
  display: none;
  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
    width: 90%;
  }
`;

const Select = styled.select`
  all: unset;
  width: 100%;
  border-bottom: 2px solid gray;
  font-size: 18px;
  font-weight: 800;
  padding: 8px;
  &:focus {
    border-bottom: 2px solid blue;
    box-shadow: 1px;
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
    const { url } = this.props;
    const selectedId = _.get(url, ["query", "id"], "1");

    return (
      <Container>
        <PWHeader activePathname={url.pathname} />
        <ManualHeader activePathname={url.pathname}
          title="이용방법"
          teacherUri="/manual/teacher"
          parentUri="/manual/parent"
        />
        <Section>
          <DropDown>
            <Select onChange={this.onManualSelected}>
              {_.map(this.contentKeys(), (key: NumberType) => {
                const ContentData = ParentContentMap.get(key);
                return (
                  <option selected={selectedId === key} value={key}>
                    {ContentData.name}
                  </option>
                );
              })}
            </Select>
          </DropDown>

          <Aside>
            {_.map(this.contentKeys(), (key: NumberType) => {
              const ContentData = ParentContentMap.get(key);
              return (
                <PWButton
                  active={selectedId === key}
                  label={ContentData.name}
                  type="listtab"
                  onClick={_.partial(this.onManualClick, key)}
                />
              );
            })}
          </Aside>

          <Content>
            {this.renderContent(_.get(url, ["query", "id"], "1"))}
          </Content>
        </Section>
      </Container>
    );
  }

  private contentKeys = () => {
    const res = [];
    for (const key of ParentContentMap.keys()) {
      res.push(key);
    }
    return res;
  };

  private onManualClick = (key: NumberType) => {
    Router.replaceRoute(`/manual/parent?id=${key}`);
  };

  private onManualSelected = (event: any) => {
    const value = event.target.value;
    Router.replaceRoute(`/manual/parent?id=${value}`);
  };

  private renderContent = (id: NumberType) => {
    const TargetComponent = ParentContentMap.get(id)!.Component as any;
    return <TargetComponent />;
  };
}
