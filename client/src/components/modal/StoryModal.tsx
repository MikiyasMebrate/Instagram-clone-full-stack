"use client";

import { Modal } from "flowbite-react";
import { FaShareSquare } from "react-icons/fa";
import { FaRegHeart, FaX } from "react-icons/fa6"

import mikeMebrate from "../../assets/image/user/mikemebrateStory.jpg"
import { BsThreeDots, BsX } from "react-icons/bs";

type StoryModalProps = {
    openModal: boolean,
    setOpenModal: () => void
}

const StoryModal = ({ openModal, setOpenModal }: StoryModalProps) => {

    return (
        <>
            <div className="flex  bg-black items-center">
                <Modal size="md" className="backdrop-blur-md " dismissible show={openModal} onClose={setOpenModal}>
                    <div className="bg-black w-full p-5  backdrop-blur-md flex justify-end gap-4">
                        <button><BsThreeDots className="rounded-md text-3xl text-white font-extralight" /></button>
                        <button onClick={setOpenModal}><BsX className="rounded-md text-3xl text-white font-extralight" /></button>
                    </div>
                    <Modal.Body className="bg-black p-0 w-full">
                        <div className="w-full h-[calc(100vh-290px)]">
                            <img className="w-full" src={mikeMebrate} alt="mikeMebrate" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="bg-black p-3 ">
                        <div className="flex  flex-row w-full items-center gap-4">
                            <input type="text" placeholder="Send message" className="w-11/12 bg-black  text-white rounded-2xl" />
                            <div className="w-20 flex justify-center gap-4">
                                <button><FaRegHeart className="rounded-md text-2xl text-white font-extralight" /></button>
                                <button><FaShareSquare className="rounded-md text-2xl text-white font-extralight" /></button>
                            </div>

                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default StoryModal;