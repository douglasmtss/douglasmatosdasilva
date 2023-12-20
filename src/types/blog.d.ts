declare type BlogCategories = {
    name: string
    subcategories?: BlogCategories[]
    slug: string
}

declare type CategoryTree = {
    parentId?: number | string | null
    id?: number | string
    name?: string
    slug?: string
    source?: string
    files?: string[]
    children?: CategoryTree[]
}
