import React, { Component } from 'react';
import styled from 'styled-components';
import Image from "plug-images";
import images from 'plug-images';

const Container = styled.section`
    display: flex;
    max-width: 100%;
    margin: auto;
    flex-direction: column;
    justify-content: center;
`;


const ContentHeader = styled.div`
    background-color: #F9F9F9;
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;

`

const ContentArea = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ContentLeft = styled.div`
    display: flex;
    justify-content: flex-end;
    max-width: 1045px;
    margin: 80px auto;
`

const UserReview = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 130px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
`

const UserName = styled.h3`
    margin-left: 16px;
`

const ContentText = styled.p`
    font-size: 24px;
    line-height: 36px;
    padding: 40px 0px;
`;

const ContentRight = styled.div`
`



class Body2 extends Component {
    public render() {
        return (
            <Container>
{/* ContentHeader */}
                <ContentHeader><h2>플러그로 달라진 연결을 경험해보세요. </h2></ContentHeader> 
{/* ContentArea */}
                <ContentArea>

                    <ContentLeft>
                        <img src={images.function_1} alt="" width="345" height="291" />
                        <UserReview>
                            <UserInfo>
                                <img src={images.avatar_parents} alt="" width="56" height="56" />
                                <UserName>학부모님</UserName>
                            </UserInfo>
                            <ContentText>"늦은 밤 선생님께 보내는 메시지,<br/> 눈치보지 않고 예약 메시지를<br/> 보낼 수 있었어요."</ContentText>
                        </UserReview>
                    </ContentLeft>
                    <ContentRight>
                    <div>
                        <img src="https://via.placeholder.com/150" alt="" width="280" height="215" />
                        <h4>좋아요</h4>
                        <ContentText>수업과 평가에 활용할 수 있는 12만개가 넘는 콘텐츠를 제공하며 원클릭으로 학기 말 성적</ContentText>
                    </div>
                    </ContentRight>
                    <ContentLeft>
                        <img src="https://via.placeholder.com/150" alt="" width="280" height="215" />
                        <h4>좋아요</h4>
                        <ContentText>수업과 평가에 활용할 수 있는 12만개가 넘는 콘텐츠를 제공하며 원클릭으로 학기 말 성적</ContentText>
                    </ContentLeft>

                </ContentArea>
              
            </Container>
        );
    }
}

export default Body2;
