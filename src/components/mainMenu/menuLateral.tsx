import React from 'react'
import { RxHome } from 'react-icons/rx'
import { AiOutlineMail } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { TiInfoOutline } from 'react-icons/ti'
import { SiPowerpages } from 'react-icons/si'
import { FaTimes } from 'react-icons/fa'

export interface MenuAsideProps {
    isOpen: boolean
    onClick: () => void
}

export const MenuLateral = ({ isOpen, onClick }: MenuAsideProps) => {

    return (
        <div className={`z-10 w-[80vw] h-full p-4 bg-slate-900 transition-all duration-500 absolute ${isOpen ? 'left-0' : '-left-[100%]'} top-0`}>
            <div className='pt-2 pb-2 pr-4 flex justify-between'>
                <h3 className='text-white'>douglasmatosdev</h3>
                <FaTimes onClick={onClick} className='text-white' />
            </div>
            <ul className='list-none w-full flex flex-col'>
                <li className='w-full pt-2 pb-2 cursor-pointer'>
                    <div className='w-[min-content] flex justify-center items-center'>
                        <RxHome className='text-white' />
                        <span className='text-white ml-2'>Home</span>
                    </div>
                </li>
                <li className='w-full pt-2 pb-2 cursor-pointer'>
                    <div className='w-[min-content] flex justify-center items-center'>
                        <SiPowerpages className='text-white' />
                        <span className='text-white ml-2'>portifolio</span>
                    </div>
                </li>
                <li className='w-full pt-2 pb-2 cursor-pointer'>
                    <div className='w-[min-content] flex justify-center items-center'>
                        <TiInfoOutline className='text-white' />
                        <span className='text-white ml-2'>sobre</span>
                    </div>
                </li>
                <li className='w-full pt-2 pb-2 cursor-pointer'>
                    <div className='w-[min-content] flex justify-center items-center'>
                        <AiOutlineMail className='text-white' />
                        <span className='text-white ml-2'>contato</span>
                    </div>
                </li>
                <li className='w-full pt-2 pb-2 cursor-pointer'>
                    <div className='w-[min-content] flex justify-center items-center'>
                        <CgWebsite className='text-white' />
                        <span className='text-white ml-2'>blog</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}