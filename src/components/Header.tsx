'use client'
import Link from "next/link";
import { TbBrandAngular } from "react-icons/tb";
import { FaBars, FaRegWindowClose, FaSearch  } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'

export const Header = () => {
    const pathName = usePathname()
    const router = useRouter()
    const [isClicked, setIsClicked] = useState(false)
    const toggleNav = () => setIsClicked(!isClicked)
    const [query, setQuery] = useState('')

    const searchShoes = (e) => {
        if(query.trim() !== '') {
            e.preventDefault()
            router.push(`/search/${query}`)
        }
    }

    const handleKeyPressed = (e) => {
        if(e.key === 'Enter') searchShoes(e)
    }

    return (
        <nav className="flex justify-between px-2 py-3 items-center relative bg-purple-500">
            <div className="flex cursor-pointer hover:text-teal-200">
                <TbBrandAngular className="text-5xl"/>
                <h1 className={`text-4xl`}>Logo</h1>
            </div>
            <button className={`lg:hidden hover:text-teal-200 px-3 text-lg`} onClick={toggleNav}>
                {isClicked ? <FaRegWindowClose/> : <FaBars/>}
            </button>
            <div className={`absolute lg:static top-full right-0 p-5 w-full lg:w-fit bg-purple-500 z-50
                transition-transform lg:transition-none duration-500 ease-in-out origin-right flex justify-center 
                lg:transform-none ${isClicked ? '[transform:rotateY(0deg)]' : '[transform:rotateY(90deg)]'}`}>
                <div className="gap-3 flex flex-col lg:flex-row w-max text-black text-center text-lg">
                    <Link  href={"/"} className={`${pathName === '/' ? 'bg-teal-200' : 'bg-purple-300'} hover:bg-teal-200 py-3 px-5 rounded-3xl`} onClick={toggleNav}>Home</Link>
                    <Link  href={"/carousel"} className={`${pathName === '/carousel' ? 'bg-teal-200' : 'bg-purple-300'} hover:bg-teal-200 py-3 px-5 rounded-3xl`} onClick={toggleNav}>Carrossel</Link>
                    <Link  href={"/carousel-animated"} className={`${pathName === '/carousel-animated' ? 'bg-teal-200' : 'bg-purple-300'} hover:bg-teal-200 py-3 px-5 rounded-3xl inline lg:hidden`} onClick={toggleNav}>Carrossel Animado</Link>
                    <Link  href={"/registration"} className={`${pathName === '/registration' ? 'bg-teal-200' : 'bg-purple-300'} hover:bg-teal-200 py-3 px-5 rounded-3xl`} onClick={toggleNav}>Cadastrar</Link>
                    <Link  href={"/flip"} className={`${pathName === '/flip' ? 'bg-teal-200' : 'bg-purple-300'} hover:bg-teal-200 py-3 px-5 rounded-3xl inline lg:hidden`} onClick={toggleNav}>Flip</Link>
                </div>
            </div>
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
        </nav>
    );
};

export default Header;
