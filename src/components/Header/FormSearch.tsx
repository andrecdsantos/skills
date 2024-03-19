'use client'

import { KeyboardEvent, MouseEvent, SetStateAction } from "react";
import { FaSearch } from "react-icons/fa"

type FormProps = {
    handleKeyPressed: (e: KeyboardEvent<HTMLInputElement>) => void;
    //handleKeyPressed: (e: KeyboardEvent<Document> | KeyboardEvent<HTMLInputElement>) => void;
    searchShoes: (e: MouseEvent<HTMLButtonElement>) => void;
    query: string;
    setQuery: React.Dispatch<SetStateAction<string>>
}

const FormSearch = ( {query, setQuery, handleKeyPressed, searchShoes}: FormProps ) => {
  return (
    <form className="hidden lg:inline text-xl justify-center">
                <input 
                    type="search" 
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    onKeyDown={e=>handleKeyPressed(e)}
                    placeholder="buscar..."
                    className="text-black outline-teal-200 me-2 p-2 rounded-md"
                />
                <button 
                    onClick={(e) => searchShoes(e)}
                    className="rounded-full bg-purple-300 hover:bg-teal-200 hover:text-purple-700 p-2"
                >
                    <FaSearch/>
                </button>
            </form>
  )
}

export default FormSearch