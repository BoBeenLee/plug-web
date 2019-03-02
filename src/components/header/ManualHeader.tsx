import React from "react";
import styled from "styled-components";
import { Router } from "../../../routes";
import { PWButton } from "../button";

interface IProps {
  title: string;
  teacherUri: string;
  parentUri: string;
}

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

const ButtonArea = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
  }
`;

const UserTypeButton = styled(PWButton)`
  @media (min-width: 320px) and (max-width: 480px) {
    &:second-child {
      margin-left: 0;
    }
  }
`;

interface IProps {
  activePathname: string;
}

class ManualHeader extends React.Component<IProps> {
  public render() {
    const { activePathname, title, teacherUri, parentUri } = this.props;
    return (
      <Container>
        <h2>{title}</h2>
        <ButtonArea>
          <UserTypeButton
            active={activePathname === teacherUri}
            label="선생님"
            type="listtab"
            onClick={this.navigateToTeacher}
          />
          <UserTypeButton
            active={activePathname === parentUri}
            label="학부모님"
            type="listtab"
            onClick={this.navigateToParent}
          />
        </ButtonArea>
      </Container>
    );
  }

  private navigateToTeacher = () => {
    const { teacherUri } = this.props;
    Router.replaceRoute(teacherUri);
  };

  private navigateToParent = () => {
    const { parentUri } = this.props;
    Router.replaceRoute(parentUri);
  };
}

export default ManualHeader;
