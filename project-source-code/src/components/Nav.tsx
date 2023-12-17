import { Logo } from "./Logo";
import { Menu } from "./Menu";

export default function Nav() {
    return (
        <nav className='px-8 pb-8 flex justify-between items-center'>
            <Logo />
            <Menu.MenuAside />
        </nav>
    )
}