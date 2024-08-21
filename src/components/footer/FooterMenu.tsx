import { Footer } from "flowbite-react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { TfiVideoClapper } from "react-icons/tfi";
import mike from "../../assets/image/user/user.jpeg"
import { NavLink } from "react-router-dom";


const FooterMenu = () => {
    return (
        <>
            <Footer className="bg-black h-12 flex items-center rounded-none text-slate-200 fixed bottom-0 left-0 right-0 md:w-1/4" container>
                <div className="flex justify-between items-center gap-5 w-full text-2xl">
                    <NavLink to="/"> <HiHome /></NavLink>
                    <NavLink to="/search"><FaSearch /></NavLink>
                    <div> <TfiVideoClapper /></div>
                    <NavLink to="/messages"> <AiOutlineMessage /></NavLink>
                    <div>
                        <img className="w-7 rounded-full" src={mike} alt="mike" />
                    </div>
                </div>
            </Footer>
        </>
    );
}

export default FooterMenu;