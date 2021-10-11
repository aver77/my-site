import React, {useState} from 'react';
import './Slider.scss';
import BtnSlider from './btnSlider.js';
import dataSlider from './dataSlider';
// import TextSlider from './textSlider';

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    //мб засунуть сюда textslider + в сам mainProjects
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img alt="slider-img"
                            src={process.env.PUBLIC_URL + `/sliderImgs/img${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 6}).map((item, index) => (
                    <div 
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "slidedot active" : "slidedot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}