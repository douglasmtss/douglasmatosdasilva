import React from 'react'
import { Metadata } from 'next'
import Paragraph from '@/components/Paragraph'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '#/i18n.config'
import getBaseUrl from '@/lib/baseUrl'
import Form from './Form'

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params
    const {
        page: { contact }
    } = await getDictionary(lang)
    const title = `${contact.title} // Douglas Matos`
    const description = contact.description
    const baseUrl = getBaseUrl()
    const url = `${baseUrl}/${lang}`

    return {
        metadataBase: new URL(url),
        title,
        description,
        openGraph: {
            url,
            title,
            description,
            images: [
                {
                    url: `/images/random.webp`,
                    width: 1220,
                    height: 630,
                    alt: 'Douglas Matos Banner'
                }
            ]
        }
    }
}

export default async function Contact({ params }: { params: Promise<{ lang: Locale }> }): Promise<JSX.Element> {
    const { lang } = await params
    const {
        page: { contact }
    } = await getDictionary(lang)

    return (
        <div className="w-full md:w-6/12 ml-auto mr-auto" title="página de contato">
            <Paragraph>{contact.description}</Paragraph>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight hover:underline" title="titulo envie um email">
                {contact.subtitle}
            </h2>
            <Form lang={lang} />
        </div>
    )
}
