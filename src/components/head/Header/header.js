import React, { memo } from "react";
import { useCallback } from "react";
import { animateScroll as scroll} from "react-scroll";

import HeaderWrap from "../headerWrap";
import NavItem from "../components/NavItem";
import HeaderTitle from "./HeaderTitle";

import '../index.scss';

const Header = () => {
    const scrollToTop = useCallback(() => {
        scroll.scrollToTop();
    }, []);

    return (
        <HeaderWrap>
            <HeaderTitle onClickHandler={scrollToTop} title="NW Project"/>
            <NavItem type="header__nav" textType="header"/>
        </HeaderWrap>
    )
}
export default memo(Header);