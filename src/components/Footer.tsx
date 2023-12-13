import { contacts } from '@/utils/links'
export const Footer = (): JSX.Element => {

    return (
        <footer className='flex flex-wrap justify-center h-max p-2'>
            {contacts.map(link => (
                <a 
                    key={link.title}
                    href={link.url}
                    className='py-1 px-4 md:p-8 text-dmds-3 dark:text-dmds-5'
                    target='_blank'
                >
                    {link.title}
                </a>
            ))}
        </footer>
    )
}