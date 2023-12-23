import { getAllPosts } from '@/lib/blog'
import stripHtml from '@/lib/strip-html'
import { isDevMode } from '@/lib/is-dev-mode'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const PostsPreviewList = dynamic(() => import('@/components/PostsPreviewList'), {
    ssr: false
})

function getPosts(): Record<string, string>[] {
    const allPosts = getAllPosts(['createdAt', 'slug', 'title', 'image', 'content', 'description'])

    return allPosts
}

export async function generateMetadata(): Promise<Metadata> {
    const allPosts = getPosts() as Record<string, string>[]
    const title = 'Blog // Douglas Matos'
    const image = '/static/images/random.webp'
    const description = stripHtml(
        `Here you can find all the <strong>${allPosts.length} articles</strong> I wrote. You can read about web development, software engineering, and tech career in both English and Portuguese.`
    )
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

export default function Posts(): JSX.Element {
    const allPosts = getPosts() as Record<string, string>[]
    const description = `Here you can find all the <strong>${allPosts.length} articles</strong> I wrote. You can read about web development, software engineering, and tech career in both English and Portuguese.`

    return (
        <>
            <PostsPreviewList description={description} allPosts={allPosts} />
        </>
    )
}
