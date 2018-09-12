import React from "react";
import styled from "styled-components";

const Container = styled.div``;

interface IProps {
  contentID: string;
}
export default class Index extends React.Component<IProps> {
  public static getInitialProps({ query }) {
    return { contentID: query.id };
  }

  public render() {
    return (
      <Container>
        <div>Hello World</div>
      </Container>
    );
  }
}
