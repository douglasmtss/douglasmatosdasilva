import React from 'react'
import { Mdx } from '@/components/Mdx'
import { Doc, allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { mountSlugParam } from '@/utils/blog/mountSlugParam'
import { Metadata } from 'next'
import { isDevMode } from '@/lib/is-dev-mode'

interface PageProps {
    params: {
        slug: string
    }
}

type GenerateMetadataProps = {
    params: { slug: string }
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
    const doc = await getDocFromParams(params.slug)

    const title = `Post // ${doc.title}`
    const image = doc.image
    const description = doc.description
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

async function getDocFromParams(slug: string): Promise<Doc> {
    const doc = allDocs.find(doc => doc.slugAsParams === slug)

    if (!doc) notFound()

    return doc
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
    const doc = await getDocFromParams(mountSlugParam(params))

    return (
        <div className="mt-6">
            <h1 className="font-bold text-2xl text-dmds-2 dark:text-dmds-1 mb-6">{doc.title}</h1>
            <h2 className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6">{doc.description}</h2>
            <small className="font-semibold text-md text-dmds-4 mb-6">
                {doc.createdAt} - {doc.author}
            </small>
            <Mdx code={doc.body.code} />
        </div>
    )
}
