import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const Container = styled.div`
  width: 360px;
`;

storiesOf("Logo", module)
    .addDecorator(storyFunc => <Container>{storyFunc()}</Container>)
    .add("Primary Logo", () => (
        <Logo />
    ));
