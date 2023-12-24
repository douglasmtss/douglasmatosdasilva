import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/providers/themeProvider'
import { IsClientCtxProvider } from '@/hooks/useIsClient'
import { isDevMode } from '@/lib/is-dev-mode'

const url = isDevMode() ? 'http://localhost:3000' : 'https://douglasmatosdasilva.com.br'

export const metadata: Metadata = {
    metadataBase: new URL(url),
    title: 'Home Page // Douglas Matos da Silva',
    description: 'Douglas Matos da Silva',
    openGraph: {
        url,
        title: 'Home Page // Douglas Matos da Silva',
        description:
            'This is my personal website, where i have one blog with any articles, tutors, challenges e more. Douglas Matos da Silva',
        images: '/images/opengraph-image.png'
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html suppressHydrationWarning={true} lang="en">
            <body>
                <IsClientCtxProvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        {children}
                    </ThemeProvider>
                </IsClientCtxProvider>
            </body>
        </html>
    )
}
