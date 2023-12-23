import fs from 'fs'
import path from 'path'
import fsExtra from 'fs-extra'

const fsPromises = fs.promises
const targetDir = './public/images'
const postsDir = './src/assets/images'

async function copyImagesToPublic() {
    const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg']
    const postDirFiles = await fsPromises.readdir(`${postsDir}`)
    const images = postDirFiles.filter(file => allowedImageFileExtensions.includes(path.extname(file)))

    if (images.length) {
        for (const image of images) {
            await fsPromises.copyFile(`${postsDir}/${image}`, `${targetDir}/${image}`)
        }
    }
}

// async function copyImagesToPublicByPost(images, slug) {
//     for (const image of images) {
//         await fsPromises.copyFile(`${postsDir}/${slug}/${image}`, `${targetDir}/${slug}/${image}`)
//     }
// }

// async function createPostImageFoldersForCopy() {
//     // Get every post folder: post-one, post-two etc.
//     const postSlugs = await fsPromises.readdir(postsDir)

//     for (const slug of postSlugs) {
//         const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp']

//         // Read all files inside current post folder
//         const postDirFiles = await fsPromises.readdir(`${postsDir}/${slug}`)

//         // Filter out files with allowed file extension (images)
//         const images = postDirFiles.filter(file => allowedImageFileExtensions.includes(path.extname(file)))
//         if (images.length) {
//             // Create a folder for images of this post inside public
//             await fsPromises.mkdir(`${targetDir}/${slug}`)

//             await copyImagesToPublicByPost(images, slug)
//         }
//     }
// }

await fsExtra.emptyDir(targetDir)
copyImagesToPublic()
// await createPostImageFoldersForCopy()
