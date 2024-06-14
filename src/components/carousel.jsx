import React, { useState } from 'react';
import slides from "../data/data";

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const autoplayDelay = 1500;

    const handleNextSlide = () => {
        setActiveSlide((prevActiveSlide) => (prevActiveSlide + 1) % slides.length);
    };

    const handlePreviousSlide = () => {
        setActiveSlide((prevActiveSlide) => (prevActiveSlide - 1 + slides.length) % slides.length);
    };

    useState(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevActiveSlide) => (prevActiveSlide + 1) % slides.length);
        }, autoplayDelay);

        return () => clearInterval(interval); 
    }, []); 

    return (
        <>
            <h1>Carosello</h1>
                <div className="container">
                    <button className="carousel-button" onClick={handlePreviousSlide}>
                        ←
                    </button>
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

                    <button className="carousel-button" onClick={handleNextSlide}>
                        →
                    </button>
                </div>

                {/* Bullet Navigation */}
                <ul className="bullet-navigation">
                    {slides.map((slide, index) => (
                        <li
                            key={index}
                            className={index === activeSlide ? 'active' : ''}
                            onClick={() => setActiveSlide(index)}
                        ></li>
                    ))}
                </ul>
            
        </>
    );
};

export default Carousel;
