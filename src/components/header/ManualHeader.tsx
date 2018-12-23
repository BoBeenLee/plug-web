import React from 'react';

import { Router } from "../../../routes";
import { PWButton } from "../button";

interface IProps {
    activePathname: string;
}

class ManualHeader extends React.Component<IProps> {
    public render() {
        const { activePathname } = this.props;
        return (
            <div>
                <PWButton active={activePathname === "/manual/teacher"} label="선생님" type="listtab" onClick={this.navigateToTeacher} />
                <PWButton active={activePathname === "/manual/parent"} label="학부모" type="listtab" onClick={this.navigateToParent} />
            </div>
        );
    }

    private navigateToTeacher = () => {
        Router.replaceRoute("/manual/teacher");
    };

    private navigateToParent = () => {
        Router.replaceRoute("/manual/parent");
    };
}

export default ManualHeader;
