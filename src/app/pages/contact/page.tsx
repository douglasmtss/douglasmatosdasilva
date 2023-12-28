import React from 'react'
import { Metadata } from 'next'
import { isDevMode } from '@/lib/is-dev-mode'
import dynamic from 'next/dynamic'
import Paragraph from '@/components/Paragraph'

const Form = dynamic(() => import('./Form'), { ssr: false })

export async function generateMetadata(): Promise<Metadata> {
    const title = 'Contato // Douglas Matos'
    const image = '/images/random.webp'
    const description = 'Entre em contato. Tentarei responder, mas isso pode demorar um pouco, pois sou ocupado.'
    const url = isDevMode() ? 'http://localhost:3000' : 'https://douglasmatosdasilva.com.br'

    return {
        metadataBase: new URL(url),
        title,
        description,
        openGraph: {
            url,
            title,
            description,
            images: `${url}${image}`
        }
    }
}

export default function Contact(): JSX.Element {
    return (
        <div className="w-full md:w-6/12 ml-auto mr-auto" title="página de contato">
            <Paragraph>
                Entre em contato. Tentarei responder, mas isso pode demorar um pouco, pois sou ocupado.
            </Paragraph>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight hover:underline" title="titulo envie um email">
                Envie um e-mail
            </h2>
            <Form />
        </div>
    )
}
