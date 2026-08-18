import { allDocs } from 'contentlayer/generated'
import { Locale } from '#/i18n.config'

export function getAllPosts(lang: Locale): Post[] {
    return allDocs
        .filter(doc => doc.lang === lang && doc.published !== false)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .map(doc => ({
            title: doc.title,
            description: doc.description ?? '',
            createdAt: doc.createdAt,
            author: doc.author,
            image: doc.image,
            published: doc.published,
            lastModified: doc.lastModified,
            content: doc.body.raw,
            slug: doc.slugAsParams.replace(`${lang}/`, ''),
            tags: doc.tags,
            lang: doc.lang
        }))
}
