'use client'
import Link from "next/link";
import { TbBrandAngular } from "react-icons/tb";
import { FaBars, FaRegWindowClose, FaSearch  } from "react-icons/fa";
import { useState } from "react";

export const Header = () => {
    const [isClicked, setIsClicked] = useState(false)
    const toggleNav = () => setIsClicked(!isClicked)
    return (
        <nav className="flex justify-between px-2 py-3 items-center relative bg-purple-500">
            <div className="flex cursor-pointer hover:text-teal-200">
                <TbBrandAngular className="text-5xl"/>
                <h1 className={`text-4xl`}>Logo</h1>
            </div>
            <button className={`lg:hidden hover:text-teal-200 px-3 text-lg`} onClick={toggleNav}>
                {isClicked ? <FaRegWindowClose/> : <FaBars/>}
            </button>
            <div className={`absolute lg:static top-full lg:[transform:rotateY(0deg)]  right-0 p-5 
                w-full lg:w-fit transition-transform duration-500 ease-in-out origin-right bg-purple-500
                ${isClicked ? '[transform:rotateY(0deg)]' : '[transform:rotateY(90deg)]'}`}>
                <div className="gap-3 flex flex-col lg:flex-row w-min text-black text-center text-lg">
                    <Link href={"/"} className="bg-purple-300 hover:bg-teal-200 py-3 px-5 rounded-3xl">Home</Link>
                    <Link href={"/"} className="bg-purple-300 hover:bg-teal-200 py-3 px-5 rounded-3xl">Contato</Link>
                    <Link href={"/"} className="bg-purple-300 hover:bg-teal-200 py-3 px-5 rounded-3xl">Outros</Link>
                </div>
            </div>
            <form className="hidden lg:inline text-xl flex justify-center">
                <input 
                    type="search" 
                    placeholder="buscar..."
                    className="text-black outline-teal-200 me-2 p-2 rounded-md"
                />
                <button className="rounded-full bg-purple-300 hover:bg-teal-200 hover:text-purple-700 p-2">
                    <FaSearch/>
                </button>
            </form>
        </nav>
    );
};

export default Header;
