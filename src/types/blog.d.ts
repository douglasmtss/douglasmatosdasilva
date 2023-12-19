declare type BlogCategories = {
    name: string
    subcategories?: BlogCategories[]
    slug: string
}
