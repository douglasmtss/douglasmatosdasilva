import LastPosts from '@/components/LastPosts'
import WrapperPage from '@/components/WrapperPage'
import Image from 'next/image'
import Script from 'next/script'
import perfilImg from '@/assets/images/perfil.jpeg'
// import info from '@/utils/info'
import Paragraph from '@/components/Paragraph'
import Link from 'next/link'
import SocialMedias from '@/components/SocialMedias'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '#/i18n.config'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }): Promise<JSX.Element> {
    const { page } = await getDictionary(lang)
    // const { age, experienceAge, collegeSemesters, inCollegeNow, company, college, github } = info()

    return (
        <WrapperPage lang={lang}>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9377371618407904"
                crossOrigin="anonymous"
            />
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8J47CXLFL2" />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-8J47CXLFL2');
                `}
            </Script>

            <header className="flex flex-col items-center h-[60vh] py-8 w-max mx-auto">
                <h1 className="font-ranga mt-8 text-5xl text-dmds-2 dark:text-dmds-1 md:text-8xl tracking-tighter mb-8">
                    Douglas Silva
                </h1>
                <p className="font-sans text-base text-dmds-3 dark:text-dmds-5 max-w-[70%] md:w-full text-center md:text-2xl">
                    {page.home.slogan}
                </p>
            </header>

            <section className="mb-36" title={page.home.overview.title}>
                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.overview.title}
                >
                    {page.home.overview.title}
                </h2>

                <Paragraph>{page.home.overview.p1}</Paragraph>

                <Paragraph dangerouslySetInnerHTML={{ __html: page.home.overview.p2 }} />

                <Paragraph dangerouslySetInnerHTML={{ __html: page.home.overview.p3 }} />

                <Paragraph dangerouslySetInnerHTML={{ __html: page.home.overview.p4 }} />
            </section>

            <section className="mb-36" title={page.home.about.title}>
                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.about.title}
                >
                    <Link href="/pages/about">{page.home.about.title}</Link>
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
                    <Link href="/pages/about" title={page.home.about.read_more}>
                        {page.home.about.read_more}
                    </Link>
                </button>
            </section>

            <section className="mb-36" title={page.home.latest_posts.title}>
                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.latest_posts.title}
                >
                    <Link href="/blog">{page.home.latest_posts.title}</Link>
                </h2>
                <LastPosts amount={2} lang={lang} />
                <button
                    type="button"
                    className="rounded-md bg-dmds-5 dark:text-dmds-2 px-4 py-2 text-xl mt-6"
                    title={page.home.contact.read_more}
                >
                    <Link href="/blog" title={page.home.latest_posts.read_more}>
                        {page.home.latest_posts.read_more}
                    </Link>
                </button>
            </section>

            <section className="mb-36" title={page.home.contact.title}>
                <h2
                    className="mb-6 text-2xl font-semibold tracking-tight hover:underline"
                    title={page.home.contact.title}
                >
                    <Link href="/pages/contact">{page.home.contact.title}</Link>
                </h2>
                <Paragraph>{page.home.contact.p1}</Paragraph>
                <Paragraph>{page.home.contact.p2}</Paragraph>
                <SocialMedias />
                <button
                    type="button"
                    className="rounded-md bg-dmds-5 dark:text-dmds-2 px-4 py-2 text-xl mt-6"
                    title={page.home.contact.read_more}
                >
                    <Link href="/pages/contact" title={page.home.contact.read_more}>
                        {page.home.contact.read_more}
                    </Link>
                </button>
            </section>
        </WrapperPage>
    )
}
