'use client';
import { useRef } from 'react';
import { data } from '../../data/data.js';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import Link from 'next/link.js';

const Carousel = () => {
    //await new Promise(resolve=> setTimeout(resolve,8000))
    const carousel = useRef(null);
    const shoes = useRef(null);

    const handleCarouselClick = (e: React.MouseEvent, direction: string) => {
      e.preventDefault();
      if (carousel.current && shoes.current) {
          direction === 'left'
              ? (carousel.current.scrollLeft -= shoes.current.offsetWidth + 24)/* offsetWidth + o gap-x-6 =24px */
              : (carousel.current.scrollLeft += shoes.current.offsetWidth +24);
      }
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
                      className="flex items-center gap-x-6"
                      >
                      {data.map((item) => (
                        <Link href={`/shoes/${item.id}`} className='w-max h-max' key={item.id}>
                          <img
                          src={item.image}
                          alt={item.name}
                          ref={shoes}
                          className="shadow-2xl rounded-xl object-cover"
                        ></img>
                        </Link>
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
              <div className="h-full w-6 md:w-14 lg:w-32 bg-gradient-to-l from-gray-100 absolute right-0 -top-4"></div>
              <div className="h-full w-6 md:w-14 lg:w-32  bg-gradient-to-r from-gray-100 absolute left-0 -top-4"></div>
            </div>
        </>
    );
};

export default Carousel;
