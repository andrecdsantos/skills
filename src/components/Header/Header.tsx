'use client'
import { TbBrandAngular } from "react-icons/tb";
import { FaBars, FaRegWindowClose  } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'
import FormSearch from "./FormSearch";
import ActiveLink from "./ActiveLink";
import UserAuthSection from "./UserAuthSection";

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
                    <ActiveLink href={"/"} pathName={pathName} toggleNav={toggleNav} hidden={""}>Home</ActiveLink>
                    <ActiveLink href={"/carousel"} pathName={pathName} toggleNav={toggleNav} hidden={""}>Carrossel</ActiveLink>
                    <ActiveLink href={"/carousel-animated"} pathName={pathName} toggleNav={toggleNav} hidden={"inline lg:hidden"}>Carrossel Animado</ActiveLink>
                    <ActiveLink href={"/registration"} pathName={pathName} toggleNav={toggleNav} hidden={""}>Cadastrar</ActiveLink>
                    <ActiveLink href={"/flip"} pathName={pathName} toggleNav={toggleNav} hidden={"inline lg:hidden"}>Flip</ActiveLink>
                    <ActiveLink href={"/login"} pathName={pathName} toggleNav={toggleNav} hidden={"inline lg:hidden"}>Login</ActiveLink>
                </div>
            </div>
            <FormSearch query={query} setQuery={setQuery} handleKeyPressed={handleKeyPressed} searchShoes={searchShoes}/>
            {/* <UserAuthSection/> */}
        </nav>
    );
};

export default Header;
