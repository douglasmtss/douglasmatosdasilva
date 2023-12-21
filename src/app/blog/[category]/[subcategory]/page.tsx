import React from 'react'
import blogCategories from '@/utils/blog/categories'
import { fileToCategoryOrPost } from '@/utils/blog/fileToCategoryOrPost'
import WrapperPage from '@/components/WrapperPage'

interface PageProps {
    params: {
        category: string
        subcategory: string
    }
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
    const mainCategories = await blogCategories()
    const parentCategory = mainCategories.find(mc => mc.name === params.category)
    const currentCategory = parentCategory?.children?.find(pc => pc.name === params.subcategory)
    const categories = currentCategory?.children
    const files = currentCategory?.files

    let options = [] as CategoryTree[]

    if (categories) {
        options = [...categories]
    }
    if (files) {
        const categoriesOrPostsFromFiles = fileToCategoryOrPost(files)
        options = [...options, ...categoriesOrPostsFromFiles]
    }

    return (
        <WrapperPage>
            <PagePostsList title={params.subcategory} posts={options} params={params} />
        </WrapperPage>
    )
}

interface PagePostsListProps {
    title: string
    posts: CategoryTree[]
    params: Record<string, string>
}
const PagePostsList = ({ title, posts, params }: PagePostsListProps): JSX.Element => {
    return (
        <div>
            <div className="absolute left-0 right-0 bg-blue-500 dark:bg-blue-950 h-28 flex justify-center items-center mb-12">
                <h1 className="text-dmds-1 dark:text-dmds-1 text-4xl font-bold">Blog</h1>
            </div>
            <section className="pt-36">
                <h1 className="capitalize font-bold text-2xl text-dmds-2 dark:text-dmds-1 mb-6">{title}</h1>
                <ul>
                    {posts?.map((c, i) => (
                        <li key={`${i}__${c.name}`}>
                            <a
                                className="cursor-pointer underline text-blue-700 dark:text-blue-400"
                                href={`/blog/${params.category}/${params.subcategory}/${c.slug}`}
                            >
                                {c.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
