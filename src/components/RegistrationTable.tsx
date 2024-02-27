'use client';
import { useState } from 'react';

const RegistrationTable = ({ shoes, onSelect}) => {
    const [query, setQuery] = useState('');
    return (
        <>
            <input 
                type="text"
                value={query}
                onChange={e=>setQuery(e.target.value)} 
                placeholder='Filtrar...' 
                className="h-12 w-full text-xl outline-teal-200 bg-purple-200 text-purple-700 px-4 mb-5" 
            />
            {query}
            <table className="bg-purple-200 w-full mx-4 sm:mx-0 md:text-lg shadow-2xl">
                <thead className="h-16 bg-purple-700 text-teal-200">
                    <tr className="*:border-2 *:border-black">
                        <th>#</th>
                        <th>Produto</th>
                        <th>Descricao</th>
                        <th>Marca</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>
                <tbody>
                    {shoes.map((item, index) => (
                        <tr key={index} className=" *:border *:border-black *:text-center">
                            <td className="">{index + 1}</td>
                            <td className="">{item.title}</td>
                            <td className="">{item.description}</td>
                            <td className="">{item.brand}</td>
                            <td>
                                <button
                                    className="py-4 px-14 text-xl rounded-xl border-2 border-purple-700 bg-teal-200 text-purple-700 hover:bg-green-200 transition-all duration-300 ease-in-out"
                                    onClick={() => onSelect(index)}
                                >
                                    Selecionar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default RegistrationTable;
