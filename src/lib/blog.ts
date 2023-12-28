import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'src/articles')

export function getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []): Record<string, string> {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {} as Record<string, string>

    fields.forEach(field => {
        if (field === 'slug') {
            items[field] = realSlug
        }

        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields: string[] = []): Post[] {
    const slugs = getPostSlugs()
    const posts = slugs
        .map(slug => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1)) as unknown as Post[]

    return posts
}
