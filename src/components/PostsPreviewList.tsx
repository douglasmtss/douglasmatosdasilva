'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const PostPreview = dynamic(() => import('@/components/PostPreview'), {
    ssr: false
})

interface PostsPreviewListProps {
    description: string
    allPosts: Record<string, string>[]
}

export default function PostsPreviewList(props: PostsPreviewListProps): JSX.Element {
    const renderAllPosts = (): Iterable<React.ReactNode> => {
        return props.allPosts.map((post, index) => {
            return (
                <PostPreview
                    key={index}
                    index={index}
                    href={`/blog/${post.slug}/`}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    // stats={post.stats}
                    content={post.content}
                />
            )
        })
    }

    return (
        <>
            <motion.div layout>
                <p dangerouslySetInnerHTML={{ __html: props.description }} />

                <h2>All Posts</h2>
                <div className="flex flex-col md:flex-row items-center md:justify-between md:items-baseline">
                    {renderAllPosts()}
                </div>
            </motion.div>
        </>
    )
}
