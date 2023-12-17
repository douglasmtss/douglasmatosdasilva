import TopPageContent from "@/components/TopPageContent"

export default function About() {
    return (
        <div className='bg-dmds-1 dark:bg-dmds-2 h-screen flex flex-col md:px-8 md:pt-8'>
            <TopPageContent />
            <main>
                <h1 className="dark:text-white">About</h1>
            </main>
        </div>
    )
}