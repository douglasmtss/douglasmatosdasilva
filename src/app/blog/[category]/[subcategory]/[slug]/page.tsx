import React from 'react'
import { Mdx } from '@/components/Mdx'
import { Doc, allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { mountSlugParam } from '@/utils/blog/mountSlugParam'
import blogCategories from '@/utils/blog/categories'
import TopPageContent from '@/components/TopPageContent'
import { Footer } from '@/components/Footer'

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
        <div>
            <TopPageContent />
            <h1>{doc.title}</h1>
            <h2>{doc.description}</h2>
            <small>
                {doc.createdAt} - {doc.author}
            </small>
            <Mdx code={doc.body.code} />
            <Footer />
        </div>
    )
}
