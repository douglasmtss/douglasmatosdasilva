import React from 'react'
import blogCategories from '@/utils/blog/categories'

interface PageProps {
    params: {
        category: string
    }
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
    const mainCategories = await blogCategories()
    const currentCategory = mainCategories.find(mc => mc.name === params.category)
    const categories = currentCategory?.children ?? []

    return (
        <div>
            <h1>{params.category}</h1>
            <ul>
                {categories?.map((c, i) => (
                    <li key={`${i}__${c.name}`}>
                        <a className="cursor-pointer" href={`/blog/${params.category}/${c.slug}`}>
                            {c.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
