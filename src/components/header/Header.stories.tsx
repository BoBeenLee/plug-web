import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";

import PWHeader from "./PWHeader";

const Container = styled.div`
  width: 100%;
`;

storiesOf("Header", module)
    .addDecorator(storyFunc => <Container>{storyFunc()}</Container>)
    .add("PWHeader", () => (
        <PWHeader activePathname="/about" />
    ));
