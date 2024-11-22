import Navbar from "./components/Navbar"

function App() {
    return (
        <main className="max-w-[430px] mx-auto my-4">
            <Navbar />
            <div className="flex gap-3 items-center justify-between m-4">
                <div className="flex-1 flex items-center gap-2 bg-[#323334] text-white rounded-lg border p-2">
                    <img src="../public/searchIcon.svg" alt="search icon" />
                    <input type="text" className="flex-1 rounded outline-none bg-transparent placeholder:text-white " placeholder="Search Contact" />
                </div>
                <div className="h-[50px] w-[50px] rounded-[50%] bg-white flex justify-center items-center cursor-pointer">
                    <img src="../public/addIcon.svg" alt="" />
                </div>

            </div>
        </main>
    )
}

export default App
