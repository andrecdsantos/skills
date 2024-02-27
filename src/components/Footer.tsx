import Link from 'next/link';
//import { permanentMarker } from "@/app/layout";
import { TbBrandAngular } from "react-icons/tb";

const Footer = () => {
    return (
        <div className="text-center py-3 grid gap-y-3 bg-purple-500">
            <Link href={'/'} className="cursor-pointer w-fit mx-auto flex items-center hover:text-teal-200">
                <TbBrandAngular className="text-5xl"/>
                {/* <h1 className={`text-4xl ${permanentMarker.className}`}>Logo</h1> */}
                <h1 className={`text-4xl`}>Logo</h1>
            </Link>
            <p>&copy;Todos os direitos reservados @andrecdsantos0</p>
        </div>
    );
};

export default Footer;
