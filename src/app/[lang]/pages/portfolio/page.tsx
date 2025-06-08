import { Metadata } from 'next'
import Image from 'next/image'
import Paragraph from '@/components/Paragraph'
import { Locale } from '#/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import getBaseUrl from '@/lib/baseUrl'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const {
        page: { portfolio }
    } = await getDictionary(params.lang)
    const title = `${portfolio.title} // Douglas Matos`
    const description = portfolio.description
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

const portfolios = [
    {
        name: 'Todo App (Desktop and Mobile)',
        description: {
            br: 'Uma aplicação para Desktop e Mobile, que permite a criação, edição, deleção e importação de tarefas ou lista de tarefas. As informações são armazenadas no "indexDB" do dispositivo.',
            en: 'An application for Desktop and Mobile, which allows you to create, edit, delete and import tasks or task lists. The information is stored in the device\'s "indexDB".'
        },
        thumb: 'https://raw.githubusercontent.com/dougsoftware/todo-app-without-context-management/refs/heads/main/docs/todo-app-desktop-dark-mode.png',
        repository: 'https://github.com/dougsoftware/todo-app-without-context-management',
        online: 'https://todo-app-without-context-management.vercel.app/'
    },
    {
        name: 'Weather app',
        description: {
            br: 'Aplicação para consulta do clima apenas para regiões do Brasil, e em sua página inicial mostra a temperatura miníma e maxima das 10 capitais do Brasil.',
            en: 'Application for consulting the weather only for regions of Brazil, and on its home page it shows the minimum and maximum temperature of the 10 capitals of Brazil.'
        },
        thumb: 'https://raw.githubusercontent.com/dougsoftware/weather/refs/heads/master/doc/desktop-consult.png',
        repository: 'https://github.com/dougsoftware/weather',
        online: 'https://weather-app-forecast.netlify.app/'
    },
    {
        name: 'Pomodoro App',
        description: {
            br: 'Simples aplicação Pomodoro.',
            en: 'Simple Pomodoro Application.'
        },
        thumb: 'https://raw.githubusercontent.com/dougsoftware/pomodoro/refs/heads/main/docs/pomodoro-countdown.png',
        repository: 'https://github.com/dougsoftware/pomodoro',
        online: 'https://pomodoro-doug.vercel.app/'
    },
    {
        name: 'WIFI Senha',
        description: {
            br: 'Página de destino simples para gerar senha de wifi como código QR.',
            en: 'Simple landpage for generate wifi password as QRCode.'
        },
        thumb: 'https://raw.githubusercontent.com/dougsoftware/wifi-senha/refs/heads/main/docs/images/wifi-senha.png',
        repository: 'https://github.com/dougsoftware/wifi-senha',
        online: 'https://wifi-senha.vercel.app/'
    }
]

export default async function About({ params }: { params: { lang: Locale } }): Promise<JSX.Element> {
    const {
        page: { portfolio }
    } = await getDictionary(params.lang)

    return (
        <main className="flex flex-col mb-8">
            <section className="bg-blue-500 dark:bg-blue-950 h-28 flex justify-center items-center mb-12">
                <h1 className="text-dmds-1 dark:text-dmds-1 text-4xl font-bold">{portfolio.title}</h1>
            </section>

            {portfolios.map((portf, index) => {
                return (
                    <section
                        key={`${portf.name}_${index}`}
                        className="w-full h-full text-justify  break-words whitespace-break-spaces mb-16 flex flex-col lg:flex-row"
                    >
                        <figure className="w-full h-full lg:max-w-[500px] lg:max-h-[500px] mb-4 lg:mb-0">
                            <Image
                                alt="Douglas Matos perfil"
                                src={portf.thumb}
                                width={500}
                                height={400}
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto'
                                }}
                                className="w-11/12"
                            />
                        </figure>

                        <div className="flex flex-col w-full">
                            <h2>{portf.name}</h2>

                            <Paragraph>{portf.description[params.lang]}</Paragraph>

                            <div className="flex flex-col lg:flex-row  lg:justify-between items-center mt-auto">
                                <button
                                    type="button"
                                    className="mb-4 lg:mb-0 w-full lg:w-auto hover:bg-white transition-all duration-300 rounded-md bg-dmds-5 dark:text-dmds-2 px-4 py-2 text-xl"
                                    title={portfolio.button_online}
                                >
                                    <Link target="_blank" href={portf.online} title={portfolio.button_online}>
                                        {portfolio.button_online}
                                    </Link>
                                </button>

                                <button
                                    type="button"
                                    className="w-full lg:w-auto hover:bg-white transition-all duration-300 rounded-md bg-dmds-5 dark:text-dmds-2 px-4 py-2 text-xl"
                                    title={portfolio.button_repository}
                                >
                                    <Link target="_blank" href={portf.repository} title={portfolio.button_repository}>
                                        {portfolio.button_repository}
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </section>
                )
            })}
        </main>
    )
}
