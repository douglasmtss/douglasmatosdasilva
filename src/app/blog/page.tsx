import { Mdx } from '@/components/Mdx'
import { Doc, allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

interface PageProps {
    params: {
        slug: string
    }
}

async function getDocFromParams(slug: string): Promise<Doc> {
    const doc = allDocs.find(doc => doc.slugAsParams === slug)

    if (!doc) notFound()

    return doc
}

export default async function page({ params }: PageProps): Promise<JSX.Element> {
    console.log(params)

    const doc = await getDocFromParams(params.slug)

    console.log(doc)

    return (
        <div>
            <h1>{doc.title}</h1>
            {/* <div>{JSON.stringify(doc)}</div> */}
            <Mdx code={doc.body.code} />
        </div>
    )
}
