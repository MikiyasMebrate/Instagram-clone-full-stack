import { useState } from "react"
import Header from "../components/header/Header"
import Story from "../components/header/Story"
import StoryModal from "../components/modal/StoryModal"
import PostCard from "../components/card/PostCard"


const Home = () => {
    const [openStory, setOpenStory] = useState<boolean>(false)

    const handleOpenStory = () => setOpenStory(!openStory)
    return (
        <>
            <section className="">
                <Header />
                <Story setOpenModal={handleOpenStory} />
                <StoryModal openModal={openStory} setOpenModal={handleOpenStory} />
                <section className="mb-16">
                    <PostCard />
                    <PostCard />
                </section>
            </section>
        </>
    )
}

export default Home