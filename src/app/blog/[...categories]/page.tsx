// import { Mdx } from '@/components/Mdx'
// import { Doc, allDocs } from 'contentlayer/generated'
// import { notFound } from 'next/navigation'
import blogCategories from '@/utils/blog/categories'
import React from 'react'
interface PageProps {
    params: {
        categories: string[]
    }
}

// async function getDocFromParams(slug: string): Promise<Doc> {
//     const doc = allDocs.find(doc => doc.slugAsParams === slug)

//     if (!doc) notFound()

//     return doc
// }

export default async function page({ params }: PageProps): Promise<JSX.Element> {
    // TODO: implement a recusive function to check all categories
    blogCategories().then(categories => {
        for (const category of categories) {
            const c = categories.find(c => params.categories.includes(c.slug as string))
            // const c = params.categories.find(c => c === category.slug)
            const sc = c?.children?.find(sc => params.categories.includes(sc.slug as string))
            const scc = sc?.children?.find(sc => params.categories.includes(sc.slug as string))
            console.clear()

            console.log(params)

            console.log(c, sc, scc)
        }
    })

    // const doc = await getDocFromParams(params.slug)

    return (
        <div>
            <h1>Page</h1>
            {/* <h1>{doc.title}</h1> */}
            {/* <div>{JSON.stringify(doc)}</div> */}
            {/* <Mdx code={doc.body.code} /> */}
        </div>
    )
}
