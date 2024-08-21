import { FaEdit } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Message = () => {
    return (
        <>
            <section className="flex text-white text-2xl items-center m-3 justify-between">
                <NavLink to="/Instagram-clone-full-stack"> <FaArrowLeft /></NavLink>
                <div><p className=" text-xl font-bold">mikemebrate</p></div>
                <div>
                    <FaEdit />
                </div>
            </section>

            <section className="w-11/12 mx-auto flex justify-between text-white text-base gap-4">
                <NavLink to="/Instagram-clone-full-stack/messages"  className={({isActive}) => `w-full text-center pb-3 ${isActive ? 'border-b' : ''} text-slate-300`}>Primary</NavLink>
                <NavLink to="/Instagram-clone-full-stack/messages/general" className={({isActive}) => `w-full text-center pb-3 ${isActive ? 'border-b' : ''} text-slate-300`}>General</NavLink>
                <NavLink to="/Instagram-clone-full-stack/messages/requests" className={({isActive}) => `w-full text-center pb-3 ${isActive ? 'border-b' : ''} text-slate-300`}>Requests</NavLink>
            </section>

            
        </>
    );
}

export default Message;