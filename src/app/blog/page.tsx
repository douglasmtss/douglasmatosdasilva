import WrapperPage from '@/components/WrapperPage'
import blogCategories from '@/utils/blog/categories'
import Link from 'next/link'

export default async function Page(): Promise<JSX.Element> {
    const categories = await blogCategories()

    return (
        <WrapperPage>
            <div>
                <h1>blog</h1>
                <div>
                    <h2>Main categories</h2>
                    <ul>
                        {categories.map((c, i) => (
                            <li key={`${i}__${c.name}`}>
                                <Link className="cursor-pointer" href={`/blog/${c.slug}`}>
                                    {c.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </WrapperPage>
    )
}
