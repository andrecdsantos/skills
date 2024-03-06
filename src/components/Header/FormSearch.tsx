'use client'

import { FaSearch } from "react-icons/fa"

const FormSearch = ( {query, setQuery, handleKeyPressed, searchShoes} ) => {
  return (
    <form className="hidden lg:inline text-xl flex justify-center">
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