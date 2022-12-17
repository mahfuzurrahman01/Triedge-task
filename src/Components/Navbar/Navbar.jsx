import React from 'react';
import logo from '../../assets/logo/1.png'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <img src={logo} alt="logo" className='lg:w-20 w-16 h-12 lg:h-14' />
            </div>

            <div className="navbar-end">

                <div className="dropdown  dropdown-bottom dropdown-end lg:hidden block">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#home">Homepage</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
                <div className='lg:block hidden'>
                    <ul className='flex justify-end gap-x-5'>
                        <li className=' cursor-pointer bg-gray-200 py-1 px-3 hover:bg-primary duration-300 hover:text-white  rounded-xl '>Homepage</li>
                        <li className='cursor-pointer bg-gray-200 py-1 px-3 hover:bg-primary duration-300 hover:text-white  rounded-xl '>Portfolio</li>
                        <li className='cursor-pointer bg-gray-200 py-1 px-3 hover:bg-primary duration-300 hover:text-white  rounded-xl '>About</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;