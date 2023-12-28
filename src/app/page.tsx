import LastPosts from '@/components/LastPosts'
import WrapperPage from '@/components/WrapperPage'
import Image from 'next/image'
import Script from 'next/script'
import perfilImg from '@/assets/images/perfil.jpeg'
import info from '@/utils/info'
import Paragraph from '@/components/Paragraph'
import Link from 'next/link'

export default function Home(): JSX.Element {
    const { age, experienceAge, collegeSemesters, inCollegeNow, company, college, github } = info()

    return (
        <WrapperPage>
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
                    Father, husband, brother and software developer.
                </p>
            </header>

            <section className="mb-36" title="seção visão geral">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight hover:underline" title="titulo visão geral">
                    Visão geral
                </h2>
                <Paragraph>
                    Bem vindo ao meu site, aqui é o local onde gostaria de compartilhar conhecimentos, como artigos,
                    tutoriais, dicas etc.
                </Paragraph>
                <Paragraph>
                    Aqui você vai encontrar post no meu{' '}
                    <Link href="/blog">
                        <u>
                            <strong>blog</strong>
                        </u>
                    </Link>{' '}
                    que falam sobre engenharia e desenvolvimento de software desde de gestão de projetos até mão na
                    massa no código, passando pelo front-end, back-end, mobile, web, linux e muito mais.
                </Paragraph>
                <Paragraph>
                    Aqui estarei unificando tudo que aprendi e estou aprendendo, deixarei sempre dispnível dos códigos
                    fontes no{' '}
                    <Link href={github.url}>
                        <u>
                            <strong>github</strong>
                        </u>
                    </Link>
                    , tentarei sempre publicar posts explicando algum assunto novo que aprendi e também disponibilizarei
                    agluns pequenos projetos desenvolvidos como estudos.
                </Paragraph>
                <Paragraph>
                    Desejo tudo de bom a você! Para mais informações entre em{' '}
                    <Link href="/pages/contact">
                        <strong>
                            <u>contato.</u>
                        </strong>
                    </Link>
                </Paragraph>
            </section>

            <section className="mb-36" title="seção sobre">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight hover:underline" title="titulo sobre">
                    <Link href="/pages/about">Sobre</Link>
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
                    <Paragraph>
                        Olá, meu nome é{' '}
                        <strong>
                            <u>Douglas Matos da Silva</u>
                        </strong>
                        , tenho {age} anos de idade, trabalho como{' '}
                        <strong>
                            <u>Desenvolvedor de Software</u>
                        </strong>{' '}
                        à {experienceAge} anos.{' '}
                        {inCollegeNow ? (
                            <>
                                Atualmente estou cursando o {collegeSemesters}º período da faculdade de{' '}
                                <strong>Engenharia de Software</strong> na faculdade{' '}
                                <Link href={college.url} target="_blank" rel="noreferrer">
                                    <u>
                                        <strong>{college.name}</strong>
                                    </u>
                                </Link>
                                .
                            </>
                        ) : (
                            ''
                        )}
                    </Paragraph>
                    <Paragraph>
                        Trabalho atualmente como{' '}
                        <strong>
                            <u>Desenvolvedor de Software</u>
                        </strong>{' '}
                        na{' '}
                        <Link href={company.intelie.url} target="_blank" rel="noreferrer">
                            <u>
                                <strong>{company.intelie.name}</strong>
                            </u>
                        </Link>
                        .
                    </Paragraph>
                </div>

                <button
                    type="button"
                    className="rounded-md bg-dmds-5 dark:text-dmds-2 px-4 py-2 text-xl"
                    title="botão saiba mais"
                >
                    <Link href="/pages/about" title="link para página sobre">
                        Saiba mais
                    </Link>
                </button>
            </section>

            <section className="mb-36" title="seção últimos posts">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight hover:underline" title="titulo últimos posts">
                    <Link href="/blog">Últimos posts</Link>
                </h2>
                <LastPosts amount={2} />
                <button
                    type="button"
                    className="rounded-md bg-dmds-5 dark:text-dmds-2 px-4 py-2 text-xl mt-6"
                    title="botão saiba mais"
                >
                    <Link href="/blog" title="link para o blog">
                        Saiba mais
                    </Link>
                </button>
            </section>
        </WrapperPage>
    )
}
