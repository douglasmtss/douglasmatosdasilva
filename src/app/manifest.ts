import getBaseUrl from '@/lib/baseUrl'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    const baseUrl = getBaseUrl()

    return {
        theme_color: '#222',
        background_color: '#222',
        display: 'standalone',
        scope: baseUrl,
        start_url: baseUrl,
        name: 'Douglas Matos da Silva',
        short_name: 'Douglas Matos',
        description:
            'This is my personal website, where i have one blog with any articles, tutors, challenges e more. Douglas Matos da Silva',
        icons: [
            {
                src: '/images/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/images/icon-256x256.png',
                sizes: '256x256',
                type: 'image/png'
            },
            {
                src: '/images/icon-384x384.png',
                sizes: '384x384',
                type: 'image/png'
            },
            {
                src: '/images/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    }
}
