import { addDecorator, configure } from "@storybook/react";
import _ from "lodash";
import styled, { injectGlobal } from "styled-components";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.tsx$/);

injectGlobal`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  * { 
    font-family: 'Spoqa Han Sans', 'Sans-serif'; color: #4A4A4A;
  }

  h1 {
    font-weight: bold;
    font-size: 48px;
    text-align: left;
    margin: 0 0 12px 0;
  }

  h2 {
    font-weight: 300;
    font-size: 36px;
  }

  h3 {
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 27px;
    margin: 0;
  }

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
