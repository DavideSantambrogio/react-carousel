import React, { useState } from 'react';
import slides from "../data/data";


const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleNextSlide = () => {
        setActiveSlide((prevActiveSlide) => (prevActiveSlide + 1) % slides.length);
    };

    const handlePreviousSlide = () => {
        setActiveSlide((prevActiveSlide) => (prevActiveSlide - 1 + slides.length) % slides.length);
    };

    return (
        <>
            <div className="carousel-container">
                <div className="carousel">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item 
                                    ${index === activeSlide ? 'active' : ''} 
                                    ${index === activeSlide - 1 || (activeSlide === 0 && index === slides.length - 1) ? 'prev' : ''} 
                                    ${index === activeSlide + 1 || (activeSlide === slides.length - 1 && index === 0) ? 'next' : ''}`
                            }>                               
                            <img src={slide.image} alt={slide.title} className="carousel-image" />
                            <h1 className='slide-title'>{slide.title}</h1> 
                        </div>
                    ))}                    
                </div>                
            </div>
            <button className="carousel-button prev" onClick={handlePreviousSlide}>
                Precedente
            </button>
            <button className="carousel-button next" onClick={handleNextSlide}>
                Successiva
            </button>

        </>
    );
};

export default Carousel;
