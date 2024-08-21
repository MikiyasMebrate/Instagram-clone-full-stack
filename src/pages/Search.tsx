
const Search = () => {
    return (
        <>
            <div className="w-11/12 mt-2 mx-auto">
                <input type="text" className=" w-full rounded-md h-8 text-white bg-black" placeholder="Search" />
            </div>

            <section className="mt-2">

                <div className="flex">
                    <div className="w-1/2 flex flex-wrap h-80">
                        <div className="w-1/2 p-2 h-40 border">content 1</div>
                        <div className="w-1/2 p-2 h-40 border">content 2</div>
                        <div className="w-1/2 p-2 h-40 border">content 1</div>
                        <div className="w-1/2 p-2 h-40 border">content 2</div>
                    </div>
                    <div className="w-1/2 p-2 h-80 border">content 3</div>
                </div>

                <div className="flex">
                    <div className="w-1/2 p-2 h-80 border">content 3</div>
                    <div className="w-1/2 flex flex-wrap h-80">
                        <div className="w-1/2 p-2 h-40 border">content 1</div>
                        <div className="w-1/2 p-2 h-40 border">content 2</div>
                        <div className="w-1/2 p-2 h-40 border">content 1</div>
                        <div className="w-1/2 p-2 h-40 border">content 2</div>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/2 flex flex-wrap h-80">
                        <div className="w-1/2 p-2 h-40 border">content 1</div>
                        <div className="w-1/2 p-2 h-40 border">content 2</div>
                        <div className="w-1/2 p-2 h-40 border">content 1</div>
                        <div className="w-1/2 p-2 h-40 border">content 2</div>
                    </div>
                    <div className="w-1/2 p-2 h-80 border">content 3</div>
                </div>

                <div className="flex">
                    <div className="w-1/2 p-2 h-80 border">content 3</div>
                    <div className="w-1/2 flex flex-wrap h-80">
                        <div className="w-1/2 p-2 h-40 border">content 1</div>
                        <div className="w-1/2 p-2 h-40 border">content 2</div>
                        <div className="w-1/2 p-2 h-40 border">content 1</div>
                        <div className="w-1/2 p-2 h-40 border">content 2</div>
                    </div>
                </div>



            </section>
        </>
    );
}

export default Search;