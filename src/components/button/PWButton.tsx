import React, { Component } from 'react';
import styled from 'styled-components';


type ButtonType = "primary" | "secondary";

interface IProps {
    classNames?: string;
    label: string;
    type: ButtonType
}

const PrimaryButton = styled.button`
  background: #3867D6;
  font-family: SpoqaHanSans-Bold;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  line-height: 18px;
  padding: 16px 32px;
  border-radius: 4px;
  height: 50px;
  margin: 0;
  &:hover {
    box-shadow: 0 3px 20px 2px rgba(107,107,107,0.5);
    transform: scale(1.05, 1.05);
  }
`;

const SecondaryButton = styled.button`
  background: #FFFFFF;
  border: 1px solid #3867D6;
  font-family: SpoqaHanSans-Bold;
  font-size: 16px;
  color: #3867D6;
  letter-spacing: 0;
  text-align: center;
  line-height: 18px;
  padding: 16px 32px;
  border-radius: 4px;
  height: 50px;
  margin: 0;
  &:hover {
    box-shadow: 0 3px 20px 2px rgba(107,107,107,0.5);
    transform: scale(1.05, 1.05);
    }
  `;

const BUTTON_TYPE_COMPONENT_MAP = new Map<ButtonType, React.ReactNode>()
    .set("primary", PrimaryButton)
    .set("secondary", SecondaryButton);

export class PWButton extends Component<IProps> {
    public render() {
        const { classNames, type, label } = this.props;
        const TargetComponent: any = BUTTON_TYPE_COMPONENT_MAP.get(type);
        return (
            <TargetComponent className={classNames}>{label}</TargetComponent>
        );
    }
}
