import { MetadataRoute } from 'next'
import { allDocs } from 'contentlayer/generated'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = (process.env.NEXT_PULIC_BASE_URL ?? '').replace(/\/$/, '')
    const locales = ['br', 'en']
    const pages = ['', '/blog', '/pages/about', '/pages/portfolio', '/pages/contact', '/pages/privacy', '/pages/disclaimer']
    const pageUrls: MetadataRoute.Sitemap = locales.flatMap(locale =>
        pages.map(path => ({
            url: `${baseUrl}/${locale}${path}`,
            lastModified: new Date()
        }))
    )
    const postsUrl: MetadataRoute.Sitemap = allDocs
        .filter(doc => doc.published !== false)
        .map(doc => ({
            url: `${baseUrl}/${doc.lang}/blog/${doc.slugAsParams}`,
            lastModified: doc.lastModified ? new Date(doc.lastModified) : new Date(doc.createdAt)
        }))

    return [...pageUrls, ...postsUrl]
}
