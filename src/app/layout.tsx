import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/providers/themeProvider'

export const metadata: Metadata = {
    title: 'Douglas Matos',
    description: 'Douglas Matos da Silva'
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html suppressHydrationWarning={true} lang="en">
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
