import React from 'react'
import { Mdx } from '@/components/Mdx'
import { Doc, allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { mountSlugParam } from '@/utils/blog/mountSlugParam'
import { Metadata } from 'next'
import { isDevMode } from '@/lib/is-dev-mode'
import stripHtml from '@/lib/strip-html'
import mdToHtml from '@/lib/mdToHtml'
import BlogDate from '@/components/BlogDate'

interface PageProps {
    params: {
        slug: string
    }
}

type GenerateMetadataProps = {
    params: { slug: string }
}

const getCachedDocFromParams = async (slug: string): Promise<Doc> => {
    const doc = await getDocFromParams(slug)

    return doc
}

export async function generateStaticParams(): Promise<string[]> {
    return allDocs.map(doc => doc.slugAsParams) // .slice(0, 10) // precache on first 10 posts
}

async function getDocFromParams(slug: string): Promise<Doc> {
    const doc = allDocs.find(doc => doc.slugAsParams === slug)

    if (!doc) notFound()

    return doc
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
    const doc = await getCachedDocFromParams(params.slug)

    const title = `Post // ${doc.title}`
    const image = doc.image
    const description = stripHtml(doc.description ?? '').replaceAll('**', '')
    const url = isDevMode() ? 'http://localhost:3000' : 'https://douglasmatosdasilva.com.br'

    return {
        metadataBase: new URL(url),
        title,
        description,
        openGraph: {
            url,
            title,
            description,
            images: `${url}${image}`
        }
    }
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
    const doc = await getCachedDocFromParams(mountSlugParam(params))

    const description = await mdToHtml(doc.description ?? '')

    return (
        <div className="mt-6">
            <h1 className="font-bold text-2xl text-dmds-2 dark:text-dmds-1 mb-6">{doc.title}</h1>
            <h2
                className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6"
                dangerouslySetInnerHTML={{ __html: description }}
            />
            <small className="font-semibold text-md text-dmds-4 mb-6">
                <BlogDate dateString={doc.createdAt} /> - {doc.author}
            </small>
            <Mdx code={doc.body.code} />
        </div>
    )
}
