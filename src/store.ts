import { atom } from "jotai"

export type MenuNav = {
    isOpen: boolean
}


export const menuNav = atom<MenuNav>({ isOpen: false })