import Image from "plug-images";
import React, { Component } from 'react';

class Logo extends Component {
    public render() {
        return (
            <img src={Image.ic_appicon_primary} />
        );
    }
}

export default Logo;
