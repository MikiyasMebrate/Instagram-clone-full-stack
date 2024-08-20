"use client";

import { Navbar} from "flowbite-react";
import instagramIcon from "../../assets/image/logo/instagram-text-con.png"

import {FaPlus, FaRegHeart} from "react-icons/fa6"

const Header = () => {
    return (
        <>
            <Navbar className="bg-black" fluid>
                <Navbar.Brand>
                    <img src={instagramIcon} className="mr-3 ms-3 h-9" alt="instagram icon" />
                </Navbar.Brand>
                <div className="flex space-x-6 text-white">
                    <button><FaPlus className="outline outline-offset-2 outline-2 rounded-sm  font-extralight"/></button>
                    <button><FaRegHeart className="rounded-md text-2xl font-extralight me-4"/></button>
                </div>
            </Navbar>
        </>
    )
}

export default Header