import { readdirSync } from 'fs'

type Tree = {
    parentId: number | string | null
    id: number | string
    name?: string
    slug?: string
    children?: Tree[]
}
const blogPath = 'src/articles/blog'

const mountSlug = (str: string): string => {
    if (!str) return ''

    return str.toLocaleLowerCase().replaceAll(' ', '-').trim()
}

const getAllFoldersNames = (source: string): string[] => {
    return readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
}

const mountObjects = (arr: string[], root: Tree): Tree[] => {
    return arr.map((a, i) => {
        if (typeof root?.id === 'undefined') {
            return {
                id: `root_${i}`,
                parentId: null,
                name: a,
                slug: mountSlug(a),
                children: []
            }
        } else {
            return {
                id: `${root.name}__${i}`,
                parentId: root.id,
                name: a,
                slug: mountSlug(a),
                children: []
            }
        }
    })
}

const mountTree = (path: string, data: Tree[], root = {} as Tree): void => {
    const foldersNamesList = getAllFoldersNames(path)
    const objectsReferences = mountObjects(foldersNamesList, root)

    objectsReferences.forEach(or => {
        data.push(or)
        mountTree(`${path}/${or.name}`, data, or)
    })
}

export default async function blogCategories(): Promise<Tree[]> {
    const tree = [] as Tree[]
    mountTree(blogPath, tree)

    const idMapping = tree.reduce(
        (acc, el, i) => {
            acc[el.id] = i

            return acc
        },
        {} as { [key: string]: number }
    )
    const categories = [] as Tree[]
    tree.forEach(el => {
        if (el.parentId === null) {
            categories.push(el)

            return
        }
        const parentEl = tree[idMapping[el.parentId]]
        parentEl.children = [...(parentEl.children || []), el]
    })

    // console.clear()
    // console.log(JSON.stringify(categories, null, 2))

    return categories
}
