import { getAllPosts } from '@/lib/blog'
import stripHtml from '@/lib/strip-html'
import type { Metadata } from 'next'
import getBaseUrl from '@/lib/baseUrl'
import { Locale } from '#/i18n.config'
import PostsPreviewList from '@/components/PostsPreviewList'

function getPosts(lang: Locale): Post[] {
    const allPosts = getAllPosts(lang)

    return allPosts
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params
    const allPosts = getPosts(lang) as Post[]
    const title = 'Blog // Douglas Matos'
    const description = stripHtml(
        `Here you can find all the <strong>${allPosts.length} articles</strong> I wrote. You can read about web development, software engineering, and tech career in both English and Portuguese.`
    )
    const baseUrl = getBaseUrl()
    const url = `${baseUrl}/${lang}`

    return {
        metadataBase: new URL(url),
        title,
        description,
        openGraph: {
            url,
            title,
            description,
            images: [
                {
                    url: `/images/random.webp`,
                    width: 1220,
                    height: 630,
                    alt: 'Douglas Matos Banner'
                }
            ]
        }
    }
}

export default async function Posts({ params }: { params: Promise<{ lang: Locale }> }): Promise<JSX.Element> {
    const { lang } = await params
    const allPosts = getPosts(lang) as Post[]
    const description = `Here you can find all the <strong>${allPosts.length} articles</strong> I wrote. You can read about web development, software engineering, and tech career in both English and Portuguese.`

    return (
        <>
            <PostsPreviewList description={description} allPosts={allPosts} />
        </>
    )
}
