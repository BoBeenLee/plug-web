import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    max-width: 1100px;
    margin: auto;
    flex-direction: column;
    border-bottom: 1px solid #DFDFDF;
`;


const ContentArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 42px 0;
`;

const ContentText = styled.p`
    width: 280px;
    overflow: hidden;
`;

class Body2 extends Component {
    public render() {
        return (
            <Container>
                <h2>학부모와 선생님의 올바른 소통</h2>    
                <h3>언제 어디서나, 1년 365일, 몇 명과 함께하든ㅋㅋ 무료입니다. 가입과 로그인 없이 전화번호만 있으면<br/>실시간 그룹채팅 및 언제 어디서나, 1년 365일, 몇 명과 함께하든 무료입니다. 가입과 로그인 없이 전화번호만 켜놓고 갈거야???.</h3>
                <ContentArea>
                    <div>
                        <img src="https://via.placeholder.com/150" alt="" width="280" height="215" />
                        <h4>좋아요</h4>
                        <ContentText>수업과 평가에 활용할 수 있는 12만개가 넘는 콘텐츠를 제공하며 원클릭으로 학기 말 성적</ContentText>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/150" alt="" width="280" height="215" />
                        <h4>좋아요</h4>
                        <ContentText>수업과 평가에 활용할 수 있는 12만개가 넘는 콘텐츠를 제공하며 원클릭으로 학기 말 성적</ContentText>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/150" alt="" width="280" height="215" />
                        <h4>좋아요</h4>
                        <ContentText>수업과 평가에 활용할 수 있는 12만개가 넘는 콘텐츠를 제공하며 원클릭으로 학기 말 성적</ContentText>
                    </div>
                </ContentArea>
              
            </Container>
        );
    }
}

export default Body2;
