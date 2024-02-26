import React from 'react'

// import { BsJournalCheck } from 'react-icons/bs';
import { CiLinkedin } from 'react-icons/ci'
import { AiFillYoutube, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
// import { AiFillYoutubeAiOutlineTwitter } from 'react-icons/ai'
import { FaSnapchat } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'


export default function Footer() {
    const { textColor, componentColor } = ThemeContext()
    const year = new Date().getFullYear();

    return (
        <footer style={{ color: textColor, backgroundColor: componentColor }} class="fixed bottom-0 w-full">
            <div class="grid grid-cols-2 mx-auto py-3 sm:mx-auto w-full sm:w-[90%]">
                <div class="col-span-2 sm:col-span-1">
                    <p class="text-center text-lg sm:text-left">&copy; {year}. All rights are reserved.
                    </p>
                </div>
                <div class="col-span-2 sm:col-span-1 mx-auto sm:mx-0 sm:ms-auto">
                    <div className='flex items-center gap-5 text-2xl'>
                        <CiLinkedin className='hover:text-orange-400' />
                        <FaSnapchat className='hover:text-orange-400' />
                        <AiOutlineTwitter className='hover:text-orange-400' />
                        <AiFillGithub className='hover:text-orange-400' />
                        <AiFillYoutube className='hover:text-orange-400' />
                    </div>

                </div>
            </div>

        </footer>
    )
}
