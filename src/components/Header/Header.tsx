'use client'
import { TbBrandAngular } from "react-icons/tb";
import { FaBars, FaRegWindowClose  } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'
import FormSearch from "./FormSearch";
import UserAuthSection from "./UserAuthSection";
import Link from "next/link";

export const Header = () => {
    const pathName = usePathname()
    const router = useRouter()
    const [isClicked, setIsClicked] = useState(false)
    const toggleNav = () => setIsClicked(!isClicked)
    const [query, setQuery] = useState('')
    const links = [
        {
            name: "Home", 
            href: "/",
            submenu: false,
            sublinks: []
        },
        {
            name: "Cadastrar", 
            href: "/registration",
            submenu: false,
            sublinks: []
        },
        {
            name: "Outros", 
            href: "",
            submenu: true,
            sublinks: [
                {
                    name: "Carrossel", 
                    href: "/carousel",
                },
                {
                    name: "Carrossel Animado", 
                    href: "/carousel-animated",
                },
                {
                    name: "Flip", 
                    href: "/flip",
                },
                {
                    name: "Login", 
                    href: "/login",
                },
            ]
        }
    ]

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
            <div className={`absolute lg:static top-full p-5 w-full lg:w-fit bg-purple-500 z-50
                 duration-500 ease-in-out flex justify-center ${isClicked ? 'left-0' : 'left-[-100%]'}`}>
                <div className="gap-3 flex flex-col lg:flex-row w-max text-black text-center text-lg">
                    {
                        links.map(link=>
                                !link.submenu ? <Link href={link.href} className={`${pathName === link.href ? 'bg-teal-200' : 'bg-purple-300'} hover:bg-teal-200 py-3 px-5 rounded-3xl`} onClick={toggleNav} key={link.name}>{link.name}</Link>
                                :
                                <div className={`bg-purple-300 hover:bg-teal-200 py-3 px-5 rounded-3xl cursor-pointer
                                relative *:hidden *:hover:flex`} key={link.name}>
                                    {link.name}
                                    <div className="absolute bg-purple-500 -translate-x-1/2 left-1/2 top-full w-screen lg:w-max p-4 rounded-lg flex justify-center z-40">
                                        <div className="flex flex-col gap-3 w-max">{/* div necessaria p fazer os filhos terem a mesma largura do filho com maior largura */}
                                        {
                                            link.sublinks.map(sublink=>
                                                <Link href={sublink.href} className={`${pathName === sublink.href ? 'bg-teal-200' : 'bg-purple-300'} hover:bg-teal-200 py-3 px-5 rounded-3xl`} onClick={toggleNav} key={sublink.name}>{sublink.name}</Link> 
                                                )
                                        }
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
            <FormSearch query={query} setQuery={setQuery} handleKeyPressed={handleKeyPressed} searchShoes={searchShoes}/>
            {/* <UserAuthSection/> */}
        </nav>
    );
};

export default Header;
