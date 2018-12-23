import React from "react";
import styled from "styled-components";
import { Router } from "../../../routes";
import { PWButton } from "../button";

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
  }
`;

interface IProps {
  activePathname: string;
}

class ManualHeader extends React.Component<IProps> {
  public render() {
    const { activePathname } = this.props;
    return (
      <Container>
        <h2>플러그 이용방법</h2>
        <div>
          <PWButton
            active={activePathname === "/manual/teacher"}
            label="선생님"
            type="listtab"
            onClick={this.navigateToTeacher}
          />
          <PWButton
            active={activePathname === "/manual/parent"}
            label="학부모님"
            type="listtab"
            onClick={this.navigateToParent}
          />
        </div>
      </Container>
    );
  }

  private navigateToTeacher = () => {
    Router.replaceRoute("/manual/teacher");
  };

  private navigateToParent = () => {
    Router.replaceRoute("/manual/parent");
  };
}

export default ManualHeader;
