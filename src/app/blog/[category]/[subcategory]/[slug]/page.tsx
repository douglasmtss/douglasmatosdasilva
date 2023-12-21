import React from 'react'
import { Mdx } from '@/components/Mdx'
import { Doc, allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { mountSlugParam } from '@/utils/blog/mountSlugParam'
import blogCategories from '@/utils/blog/categories'
import WrapperPage from '@/components/WrapperPage'

interface PageProps {
    params: {
        category: string
        subcategory: string
        slug: string
    }
}

async function getDocFromParams(slug: string): Promise<Doc> {
    const doc = allDocs.find(doc => doc.slugAsParams === slug)

    if (!doc) notFound()

    return doc
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
    const doc = await getDocFromParams(mountSlugParam(params))
    const mainCategories = await blogCategories()
    const parentCategory = mainCategories.find(mc => mc.name === params.category)
    const currentCategory = parentCategory?.children?.find(pc => pc.name === params.subcategory)
    const categories = currentCategory?.children
    console.log(categories, params)

    return (
        <WrapperPage>
            <div className="mt-6">
                <h1 className="font-bold text-2xl text-dmds-2 dark:text-dmds-1 mb-6">{doc.title}</h1>
                <h2 className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6">{doc.description}</h2>
                <small className="font-semibold text-md text-dmds-4 mb-6">
                    {doc.createdAt} - {doc.author}
                </small>
                <Mdx code={doc.body.code} />
            </div>
        </WrapperPage>
    )
}
