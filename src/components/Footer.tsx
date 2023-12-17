import { contacts } from '@/utils/links'

export const Footer = (): JSX.Element => {
    return (
        <footer className="flex flex-wrap justify-center h-max p-2 mt-auto">
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
        </footer>
    )
}
