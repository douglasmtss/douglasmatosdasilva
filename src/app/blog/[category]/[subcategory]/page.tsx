import React from 'react'
import blogCategories from '@/utils/blog/categories'
import { fileToCategoryOrPost } from '@/utils/blog/fileToCategoryOrPost'

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
        <div>
            <h1>{params.subcategory}</h1>
            <ul>
                {options?.map((c, i) => (
                    <li key={`${i}__${c.name}`}>
                        <a className="cursor-pointer" href={`/blog/${params.category}/${params.subcategory}/${c.slug}`}>
                            {c.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
