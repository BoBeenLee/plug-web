import images from "plug-images";
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  max-width: 100%;
  margin: auto;
  flex-direction: column;
  justify-content: center;
`;

const ContentHeader = styled.div`
  background-color: #f9f9f9;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  @media (min-width: 320px) and (max-width: 480px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`;

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
  border-bottom: 1px solid #dfdfdf;
  padding: 96px 30px;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    width: 75%;
    align-items: center;
    padding: 24px 30px;
  }
`;

const ContentItemReversed = styled(ContentItem)`
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

const NoUnderlineContentItem = styled(ContentItem)`
  border-bottom: none;
`;

const UserReview = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserInfo = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 25px;
  }
`;

const FuncImg = styled.img`
  width: 50%;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: 0 3%;
  }
`;

const UserName = styled.h3`
  margin-top: 22px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    margin-top: 10px;
  }
`;

const ContentText = styled.p`
  font-size: 18px;
  line-height: 27px;
  padding: 24px 0px;
  text-align: center;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const Break = styled.br`
  display: block;
  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
  }
`;

class FucntionIntroSection extends Component {
  public render() {
    return (
      <Container>
        <ContentHeader>
          <h2>플러그로 달라진 연결을 경험해보세요.</h2>
        </ContentHeader>

        <ContentArea>
          <ContentItem>
            <FuncImg src={images.function_1} alt="" />
            <UserReview>
              <UserInfo>
                <img
                  src={images.avatar_parents}
                  alt=""
                  width="56"
                  height="56"
                />
                <UserName>학부모님</UserName>
              </UserInfo>
              <ContentText>
                "아이의 학교 생활에 대해 선생님과
                <br /> 이야기할 수 있는 통로가 생겼어요."
              </ContentText>
            </UserReview>
          </ContentItem>

          <ContentItemReversed>
            <UserReview>
              <UserInfo>
                <img
                  src={images.avatar_teacher}
                  alt=""
                  width="56"
                  height="56"
                />
                <UserName>선생님</UserName>
              </UserInfo>
              <ContentText>
                "사생활을 보호받으면서 <Break />
                학부모님과 연락을 주고받을 수 있어요 "
              </ContentText>
            </UserReview>
            <FuncImg src={images.function_2} alt="" />
          </ContentItemReversed>

          <NoUnderlineContentItem>
            <FuncImg src={images.function_3} alt="" />
            <UserReview>
              <UserInfo>
                <img
                  src={images.avatar_parents}
                  alt=""
                  width="56"
                  height="56"
                />
                <UserName>학부모님</UserName>
              </UserInfo>
              <ContentText>
                "아이를 교육하시는 선생님들과
                <Break /> 한 곳에서 소통할 수 있어서 좋아요"
              </ContentText>
            </UserReview>
          </NoUnderlineContentItem>
        </ContentArea>
      </Container>
    );
  }
}

export default FucntionIntroSection;
