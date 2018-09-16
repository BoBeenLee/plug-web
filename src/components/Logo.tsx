import Image from "plug-images";
import React, { Component } from 'react';

class Logo extends Component {
    public render() {
        return (
            <div>
                <img src={Image.ic_appicon_primary} />
                Hello World
            </div>
        );
    }
}

export default Logo;
