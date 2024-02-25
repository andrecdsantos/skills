'use client'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollTopButton = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <button 
        className="h-10 w-10 p-2 fixed bottom-4 right-4 hidden lg:flex justify-center items-center 
        text-2xl bg-purple-200 rounded-full"
        onClick={scrollTop}
    >
        <MdKeyboardDoubleArrowUp />
    </button>
  )
}

export default ScrollTopButton