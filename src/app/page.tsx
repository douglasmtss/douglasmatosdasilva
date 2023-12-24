import WrapperPage from '@/components/WrapperPage'
import Script from 'next/script'

export default function Home(): JSX.Element {
    return (
        <WrapperPage>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-8J47CXLFL2"></Script>
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-8J47CXLFL2');
                `}
            </Script>
            <header className="flex flex-col items-center py-8 w-max mx-auto">
                <h1 className="font-ranga mt-8 text-5xl text-dmds-2 dark:text-dmds-1 md:text-8xl tracking-tighter mb-8">
                    Douglas Silva
                </h1>
                <span className="font-sans text-base text-dmds-3 dark:text-dmds-5 max-w-[70%] md:w-full text-center md:text-2xl">
                    Father, husband, brother and software developer.
                </span>
            </header>
        </WrapperPage>
    )
}
