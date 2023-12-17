'use client'
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export const TogggleTheme = (): JSX.Element => {
    const [darkMode, setDarkMode] = useState(true)

    function handleClick() {
        if (!("theme" in localStorage)) {
            document.documentElement.classList.remove("dark");
        } else if (localStorage.theme === "dark" || !("theme" in localStorage)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        if (localStorage.theme === "dark") {
            localStorage.theme = "light";
            setDarkMode(true)
        } else {
            localStorage.theme = "dark";
            setDarkMode(false)
        }
    }

    return (
        <div className="flex items-center" title={`Change theme to ${darkMode ? "light mode" : "dark mode"
            }`}>
            {darkMode ? (
                <BsFillSunFill
                    onClick={handleClick}
                    className="z-[999] cursor-pointer text-2xl text-yellow-500"
                />
            ) : (
                <BsFillMoonStarsFill
                    onClick={handleClick}
                    className="z-[999] cursor-pointer text-2xl text-blue-800"
                />
            )}
        </div>
    )
}