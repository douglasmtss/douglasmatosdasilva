import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
// import { remark } from 'remark'
// import html from 'remark-html'
// import prism from 'remark-prism'

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

export function getAllPosts(fields: string[] = []): Record<string, string>[] {
    const slugs = getPostSlugs()
    const posts = slugs
        .map(slug => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1))

    return posts
}

// export async function convertMarkdownToHtml(markdown) {
//     const result = await remark().use(html, { sanitize: false }).use(prism).process(markdown)

//     return result.toString()
// }
