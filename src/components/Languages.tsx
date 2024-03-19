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

const Languages = ({ urlLanguage } : {urlLanguage: string}) => {
    const [languages, setLanguages] = useState<string[]>([]);
    useEffect(() => {
        const getLanguages = async () => {
            try {
              const response = await fetch(urlLanguage);
              const data = await response.json();
              setLanguages(Object.keys(data));
            } catch (error) {
              console.error('Erro ao buscar linguagens',error)
            }
        };
        getLanguages();
    }, []);

    const renderIcon = (language: string) => {
      if (language.toUpperCase().includes('CSS')) {
          return <SiCss3 className="text-blue-600" />;
      } else if (language.toUpperCase().includes('SCSS')) {
          return <BsFiletypeScss className="text-pink-600" />;
      } else if (language.toUpperCase().includes('TAILWIND')) {
          return <SiTailwindcss className="text-blue-400" />;
      } else if (language.toUpperCase().includes('JAVASCRIPT')) {
          return <SiJavascript className="text-yellow-400 bg-black" />;
      } else if (language.toUpperCase().includes('TYPESCRIPT')) {
          return <SiTypescript className="text-blue-600" />;
      } else if (language.toUpperCase().includes('HTML')) {
          return <SiHtml5 className="text-orange-600" />;
      }
      return null;
  };


    return (
        <>
            <div>
                <b>Linguagens: </b>
                {languages.map((item, index) => (
                    <span key={index}>{item}
                    {index !== languages.length - 1 && ', '} 
                    {index === languages.length - 1 && '. '}
                    </span>//virgula em tds obj do array exeto o ultimo cfor vdd qo index atual é diferente da ultima posicao do array
                ))}
            </div>
            <div className="flex pt-4 gap-x-2 text-4xl text-center justify-center">
              {languages.map((item, index) => (
                    <div key={index} className='flex'>
                   {/*  {item.toUpperCase().includes('CSS') ? <SiCss3 className="text-blue-600" /> : null} */}
                    {renderIcon(item)}
                  </div>
                ))}
            </div>
        </>
    );
};

export default Languages;
