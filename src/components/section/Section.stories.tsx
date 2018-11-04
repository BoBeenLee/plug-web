import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";

import ServiceIntroSection from "./ServiceIntroSection";

const Container = styled.div`
  width: 100%;
`;

storiesOf("Section", module)
    .addDecorator(storyFunc => <Container>{storyFunc()}</Container>)
    .add("ServiceIntroSection", () => (
        <ServiceIntroSection />
    ));
