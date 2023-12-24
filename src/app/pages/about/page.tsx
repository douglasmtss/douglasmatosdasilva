import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About // Douglas Matos',
    description: 'This page contains some information of author - Douglas Matos da Silva'
}

export default function About(): JSX.Element {
    return (
        <main className="flex flex-col mb-8">
            <div className="bg-blue-500 dark:bg-blue-950 h-28 flex justify-center items-center mb-12">
                <h1 className="text-dmds-1 dark:text-dmds-1 text-4xl font-bold">About</h1>
            </div>
        </main>
    )
}
