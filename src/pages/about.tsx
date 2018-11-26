import React from 'react';
import { PWHeader } from "../components/header";
import { FucntionIntroSection, ManualSection, ServiceIntroSection } from "../components/section";

const AboutPage = () => {
    return (
        <div>
            <PWHeader />
            <ServiceIntroSection />
            <FucntionIntroSection />
            <ManualSection />
        </div>
    );
};

export default AboutPage;
