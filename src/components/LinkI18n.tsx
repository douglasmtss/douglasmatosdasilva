'use client'

import { type Locale } from '#/i18n.config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type LinkI18nProps = {
    ref?: React.Ref<HTMLAnchorElement> | undefined
    href: string
    children: React.ReactNode
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export default function LinkI18n(props: LinkI18nProps): JSX.Element {
    const { children, href } = props
    const pathName = usePathname()
    const currentLang = pathName?.split('/')[1] as Locale

    const redirectedPathName = (locale: Locale): string => {
        if (!pathName) return '/'

        return `/${locale}${href}`
    }

    return (
        <Link {...props} href={redirectedPathName(currentLang)}>
            {children}
        </Link>
    )
}
