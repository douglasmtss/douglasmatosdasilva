import { contacts } from '@/utils/links'
import Link from 'next/link'

export const Footer = (): JSX.Element => {
    return (
        <footer className="flex flex-col items-center h-max px-2 pt-8 pb-8 mt-auto">
            <div>&copy; 2023-{new Date().getFullYear()} Douglas Matos. All Rights Reserved</div>
            <div className="flex flex-wrap justify-center">
                {contacts.map(link => (
                    <a
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        className="py-1 px-4 md:p-8 text-dmds-3 dark:text-dmds-5 hover:underline cursor-pointer"
                        rel="noreferrer"
                    >
                        {link.title}
                    </a>
                ))}
            </div>
            <div className="text-dmds-3 dark:text-dmds-5 hover:underline">
                <Link href="/pages/privacy">Privacy</Link>
            </div>
        </footer>
    )
}
