import React, { Component } from 'react';
import styled from 'styled-components';
import images from 'plug-images';

const Container = styled.div`
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

const ContentItem = styled.section`
    display: flex;
    justify-content: space-between;
    width: 920px;
    border-bottom: 1px solid #DFDFDF;
    padding: 96px 30px;
`

const UserReview = styled.div`
    display: flex;
    flex-direction: column;
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UserName = styled.h3`
    margin-top: 22px;
`

const ContentText = styled.p`
    font-size: 24px;
    line-height: 36px;
    padding: 24px 0px;
    text-align: center;
`;



class Body2 extends Component {
    public render() {
        return (
            <Container>
{/* ContentHeader */}
                <ContentHeader><h2>플러그로 달라진 연결을 경험해보세요. </h2></ContentHeader> 
{/* ContentArea */}
                <ContentArea>

                    <ContentItem>
                        <img src={images.function_1} alt="" width="345" height="291" />
                        <UserReview>
                            <UserInfo>
                                <img src={images.avatar_parents} alt="" width="56" height="56" />
                                <UserName>학부모님</UserName>
                            </UserInfo>
                            <ContentText>"늦은 밤 선생님께 보내는 메시지, 눈치보지 않고 <br/>예약 메시지를 보낼 수 있었어요."</ContentText>
                        </UserReview>
                    </ContentItem>

                    <ContentItem>
                        <UserReview>
                            <UserInfo>
                                <img src={images.avatar_teacher} alt="" width="56" height="56" />
                                <UserName>선생님</UserName>
                            </UserInfo>
                            <ContentText>"근무시간에만 메시지를 받을 수<br/>있어서 일과 사생활이 분리되었어요."
                            </ContentText>
                        </UserReview>
                            <img src={images.function_2} alt="" width="380" height="208" />
                    </ContentItem>

                    <ContentItem>
                        <img src={images.function_3} alt="" width="380" height="273" />
                        <UserReview>
                            <UserInfo>
                                <img src={images.avatar_parents} alt="" width="56" height="56" />
                                <UserName>학부모님</UserName>
                            </UserInfo>
                            <ContentText>"아이가 소속된 학급의 선생님들, 다른 부모님들과<br/> 한 곳에서 소통할 수 있어서 좋아요."</ContentText>
                        </UserReview>
                    </ContentItem>

                </ContentArea>
            </Container>
        );
    }
}

export default Body2;
