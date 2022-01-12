import React, {useState, useEffect} from 'react';
import './Slider.scss';
import BtnSlider from './btnSlider.js';
import dataSlider from './dataSlider';
import useWindowDimensions from '../windowSize/useWindowDemensions';

export default function Slider({updateData}) {

    const {width} = useWindowDimensions();
    const [slideIndex, setSlideIndex] = useState(1);
    const [windowWidth, changeWindowWidth] = useState(0);
    const [nameOfFolder,changeNameOfFolder] = useState("");

    useEffect(() => {
        changeWindowWidth({width}.width);

        if (windowWidth > 1024) {
            changeNameOfFolder("Desktop");
        }
        if (windowWidth <= 1024 && windowWidth >= 450) {
            changeNameOfFolder("Tablet");
        }

        if (windowWidth < 450) {
            changeNameOfFolder("Mobile");
        }

        return 0;
    },[width, windowWidth]);

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1);
            updateData(slideIndex);
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
            updateData(0)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
            updateData(slideIndex - 2);
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
            updateData(dataSlider.length - 1);
        }
    }

    const moveDot = index => {
        setSlideIndex(index);
        updateData(index - 1);
    }

    return (
        <div className="container-slider">
            <SlideByWidth name={nameOfFolder} slideIndex={slideIndex}/>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 7}).map((item, index) => (
                    <div key={dataSlider[index].id}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "slidedot active" : "slidedot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

const SlideByWidth = ({name,slideIndex}) => {
    return (
        dataSlider.map((obj, index) => {
            return (
                <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                >
                    <img alt="slider-img"
                        src={process.env.PUBLIC_URL + `/sliderImgs${name}/img${index + 1}.jpg`} 
                    />
                </div>
            )
        })
    )
}
