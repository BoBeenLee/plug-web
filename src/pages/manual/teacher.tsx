import _ from "lodash";
import React from "react";
import styled from "styled-components";

import { Router } from "../../../routes";
import { ManualHeader, PWHeader } from "../../components/header";

import { AddClass, AddOtherClass, EditClass, InviteToClass, OfficeHourSetting, Register } from "../../components/manual/teacher";

interface IProps {
    url: any;
}

const Container = styled.div``;

const Content = styled.div``;

const TeacherContentMap = new Map()
    .set("1", Register)
    .set("2", AddClass)
    .set("3", InviteToClass)
    .set("4", AddOtherClass)
    .set("5", OfficeHourSetting)
    .set("6", EditClass);

export default class Parent extends React.Component<IProps> {
    public render() {
        const { url } = this.props;
        return (
            <Container>
                <PWHeader activePathname={url.pathname} />
                <ManualHeader activePathname={url.pathname} />
                <select onChange={this.onManualSelected}>
                    <option value="1">플러그 가입하기</option>
                    <option value="2">플러그 가입하기</option>
                    <option value="3">플러그 가입하기</option>
                    <option value="4">플러그 가입하기</option>
                    <option value="5">플러그 가입하기</option>
                    <option value="6">플러그 가입하기</option>
                </select>
                <Content>{this.renderContent(_.get(url, ["query", "id"], "1"))}</Content>
            </Container>
        );
    }

    private onManualSelected = (event: any) => {
        const value = event.target.value;
        Router.replaceRoute(`/manual/teacher?id=${value}`);
    };

    private renderContent = (id: string) => {
        const TargetComponent = TeacherContentMap.get(id);
        return <TargetComponent />;
    }
}
