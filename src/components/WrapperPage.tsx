import React from 'react'
import { Footer } from './Footer'
import TopPageContent from './TopPageContent'

interface WrapperPageProps {
    children: React.ReactNode
}
export default function WrapperPage({ children }: WrapperPageProps): JSX.Element {
    return (
        <main className="w-full bg-dmds-1 dark:bg-dmds-2 flex flex-col flex-1 md:px-8 md:pt-8">
            <TopPageContent />
            <section className="w-11/12 md:w-full max-w-[800px] flex-1 h-full ml-auto mr-auto">{children}</section>
            <Footer />
        </main>
    )
}
