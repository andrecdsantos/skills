//ESTE BOTAO NAO ESTA SENDO USADO
import { FaBars, FaRegWindowClose  } from "react-icons/fa";

type ButtonMenuProps = {
  isClicked: boolean
  toggleNav: () => void
}

const ButtonMenu = ( {isClicked, toggleNav} : ButtonMenuProps) => {
  return (
    <button className={`lg:hidden hover:text-teal-200 px-3 text-lg`} onClick={toggleNav}>
        {isClicked ? <FaRegWindowClose/> : <FaBars/>}
    </button>
  )
}

export default ButtonMenu