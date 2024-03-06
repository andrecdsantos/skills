
import { FaBars, FaRegWindowClose  } from "react-icons/fa";

const ButtonMenu = ( {isClicked, toggleNav}) => {
  return (
    <button className={`lg:hidden hover:text-teal-200 px-3 text-lg`} onClick={toggleNav}>
        {isClicked ? <FaRegWindowClose/> : <FaBars/>}
    </button>
  )
}

export default ButtonMenu