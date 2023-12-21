import dynamic from 'next/dynamic'
import Nav from './Nav'
import LoadIcon from './LoadIcon'

const TogggleTheme = dynamic(() => import('./ToggleTheme'), {
    loading: () => <LoadIcon />,
    ssr: false
})

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
