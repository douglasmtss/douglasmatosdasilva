import { Footer } from '@/components/Footer'
import TopPageContent from '@/components/TopPageContent'
import Image from 'next/image'
import randomImage from '@/assets/random.webp'

const posts = [
    {
        source: 'Blog',
        title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
        img: randomImage,
        createdAt: 'novembro 10, 2023',
        author: 'Douglas Matos da Silva'
    },
    {
        source: 'Blog',
        title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
        img: randomImage,
        createdAt: 'novembro 10, 2023',
        author: 'Douglas Matos da Silva'
    },
    {
        source: 'Blog',
        title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
        img: randomImage,
        createdAt: 'novembro 10, 2023',
        author: 'Douglas Matos da Silva'
    },
    {
        source: 'Blog',
        title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
        img: randomImage,
        createdAt: 'novembro 10, 2023',
        author: 'Douglas Matos da Silva'
    },
    {
        source: 'Blog',
        title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
        img: randomImage,
        createdAt: 'novembro 10, 2023',
        author: 'Douglas Matos da Silva'
    }
]

export default function Blog(): JSX.Element {
    return (
        <div className="bg-dmds-1 dark:bg-dmds-2 h-max flex flex-col md:px-8 md:pt-8">
            <TopPageContent />
            <main className="flex flex-col mb-8">
                <div className="bg-blue-500 dark:bg-blue-950 h-28 flex justify-center items-center mb-12">
                    <h1 className="text-dmds-1 dark:text-dmds-1 text-4xl font-bold">Blog</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-8/12 h-max ">
                    {posts.map((post, index) => {
                        return (
                            <div
                                key={`${post.createdAt}_${index}`}
                                className="flex flex-col bg-dmds-1 dark:bg-dmds-4 rounded-md w-full max-w-[350px] "
                            >
                                <Image width={350} height={150} src={post.img} alt="image" />

                                <div className="p-2">
                                    <span className="text-sm text-blue-500 dark:text-blue-900 font-bold">
                                        {post.source}
                                    </span>

                                    <h2 className="font-bold text-lg text-dmds-2">{post.title}</h2>

                                    <small className="text-dmds-2">
                                        {post.createdAt} &#183; {post.author}
                                    </small>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>

            <Footer />
        </div>
    )
}
