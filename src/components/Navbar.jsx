import { Link, Outlet } from "react-router-dom"
import Card from "./Card"

function Navbar() {
  return (
    <div className="grid grid-cols-3">
        <div className=" text-4xl font-link text-gray-300 mt-20 ml-20 row-span-3">
            <div className='transition ease-in-out py-5 px-10 hover:text-purple-500'>
            <Link to="/singleplayer">SINGLEPLAYER</Link>
            </div>
            <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>
            <Link to="/singleplayer">MULTIPLAYER</Link>
            </div>
            <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>
            <Link to="/singleplayer">CLASSIC MAPS</Link>
            </div>
            <hr className="w-80 border-1 py-3"/>
            <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>QUIZZ</div>
            <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>PROFILE</div>
        </div>
        <Outlet/>
        <div className="font-link text-white text-4xl mt-20 mb-5">SINGLE PLAYER</div>
        <div className="flex text-red-400 row-span-3 col-span-2 ">
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Navbar