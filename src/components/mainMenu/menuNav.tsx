import { useGithubApi } from '@/hooks/useGihubApi'
import Link from 'next/link'
import React from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

export interface MenuNavProps {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuNav = ({ darkMode, setDarkMode }: MenuNavProps) => {
    const { data, loading } = useGithubApi()
    return (
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">
                <Link href="/">{data.login}</Link>
            </h1>
            <ul className="flex items-center">
                <li
                    title={`Change theme to ${darkMode ? "light mode" : "dark mode"
                        }`}
                >
                    {darkMode ? (
                        <BsFillSunFill
                            onClick={() => setDarkMode(!darkMode)}
                            className=" cursor-pointer text-2xl text-yellow-500"
                        />
                    ) : (
                        <BsFillMoonStarsFill
                            onClick={() => setDarkMode(!darkMode)}
                            className=" cursor-pointer text-2xl"
                        />
                    )}
                </li>
            </ul>
        </nav>
    )
}