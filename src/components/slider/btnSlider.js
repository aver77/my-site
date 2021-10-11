import React from "react";
import "./Slider.scss";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

const BtnSlider = ({ direction, moveSlide }) => {
    // console.log(direction, moveSlide);
    return (
        <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
        <img alt="slider-btn" src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    );
}
export default BtnSlider;