'use client'
import { hasCookie, setCookie } from 'cookies-next'
import LinkI18n from './LinkI18n'
import { useEffect, useState } from 'react'
import { type Locale } from '#/i18n.config'

const dic = {
    br: {
        p: 'Este site utiliza cookies para melhorar a experiência do usuário. Ao utilizar nosso site você concorda com todos os cookies em',
        link: 'Política de Cookies',
        button: 'Aceitar'
    },
    en: {
        p: 'This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our',
        link: 'Cookie Policy',
        button: 'Accept'
    }
}
const CookieConsent = (): JSX.Element => {
    const [showConsent, setShowConsent] = useState(true)
    const lang = (localStorage.getItem('lang') || 'br') as Locale
    const content = dic[lang]

    useEffect(() => {
        setShowConsent(hasCookie('localConsent'))
    }, [])

    const acceptCookie = (): void => {
        setShowConsent(true)
        setCookie('localConsent', 'true', {})
    }

    if (showConsent) {
        return <></>
    }

    return (
        <div className="fixed bottom-0 left-0 flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-dmds-1 dark:bg-dmds-3">
            <span className="text-dmds-2 dark:text-dmds-5 text-base md:mr-16">
                {content.p}{' '}
                <LinkI18n href="/pages/privacy">
                    <u className="text-blue-500">{content.link}</u>
                </LinkI18n>
                .
            </span>
            <button className="bg-green-500 mt-6 md:mt-0 py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
                {content.button}
            </button>
        </div>
    )
}

export default CookieConsent
