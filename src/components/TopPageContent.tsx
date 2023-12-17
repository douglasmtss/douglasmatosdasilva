import Nav from './Nav'
import { TogggleTheme } from './ToggleTheme'

export default function TopPageContent(): JSX.Element {
    return (
        <>
            <div className="flex justify-end px-8 py-4">
                <TogggleTheme />
            </div>
            <Nav />
        </>
    )
}
