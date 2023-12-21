import { Logo } from './Logo'
import { MenuAside } from './MenuAside'

export default function Nav(): JSX.Element {
    return (
        <nav className="px-8 pb-8 flex justify-between items-center z-10">
            <Logo />
            <MenuAside />
        </nav>
    )
}
