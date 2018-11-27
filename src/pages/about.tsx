import React from 'react';
import { PWHeader } from "../components/header";
import { FucntionIntroSection, ServiceIntroSection, DownloadGuideSection, Footer } from "../components/section";

const AboutPage = () => {
    return (
        <div>
            <PWHeader />
            <ServiceIntroSection />
            <FucntionIntroSection />
            <DownloadGuideSection />
            <Footer />
        </div>
    );
};

export default AboutPage;
