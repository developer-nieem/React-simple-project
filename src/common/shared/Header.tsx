import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {

const menu = <>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
</>

const [mNav , setMNav] =  useState(false)

    return (
        <header className="flex justify-between p-6 shadow-lg items-center">
            <div>
                <h2 className="text-xl font-semibold">BootCamp AI</h2>
            </div>

            {/* mobile menu */}
            <div className="xl:hidden">
                <button onClick={() => setMNav(!mNav)} className="xl:hidden bg-blue-600 px-3 text-xl text-white py-2 rounded-md hover:bg-blue-900"><HiOutlineMenuAlt3 /></button>

                <ul className={` ${mNav ? "block" : "hidden"} absolute right-0  top-20 bg-slate-300  p-10 rounded-xl  shadow-xl `  }>
                    {menu}
                </ul>
            </div>
            {/* mobile menu end */}
            <nav className="hidden xl:block">
                <ul className="flex gap-4">
                   {
                    menu
                   }
                </ul>
            </nav>

            <div className="hidden xl:block">
                <button className="bg-blue-600 px-3 text-xl text-white py-2 rounded-md hover:bg-blue-900">Subscribe</button>
            </div>
        </header>
    );
};

export default Header;