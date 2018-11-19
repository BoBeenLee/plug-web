import Image from "plug-images";
import React, { Component } from 'react';
import styled from 'styled-components';
import { PWButton } from '../button';


const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 1100px;
    height: 650px;
    border-bottom: 1px solid #DFDFDF;
`;

const Content = styled.div`
    display: flex;
    width: 445px;
    margin-right: 125px;
    flex-direction: column;
`;

const ButtonView = styled.div`
    display: flex;
    margin-top:60px;
`;

const IOSButtonView = styled.div`
    margin-right: 18px;
`;


class Body extends Component {
    public render() {
        return (
            <Container>
                <Content>
                    <h1>플러그, <br/> 학부모와 선생님을 <br/>새롭게 연결합니다.</h1>
                    <h3>언제 어디서나, 1년 365일, 몇 명과 함께하든 무료입니다. <br />가입과 로그인 없이 전화번호만 있으면 실시간 그룹채팅 및</h3>
                    <ButtonView>
                        <IOSButtonView>
                            <PWButton
                                type="primary"
                                label={"iOS 다운로드"} />
                        </IOSButtonView>
                        <PWButton
                            type="primary"
                            label={"안드로이드 다운로드"} />
                    </ButtonView>
                </Content>
                <img src={Image.app_mockup} alt="Mockup_image" />
            </Container>

        );
    }
}

export default Body;
