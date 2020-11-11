import React from "react";

import '../Styles/components/banner.css';
import bannerImg from '../Images/banner-landing.svg';

function Banner() {
    return (
        <div className="banner menu-top">
            <img src={bannerImg} alt="banner" className="bannerImg" />
        </div>
    );
}

export default Banner;