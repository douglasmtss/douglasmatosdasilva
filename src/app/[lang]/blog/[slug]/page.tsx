import React from 'react'
import { Mdx } from '@/components/Mdx'
import { Doc, allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { mountSlugParam } from '@/utils/blog/mountSlugParam'
import { Metadata } from 'next'
import stripHtml from '@/lib/strip-html'
import BlogDate from '@/components/BlogDate'
import getBaseUrl from '@/lib/baseUrl'
import { Locale } from '#/i18n.config'

interface PageProps {
    params: Promise<{
        lang: Locale
        slug: string
    }>
}

type GenerateMetadataProps = {
    params: Promise<{ slug: string; lang: Locale }>
}

const getCachedDocFromParams = async (slug: string): Promise<Doc> => {
    const doc = await getDocFromParams(slug)

    return doc
}

export async function generateStaticParams(): Promise<{ lang: string; slug: string }[]> {
    return allDocs.map(doc => {
        const [lang, ...slugParts] = doc.slugAsParams.split('/')

        return { lang, slug: slugParts.join('/') }
    })
}

async function getDocFromParams(slug: string): Promise<Doc> {
    const doc = allDocs.find(doc => doc.slugAsParams === slug)

    if (!doc) notFound()

    return doc
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
    const { lang, slug } = await params
    const doc = await getCachedDocFromParams(`${lang}/${slug}`)

    const title = `Post // ${doc.title}`
    const description = stripHtml(doc.description ?? '').replaceAll('**', '')
    const url = getBaseUrl() + '/' + lang

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
                    url: doc.image,
                    width: 1220,
                    height: 630,
                    alt: 'Douglas Matos Banner'
                }
            ]
        }
    }
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
    const resolvedParams = await params
    const doc = await getCachedDocFromParams(mountSlugParam(resolvedParams))

    const description = stripHtml(doc.description ?? '').replaceAll('**', '')

    return (
        <div className="mt-6">
            <h1 className="font-bold text-2xl text-dmds-2 dark:text-dmds-1 mb-6">{doc.title}</h1>
            <h2
                className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6"
            >
                {description}
            </h2>
            <small className="font-semibold text-md text-dmds-4 mb-6">
                <BlogDate dateString={doc.createdAt} /> - {doc.author}
            </small>
            <Mdx code={doc.body.code} />
        </div>
    )
}
