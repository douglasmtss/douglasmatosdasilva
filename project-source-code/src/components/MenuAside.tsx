'use client'
import { useState } from "react";
import { Menu } from "./Menu";

export const MenuAside = (): JSX.Element => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Menu.MenuContent open={open} />

            <div className="realative md:hidden">
                {open
                    ? <Menu.IconCross onClick={() => setOpen(!open)} />
                    : <Menu.IconHamburger onClick={() => setOpen(!open)} />
                }
            </div>
        </>
    )
}