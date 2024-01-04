import LastPosts from '@/components/LastPosts'
import WrapperPage from '@/components/WrapperPage'
import Image from 'next/image'
import Script from 'next/script'
import perfilImg from '@/assets/images/perfil.jpeg'
import Paragraph from '@/components/Paragraph'
import SocialMedias from '@/components/SocialMedias'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '#/i18n.config'
import dynamic from 'next/dynamic'

const LinkI18n = dynamic(() => import('@/components/LinkI18n'), { ssr: false })

export default async function Home({ params: { lang } }: { params: { lang: Locale } }): Promise<JSX.Element> {
    const { page } = await getDictionary(lang)

    return (
        <WrapperPage lang={lang}>
            <Script
                async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PULIC_ADS_CLIENT}`}
                crossOrigin="anonymous"
            />
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PULIC_GTAG_ID}`} />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', '${process.env.NEXT_PULIC_GTAG_ID}');
                `}
            </Script>

            <header className="flex flex-col items-center h-screen pt-32 pb-8 w-max mx-auto">
                <h1 className="font-ranga mt-8 text-5xl text-dmds-2 dark:text-dmds-1 md:text-8xl tracking-tighter mb-8">
                    Douglas Silva
                </h1>
                <p className="font-sans text-base text-dmds-3 dark:text-dmds-5 max-w-[70%] md:w-full text-center md:text-2xl">
                    {page.home.slogan}
                </p>
            </header>

            <section className="mb-80" title={page.home.overview.title}>
                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.overview.title}
                >
                    {page.home.overview.title}
                </h2>

                <Paragraph>{page.home.overview.p1}</Paragraph>

                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.overview.h2p2}
                >
                    {page.home.overview.h2p2}
                </h2>
                <Paragraph>{page.home.overview.p2}</Paragraph>

                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.overview.h2p3}
                >
                    {page.home.overview.h2p3}
                </h2>
                <Paragraph>{page.home.overview.p3}</Paragraph>

                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.overview.h2p4}
                >
                    {page.home.overview.h2p4}
                </h2>
                <Paragraph>{page.home.overview.p4}</Paragraph>

                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.overview.h2p5}
                >
                    {page.home.overview.h2p5}
                </h2>
                <Paragraph>{page.home.overview.p5}</Paragraph>

                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.overview.h2p6}
                >
                    {page.home.overview.h2p6}
                </h2>
                <Paragraph>{page.home.overview.p6}</Paragraph>

                <Paragraph>{page.home.overview.greetings}</Paragraph>

                <Paragraph>Douglas Matos da Silva</Paragraph>
            </section>

            <section className="mb-80" title={page.home.about.title}>
                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.about.title}
                >
                    <LinkI18n href="/pages/about">{page.home.about.title}</LinkI18n>
                </h2>
                <div>
                    <figure className="w-full h-full max-w-[150px] max-h-[150px] float-left">
                        <Image
                            className="w-11/12  rounded-full"
                            src={perfilImg}
                            width={200}
                            height={200}
                            alt="Douglas Matos perfil"
                        />
                    </figure>
                    <Paragraph dangerouslySetInnerHTML={{ __html: page.home.about.p1 }} />

                    <Paragraph dangerouslySetInnerHTML={{ __html: page.home.about.p2 }} />
                </div>

                <button
                    type="button"
                    className="rounded-md bg-dmds-5 dark:text-dmds-2 px-4 py-2 text-xl"
                    title={page.home.about.read_more}
                >
                    <LinkI18n href="/pages/about" title={page.home.about.read_more}>
                        {page.home.about.read_more}
                    </LinkI18n>
                </button>
            </section>

            <section className="mb-80" title={page.home.latest_posts.title}>
                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.latest_posts.title}
                >
                    <LinkI18n href="/blog">{page.home.latest_posts.title}</LinkI18n>
                </h2>
                <LastPosts amount={2} lang={lang} />
                <button
                    type="button"
                    className="rounded-md bg-dmds-5 dark:text-dmds-2 px-4 py-2 text-xl mt-6"
                    title={page.home.contact.read_more}
                >
                    <LinkI18n href="/blog" title={page.home.latest_posts.read_more}>
                        {page.home.latest_posts.read_more}
                    </LinkI18n>
                </button>
            </section>

            <section className="mb-80" title={page.home.contact.title}>
                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.contact.title}
                >
                    <LinkI18n href="/pages/contact">{page.home.contact.title}</LinkI18n>
                </h2>
                <Paragraph>{page.home.contact.p1}</Paragraph>
                <Paragraph>{page.home.contact.p2}</Paragraph>
                <SocialMedias />
                <button
                    type="button"
                    className="rounded-md bg-dmds-5 dark:text-dmds-2 px-4 py-2 text-xl mt-6"
                    title={page.home.contact.read_more}
                >
                    <LinkI18n href="/pages/contact" title={page.home.contact.read_more}>
                        {page.home.contact.read_more}
                    </LinkI18n>
                </button>
            </section>
        </WrapperPage>
    )
}
