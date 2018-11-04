import React, { Component } from 'react';
import styled from 'styled-components';

import { PWButton } from '../button';

const Container = styled.div`
    display: flex;
    max-width: 1100px;
    margin: auto;
    flex-direction: column;
    border-bottom: 1px solid #DFDFDF;
`;


class Body3 extends Component {
    public render() {
        return (
            <Container>
                <h2>Add body 3 content</h2>
                <div>
                    <div><PWButton type="secondary" label={"선생님용 매뉴얼"} /></div>
                    <PWButton type="secondary" label={"학부모님용 매뉴얼"} />
                </div>
            </Container>
        );
    }
}

export default Body3;   
