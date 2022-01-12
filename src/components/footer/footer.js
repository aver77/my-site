import React, { memo } from "react";
import './footer.scss';

import FooterTitle from "./components/FooterTitle";
import FooterRightsWrap from "./components/FooterRights/FooterRightsWrap";
import FooterRights from "./components/FooterRights/FooterRights";
import FooterUniteWrap from "./components/FooterUnite/FooterUniteWrap";

const Footer = ({id}) => {
    return (
        <div className="footer" id={id}>
            <div className="footer__wrapper __container">
                <FooterTitle title="NW Project" />
                <FooterRightsWrap>
                    <FooterRights point="start" text="All rights reserved"/>
                    <FooterRights point="end" text="copyright © 2021"/>
                </FooterRightsWrap>
                <FooterUniteWrap />
            </div> 
        </div>
    )
}
export default memo(Footer);