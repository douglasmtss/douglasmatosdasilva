import { Footer } from '@/components/Footer'
import TopPageContent from '@/components/TopPageContent'

export default function About(): JSX.Element {
    return (
        <div className="bg-dmds-1 dark:bg-dmds-2 h-screen flex flex-col md:px-8 md:pt-8">
            <TopPageContent />
            <main className="flex flex-col mb-8">
                <div className="bg-blue-500 dark:bg-blue-950 h-28 flex justify-center items-center mb-12">
                    <h1 className="text-dmds-1 dark:text-dmds-1 text-4xl font-bold">About</h1>
                </div>
            </main>

            <Footer />
        </div>
    )
}
