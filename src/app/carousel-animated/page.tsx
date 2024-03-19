'use client';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useRef } from 'react';
import { data } from '../../data/data.js';

const CarouselAnimated = () => {
    const carousel = useRef<HTMLDivElement>(null);
    const shoes = useRef<HTMLImageElement>(null);
    const duplicatedData = [...data,...data]

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

            <div className='overflow-hidden relative' ref={carousel}>
              <div className="z-50 h-full w-6 lg:w-12 bg-gradient-to-r from-gray-100 from-20% absolute left-0 top-0"></div>
              <div className="z-50 h-full w-6 lg:w-12 bg-gradient-to-l from-gray-100 from-20% absolute right-0 top-0"></div>          
              <div className="my-8 bg-purple-200 flex  py-6 w-max -translate-x-1/2 "> 
                <div className=" flex *:mx-4 animate-infinito hover:[animation-play-state:paused]">
                            {duplicatedData.map(item=>
                              <img 
                              key={item.id} 
                              src={item.image}
                              ref={shoes}
                              className='shadow-xl rounded-lg cursor-pointer hover:[transform:scale(1.05)]'
                              />     
                              )}
                </div>  
              </div>
            </div>    

            <div className='overflow-hidden relative'>
              <div className="z-50 h-full w-6 lg:w-12 bg-gradient-to-r from-gray-100 from-20% absolute left-0 top-0"></div>
              <div className="z-50 h-full w-6 lg:w-12 bg-gradient-to-l from-gray-100 from-20% absolute right-0 top-0"></div>   
              <div className="my-8 bg-purple-200 flex  py-6 w-max relative -translate-x-1/2">
                <div className=" flex *:mx-4 animate-infinitoReverse hover:[animation-play-state:paused]">
                            {duplicatedData.map(item=>
                              <img 
                                key={item.id} 
                                src={item.image}
                                className='shadow-xl rounded-lg cursor-pointer hover:[transform:scale(1.05)]'
                                />     
                            )}
                </div>            
              </div>
            </div>

        {/* 

            <button
                onClick={(e) => handleCarouselClick(e, 'left')}
                className="text-purple-700 text-5xl sm:absolute z-10 -left-0 top-1/2 static self-center"
              >
                <FaArrowAltCircleLeft className="fa-solid fa-circle-left bg-black rounded-full"/>
              </button>
              <button
                onClick={(e) => handleCarouselClick(e, 'right')}
                className="text-purple-700 text-5xl sm:absolute z-10 -right-0 top-1/2 static self-center"
              >
                <FaArrowAltCircleRight className="fa-solid fa-circle-right bg-black rounded-full"/>
              </button>

            
         
         <div className='overflow-hidden mb-12'>
              <div className="my-8 bg-yellow-200 flex  py-4 w-max *:hover:[animation-play-state:paused] -translate-x-1/2">
                <div className=" flex *:mx-4 animate-infinito">
                            <img src={data[1].image} className=""/>
                            <img src={data[2].image} className=""/>
                            <img src={data[3].image} className=""/>
                            <img src={data[4].image} className=""/>
                            <img src={data[5].image} className=""/>
                            <img src={data[6].image} className=""/>
                            <img src={data[7].image} className=""/>
                            <img src={data[9].image} className=""/>
                            <img src={data[8].image} className=""/>
                </div>            
                <div className=" flex *:mx-4 animate-infinito" >
                            <img src={data[1].image} className=""/>
                            <img src={data[2].image} className=""/>
                            <img src={data[3].image} className=""/>
                            <img src={data[4].image} className=""/>
                            <img src={data[5].image} className=""/>
                            <img src={data[6].image} className=""/>
                            <img src={data[7].image} className=""/>
                            <img src={data[9].image} className=""/>
                            <img src={data[8].image} className=""/>
                </div>            
              </div>
            </div>
         
         
         
         <div className='overflow-hidden'>
              <div className="my-8 bg-yellow-200 flex  py-4 w-max *:hover:[animation-play-state:paused]">
                <div className=" flex animate-infinito *:mx-4">
                            <img src={data[1].image} className=""/>
                            <img src={data[2].image} className=""/>
                            <img src={data[3].image} className=""/>
                            <img src={data[4].image} className=""/>
                            <img src={data[5].image} className=""/>
                            <img src={data[6].image} className=""/>
                            <img src={data[7].image} className=""/>
                            <img src={data[9].image} className=""/>
                            <img src={data[8].image} className=""/>
                </div>            
                <div className=" flex animate-infinito *:mx-4">
                            <img src={data[1].image} className=""/>
                            <img src={data[2].image} className=""/>
                            <img src={data[3].image} className=""/>
                            <img src={data[4].image} className=""/>
                            <img src={data[5].image} className=""/>
                            <img src={data[6].image} className=""/>
                            <img src={data[7].image} className=""/>
                            <img src={data[9].image} className=""/>
                            <img src={data[8].image} className=""/>
                </div>            
              </div>
            </div> */}
        </>
    );
};



export default CarouselAnimated;
