import { NavLink } from "react-router-dom";
import userPic from "../../assets/image/user/user.jpeg"

type StoryProps = {
    setOpenModal : () => void
}

const Story = ({setOpenModal} : StoryProps) => {
    return (
        <>
            <div className="border-b border-b-slate-700 ">
                <div className="flex ps-6 mt-3 overflow-x-auto gap-6 w-full text-white">

                    <NavLink to="/" className="text-center text-xs" onClick={setOpenModal}>
                        <img src={userPic} className="w-16 h-16 p-0.5 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 rounded-full border flex-shrink-0"></img>
                        <p className="w-16 text-ellipsis overflow-hidden">mikemebrate</p>
                    </NavLink>

                    <NavLink to="/" className="text-center text-xs" onClick={setOpenModal}>
                        <img src={userPic} className="w-16 h-16 p-0.5 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 rounded-full border flex-shrink-0"></img>
                        <p className="w-16 text-ellipsis overflow-hidden">mikemebrate</p>
                    </NavLink>

                    <NavLink to="/" className="text-center text-xs" onClick={setOpenModal}>
                        <img src={userPic} className="w-16 h-16 p-0.5 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 rounded-full border flex-shrink-0"></img>
                        <p className="w-16 text-ellipsis overflow-hidden">mikemebrate</p>
                    </NavLink>

                    <NavLink to="/" className="text-center text-xs" onClick={setOpenModal}>
                        <img src={userPic} className="w-16 h-16 p-0.5 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 rounded-full border flex-shrink-0"></img>
                        <p className="w-16 text-ellipsis overflow-hidden">mikemebrate</p>
                    </NavLink>

                    <NavLink to="/" className="text-center text-xs" onClick={setOpenModal}>
                        <img src={userPic} className="w-16 h-16 p-0.5 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 rounded-full border flex-shrink-0"></img>
                        <p className="w-16 text-ellipsis overflow-hidden">mikemebrate</p>
                    </NavLink>

                    <NavLink to="/" className="text-center text-xs" onClick={setOpenModal}>
                        <img src={userPic} className="w-16 h-16 p-0.5 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 rounded-full border flex-shrink-0"></img>
                        <p className="w-16 text-ellipsis overflow-hidden">mikemebrate</p>
                    </NavLink>

                </div>
            </div>
        </>
    );
};

export default Story;
