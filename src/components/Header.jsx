import React, { useEffect, useState } from 'react'
import logo from "../media/images/checklist_14092844.png";
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
    const { state, setState, textColor, setTextColor, setBackgroundColor, componentColor, setComponentColor, } = ThemeContext()
    const [nav, setNav] = useState(true)

    const toggleMenu = () => {
        if (window.innerWidth < 640) {
            const navLinks = document.querySelector("#navLinks")
            nav ?
                navLinks.style = "display:block"
                :
                navLinks.style = "display:hidden"
            setNav(!nav)
        }
    }

    const toggleTheme = () => {
        if (!state) {
            setBackgroundColor("#333")
            setComponentColor("#555")
            setTextColor("#fff")
            setState(!state)
        } else {
            setComponentColor("#fff")
            setBackgroundColor("#efefef")
            setTextColor("#333")
            setState(!state)
        }
    }
    useEffect(() => {
        toggleTheme()
    }, [])
    return (
        <>
            <header style={{ color: textColor, backgroundColor: componentColor, borderColor: textColor }}
                className='border-b-2 sm:border-0 w-full fixed top-0 h-16'>
                <nav className='py-3 sm:mx-auto w-full sm:w-[90%] flex items-center justify-between'>
                    <div className='ms-6 sm:ms-0'>
                        <span className='text-2xl font-bold cursor-pointer'>
                            <img className='inline h-10 mx-1' src={logo} alt="" />
                            Todos
                        </span>
                    </div>
                    <div id='navLinks' className='absolute top-16 hidden sm:block sm:static w-full sm:w-auto' >
                        <ul style={{ color: textColor, backgroundColor: componentColor }} className='flex flex-col sm:flex-row  sm:items-center'>
                            <li style={{ borderColor: textColor }} onClick={toggleMenu} className='text-lg font-semibold border-b-2 sm:border-0 px-3 py-2 text-center sm:my-0 hover:font-bold hover:text-orange-400 delay-100'><Link to="/">Home</Link></li>
                            <li style={{ borderColor: textColor }} onClick={toggleMenu} className='text-lg font-semibold border-b-2 sm:border-0 px-3 py-2 text-center sm:my-0 hover:font-bold hover:text-orange-400 delay-100'><Link to="/mytodos">My Todos</Link></li>
                            <li style={{ borderColor: textColor }} onClick={toggleMenu} className='text-lg font-semibold border-b-2 sm:border-0 px-3 py-2 text-center sm:my-0 hover:font-bold hover:text-orange-400 delay-100'><Link to="/addtodos">Add Todo</Link></li>
                            {/* <li style={{ borderColor: textColor }} onClick={toggleMenu} className='text-lg font-semibold border-b-2 sm:border-0 px-3 py-2 text-center sm:my-0 hover:font-bold hover:text-orange-400 delay-100'><Link to="/edittodos">Edit Todo</Link></li> */}
                        </ul>
                    </div>
                    <div className='flex gap-2 me-3'>
                        <button type="button" class="font-semibold rounded-lg text-2xl px-3 py-2 hover:font-bold delay-100" onClick={toggleTheme}>
                            {state ? <MdLightMode /> : <MdDarkMode />}
                        </button>
                        <button className='text-2xl block sm:hidden' onClick={toggleMenu}>
                            {nav ? <AiOutlineMenu /> : <IoIosClose />}
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}
