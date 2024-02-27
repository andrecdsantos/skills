'use client';
import { useRef } from 'react';
import { data } from '../../data/data.js';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const carouselAnimated = () => {
    //await new Promise(resolve=> setTimeout(resolve,8000))
    const carousel = useRef(null);
    const shoes = useRef(null);

    const handleCarouselClick = (e: React.MouseEvent, direction: string) => {
        e.preventDefault();
        if (carousel.current && shoes.current) {
            direction === 'left'
                ? (carousel.current.scrollLeft -= shoes.current.offsetWidth)
                : (carousel.current.scrollLeft += shoes.current.offsetWidth);
        }
    };
    

    return (
        <>
            <h1 className="text-center text-4xl">Título Carrossel</h1>
            <div
                className="h-80 w-full bg-violet-200 relative flex items-center overflow-hidden"
                ref={carousel}
            >
                <div
                    ref={shoes}
                    className="flex items-center justify-center w-full gap-x-6 
                    animate-infinito hover:[animation-play-state:paused]"
                >
                    {data.map((item) => (
                        <img
                            key={item.id}
                            src={item.image}
                            alt={item.name}
                            className="shadow-2xl rounded-xl"
                        ></img>
                    ))}
                </div>
                {/* <button
                    onClick={(e) => handleCarouselClick(e, 'left')}
                    className="text-purple-700 text-5xl  absolute z-10 -left-6 top-1/2"
                >
                    <FaArrowAltCircleLeft className="bg-black rounded-full" />
                </button>
                <button
                    onClick={(e) => handleCarouselClick(e, 'right')}
                    className="text-purple-700 text-5xl  absolute z-10 -right-6 top-1/2"
                >
                    <FaArrowAltCircleRight className="bg-black rounded-full" />
                </button> */}
            </div>

            <button
                onClick={(e) => handleCarouselClick(e, 'left')}
                className="text-purple-700 text-5xl  "
            >
                <FaArrowAltCircleLeft className="bg-black rounded-full" />
            </button>
            <button
                onClick={(e) => handleCarouselClick(e, 'right')}
                className="text-purple-700 text-5xl"
            >
                <FaArrowAltCircleRight className="bg-black rounded-full" />
            </button>
        </>
    );
};

export default carouselAnimated;
