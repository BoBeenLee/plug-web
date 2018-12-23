import React from 'react';
import { PWHeader } from "../components/header";
import { DownloadGuideSection, Footer, FucntionIntroSection, ServiceIntroSection } from "../components/section";


const AboutPage = () => {
    return (
        <div>
            <PWHeader activePathname="/about" />
            <ServiceIntroSection />
            <FucntionIntroSection />
            <DownloadGuideSection />
            <Footer />
        </div>
    );
};

export default AboutPage;
