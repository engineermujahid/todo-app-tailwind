import React from 'react'
import { useNavigate } from 'react-router-dom'
import IMG from "../media/images/heroImg.png"
import { ThemeContext } from '../context/ThemeContext'

export default function Home() {
    const navigate = useNavigate()
    const { textColor, backgroundColor } = ThemeContext()
    const navigateToTodos = () => navigate('/mytodos')

    return (
        <>
            <div style={{ color: textColor, backgroundColor: backgroundColor }} className="min-h-screen flex justify-center items-center">
                <div className='grid grid-cols-2 gap-10 mx-10 my-24 border-3 border-red-600 max-w-[450px] md:max-w-[680px] lg:max-w-[900px]'>
                    <div className="col-span-2 md:col-span-1 flex flex-col justify-center">
                        <p className='mb-4 text-lg text-justify mx-4'>
                            Streamline your tasks and enhance productivity with our intuitive platform.
                            Whether you're managing personal tasks and projects or collaborating with a team,
                            this website empowers you to effortlessly create, prioritize,
                            and track your tasks.
                            Embrace efficiency and stay on top of your goals with us.</p>
                        <div className='text-center'>
                            <button className='bg-transparent hover:bg-cyan-500 text-cyan-500 font-bold
                             hover:text-white py-2 px-4 border-2 border-cyan-500 hover:border-transparent rounded'
                                onClick={navigateToTodos}
                            >
                                See Tasks
                            </button>
                        </div>
                    </div>
                    <div className=" col-span-2 md:col-span-1" >
                        <img src={IMG} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
