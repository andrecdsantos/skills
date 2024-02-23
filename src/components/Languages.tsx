'use client';
import { useEffect, useState } from 'react';
import { BsFiletypeScss } from 'react-icons/bs';
import {
    SiCss3,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiHtml5,
} from 'react-icons/si';

const Languages = ({ urlLanguage }) => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        const getLanguages = async () => {
            const response = await fetch(urlLanguage);
            const data = await response.json();
            setLanguages(Object.keys(data));
        };
        getLanguages();
    }, []);
    return (
        <>
            <div>
                <b>Linguagens: </b>
                {languages.map((item, index) => (
                    <span key={index}>{item} </span>
                ))}
            </div>
            <div className="flex pt-4 gap-x-2 text-4xl text-center justify-center">
              {languages.map((item, index) => (
                    <div key={index} className='flex'>
                    {item.toUpperCase().includes('CSS') ? <SiCss3 className="text-blue-600" /> : null}
                    {item.toUpperCase().includes('SCSS') ? <BsFiletypeScss className="text-pink-600" /> : null}
                    {item.toUpperCase().includes('TAILWIND') ? <SiTailwindcss className="text-blue-400" /> : null}
                    {item.toUpperCase().includes('JAVASCRIPT') ? <SiJavascript className="text-yellow-400 bg-black" /> : null}
                    {item.toUpperCase().includes('TYPESCRIPT') ? <SiTypescript className="text-blue-600" /> : null}
                    {item.toUpperCase().includes('HTML') ? <SiHtml5 className="text-orange-600" /> : null}
                  </div>
                ))}
            </div>
        </>
    );
};

export default Languages;
