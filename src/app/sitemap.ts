import { MetadataRoute } from 'next'
import { allDocs } from 'contentlayer/generated'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PULIC_BASE_URL
    const postsUrl: MetadataRoute.Sitemap = await allDocs.map(doc => ({
        url: `${baseUrl}/blog/${doc.slugAsParams}`
        // lastModified: new Date(doc.updatedAt),
        // changeFrequency: ,
        // priority:
    }))

    return [
        {
            url: `${baseUrl}/pages/about`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/pages/privacy`
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date()
        },
        ...postsUrl
    ]
}
