'use client';
import { useRef } from 'react';
import { data } from '../../data/data.js';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const page = () => {
    //await new Promise(resolve=> setTimeout(resolve,8000))
    const carousel = useRef(null);
    const shoes = useRef(null);

    const handleCarouselClick = (e, direction) => {
        e.preventDefault();
        direction === 'left'
            ? (carousel.current.scrollLeft -= shoes.current.offsetWidth)
            : (carousel.current.scrollLeft += shoes.current.offsetWidth);
    };

    return (
        <>
            <h1 className="text-center text-4xl">Título Carrossel</h1>
            <div className='relative'>
              <div
                  className="h-80 w-full bg-violet-200 flex items-center overflow-hidden"
                  ref={carousel}
              >
                  <div
                      className="flex w-full gap-x-6"
                      >
                      {data.map((item) => (
                        <img
                          key={item.id}
                          src={item.image}
                          alt={item.name}
                          ref={shoes}
                          className="shadow-2xl rounded-xl"
                        ></img>
                      ))}
                  </div>
              </div>
              <button
                onClick={(e) => handleCarouselClick(e, 'left')}
                className="text-purple-700 text-5xl sm:absolute z-10 -left-6 top-1/2 static self-center"
              >
                <FaArrowAltCircleLeft className="bg-black rounded-full" />
              </button>
              <button
                onClick={(e) => handleCarouselClick(e, 'right')}
                className="text-purple-700 text-5xl sm:absolute z-10 -right-6 top-1/2 static self-center"
              >
                <FaArrowAltCircleRight className="bg-black rounded-full" />
              </button>
              <dir className="h-full w-6 md:w-14 lg:w-36 bg-gradient-to-l from-white absolute right-0 -top-4"></dir>
              <dir className="h-full w-6 md:w-14 lg:w-36  bg-gradient-to-r from-white absolute left-0 -top-4"></dir>
            </div>
        </>
    );
};

export default page;
