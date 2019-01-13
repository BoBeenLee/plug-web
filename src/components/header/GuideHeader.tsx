import React from "react";
import styled from "styled-components";

const Container = styled.header`
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

class GuideHeader extends React.Component {
  public render() {
    return (
      <Container>
        <h2>플러그 가입 안내문</h2>
      </Container>
    );
  }
}

export default GuideHeader;
