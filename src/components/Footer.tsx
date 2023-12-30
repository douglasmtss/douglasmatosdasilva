import Link from 'next/link'
import SocialMedias from './SocialMedias'

export const Footer = (): JSX.Element => {
    return (
        <footer className="flex flex-col items-center h-max px-2 pt-8 pb-8 mt-auto">
            <p className="text-sm md:text-xl">
                &copy; 2023-{new Date().getFullYear()} Douglas Matos. All Rights Reserved
            </p>
            <div className="w-full md:max-w-[45%] my-6">
                <SocialMedias />
            </div>
            <div className="text-dmds-3 dark:text-dmds-5 hover:underline">
                <Link href="/pages/privacy">Política e Privacidade</Link>
            </div>
        </footer>
    )
}
