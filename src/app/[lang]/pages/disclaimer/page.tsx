import { type Locale } from '#/i18n.config'
import Paragraph from '@/components/Paragraph'
import { getDictionary } from '@/lib/dictionary'

export default async function Disclaimer({ params }: { params: { lang: Locale } }): Promise<JSX.Element> {
    const {
        page: { disclaimer }
    } = await getDictionary(params.lang)

    return (
        <div>
            <h1 className="text-dmds-1 dark:text-dmds-1 text-4xl font-bold mb-6">{disclaimer.title}</h1>
            <Paragraph>{disclaimer.p1}</Paragraph>
            <Paragraph>{disclaimer.p2}</Paragraph>
            <Paragraph>{disclaimer.p3}</Paragraph>
            <Paragraph>{disclaimer.p4}</Paragraph>
            <Paragraph>{disclaimer.p5}</Paragraph>
            <Paragraph>{disclaimer.p6}</Paragraph>
            <Paragraph>{disclaimer.p7}</Paragraph>
        </div>
    )
}
