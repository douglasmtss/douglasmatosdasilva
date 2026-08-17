import Nav from './Nav'
import { Locale } from '#/i18n.config'
import TogggleTheme from './ToggleTheme'
import ToggleLanguage from './ToggleLanguage'

interface TopPageContentProps {
    lang: Locale
}

export default function TopPageContent({ lang }: TopPageContentProps): JSX.Element {
    return (
        <>
            <div className="flex justify-end px-8 py-4">
                <ToggleLanguage lang={lang} />
                <TogggleTheme />
            </div>
            <Nav />
        </>
    )
}
