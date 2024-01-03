import { Locale } from '#/i18n.config'
import Paragraph from '@/components/Paragraph'
import getBaseUrl from '@/lib/baseUrl'
import { getDictionary } from '@/lib/dictionary'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const {
        page: { privacy }
    } = await getDictionary(params.lang)
    const title = privacy.title
    const description = privacy.description
    const baseUrl = getBaseUrl()
    const url = `${baseUrl}/${params.lang}`

    return {
        metadataBase: new URL(url),
        title,
        description,
        openGraph: {
            url,
            title,
            description,
            images: [
                {
                    url: `/images/opengraph-image.png`,
                    width: 1220,
                    height: 630,
                    alt: 'Douglas Matos Banner'
                }
            ]
        }
    }
}

export default async function Privacy({ params }: { params: { lang: Locale } }): Promise<JSX.Element> {
    const {
        page: { privacy }
    } = await getDictionary(params.lang)

    return (
        <div>
            <h1 className="text-dmds-1 dark:text-dmds-1 text-4xl font-bold mb-6">{privacy.title}</h1>

            <Paragraph>{privacy.p1}</Paragraph>

            <Paragraph>{privacy.p2}</Paragraph>

            <h2 className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6">{privacy.subtitle.t1}</h2>

            <Paragraph dangerouslySetInnerHTML={{ __html: privacy.p3 }} />

            <h2 className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6">{privacy.subtitle.t2}</h2>

            <Paragraph>{privacy.p4}</Paragraph>

            <h2 className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6">{privacy.subtitle.t3}</h2>

            <Paragraph dangerouslySetInnerHTML={{ __html: privacy.p5 }} />

            <h2 className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6">{privacy.subtitle.t4}</h2>

            <Paragraph>{privacy.p6}</Paragraph>

            <ul>
                <li>
                    <Paragraph>Google</Paragraph>
                    <Paragraph>
                        <a href="https://policies.google.com/technologies/ads">
                            https://policies.google.com/technologies/ads
                        </a>
                    </Paragraph>
                </li>
            </ul>

            <h2 className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6">{privacy.subtitle.t5}</h2>

            <Paragraph>{privacy.p7}</Paragraph>

            <Paragraph>{privacy.p8}</Paragraph>

            <Paragraph>{privacy.p9}</Paragraph>

            <h2 className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6">{privacy.subtitle.t6}</h2>

            <Paragraph>{privacy.p10}</Paragraph>

            <Paragraph>{privacy.p11}</Paragraph>

            <h2 className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6">{privacy.subtitle.t7}</h2>

            <Paragraph>{privacy.p12}</Paragraph>

            <Paragraph>{privacy.p13}</Paragraph>

            <h2 className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6">{privacy.subtitle.t8}</h2>

            <Paragraph> {privacy.p14}</Paragraph>

            <h2 className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6">{privacy.subtitle.t9}</h2>

            <Paragraph>{privacy.p15}</Paragraph>
        </div>
    )
}
