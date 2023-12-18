import { Footer } from '@/components/Footer'
import TopPageContent from '@/components/TopPageContent'

export default function Home(): JSX.Element {
    return (
        <div className="absolute bottom-0 top-0 left-0 right-0 bg-dmds-1 dark:bg-dmds-2 flex flex-col md:px-8 md:pt-8">
            <TopPageContent />
            <header className="flex flex-col items-center py-8 w-max mx-auto">
                <h1 className="font-ranga mt-8 text-5xl text-dmds-2 dark:text-dmds-1 md:text-8xl tracking-tighter mb-8">
                    Douglas Silva
                </h1>
                <span className="font-sans text-base text-dmds-3 dark:text-dmds-5 max-w-[70%] md:w-full text-center md:text-2xl">
                    Father, husband, brother and software developer.
                </span>
            </header>
            <Footer />
        </div>
    )
}
