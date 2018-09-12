import { addDecorator, configure } from "@storybook/react";
import _ from "lodash";
import styled, { injectGlobal } from "styled-components";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.tsx$/);

injectGlobal`
  html, body, #root {
    height: 100%;
  }
  #root {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div``;

addDecorator(storyFn => <Container>{storyFn()}</Container>);

function loadStories() {
  _.forEach(req.keys(), req);
}

configure(loadStories, module);
