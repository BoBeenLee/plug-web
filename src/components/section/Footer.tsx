import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    background-color: #4A4A4A;
    flex-direction: column;
    height: 250px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #DFDFDF;
    border-top: 1px solid #DFDFDF;
`
const Link = styled.a`
    all: unset;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
`

const Text = styled.p`
    color: #fff;
`

class Footer extends Component {
    public render() {
        return (
            <Container>
                <Link href="#">이용약관 및 개인정보취급방침</Link>
                <Text>이용문의: plugcs@gmail.com</Text>
                <div>
                    <Text>ⓒ Teamplug 2019</Text>
                </div>
            </Container>
        );
    }
}

export default Footer;
