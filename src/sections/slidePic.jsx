import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SlidePic = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='relative w-full overflow-hidden' style={{ height: '60vh' }}>
            <div className="flex w-full h-full">
                {slides.map((slide, index) => (
                    <div key={slide.id} style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }} className="w-full h-full flex-shrink-0 relative">
                        <Link to={slide.link} className="w-full h-full">
                            <img src={slide.image} alt={slide.label} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-lg font-semibold p-2 text-center ">
                                {slide.label}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <button className='absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 cursor-pointer z-10' onClick={goToPrevious} aria-label="Previous Slide">
                &#10094; {/* Left Arrow */}
            </button>
            <button className='absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 cursor-pointer z-10' onClick={goToNext} aria-label="Next Slide">
                &#10095; {/* Right Arrow */}
            </button>

            <div className='absolute bottom-0 w-full flex justify-center p-4'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className={`inline-block h-2 w-2 rounded-full mx-2 cursor-pointer ${slideIndex === currentIndex ? 'bg-white' : 'bg-gray-400'}`} onClick={() => goToSlide(slideIndex)} aria-label={`Go to slide ${slideIndex + 1}`}>
                        {/* Indicator */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlidePic;
