import React, { useState , useCallback, memo } from "react";
import { animateScroll as scroll } from "react-scroll";

import BurgerClose from "./components/BurgerClose";
import HeaderWrap from "../headerWrap";
import HeaderTitle from "../Header/HeaderTitle";
import BurgerItem from "./components/BurgerItem";
import BurgerWrap from "./components/BurgerWrap";
import BurgerTitle from "./components/BurgerTitle";
import NavItem from "../components/NavItem";

import '../index.scss';

const BurgerMenu = () => {
    const [burgerClosed, changeBurgerClosed] = useState(true);

    const changeBurgerClosedHandler = useCallback((value) => {
        changeBurgerClosed(value)
    }, []);

    const scrollToTop = useCallback(() => {
        scroll.scrollToTop();
    }, [])

    if (burgerClosed) {
        return (
            <HeaderWrap>
                <HeaderTitle onClickHandler={scrollToTop} title="NW Project"/>
                <BurgerItem burgerClosedHandler={changeBurgerClosedHandler}/>
            </HeaderWrap>
        )
    }

    return (
        <BurgerWrap>
            <BurgerClose burgerCloseHandler={changeBurgerClosedHandler}/>
            <BurgerTitle burgerCloseHandler={changeBurgerClosedHandler} title="NW Project"/>
            <NavItem type="burger__navbar-elems" textType="burger" onClickHandler={changeBurgerClosedHandler}/>
        </BurgerWrap>
    )
}
export default memo(BurgerMenu);