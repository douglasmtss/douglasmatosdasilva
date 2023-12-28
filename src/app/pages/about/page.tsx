import { Metadata } from 'next'
import perfilImg from '@/assets/images/perfil.jpeg'
import Image from 'next/image'
import Paragraph from '@/components/Paragraph'

export const metadata: Metadata = {
    title: 'About // Douglas Matos',
    description: 'This page contains some information of author - Douglas Matos da Silva'
}

export default function About(): JSX.Element {
    const currentYear = +new Date().getFullYear()
    const age = currentYear - 1993
    const experienceAge = currentYear - 2019
    const collegeSemesters = (currentYear - 2020) * 2
    const inCollegeNow = currentYear <= 2025

    return (
        <main className="flex flex-col mb-8">
            <section className="bg-blue-500 dark:bg-blue-950 h-28 flex justify-center items-center mb-12">
                <h1 className="text-dmds-1 dark:text-dmds-1 text-4xl font-bold">About</h1>
            </section>

            <section className="w-full h-full text-justify  break-words whitespace-break-spaces">
                <figure className="w-full h-full max-w-[500px] max-h-[500px] float-left">
                    <Image className="w-11/12" src={perfilImg} width={200} height={200} alt="Douglas Matos perfil" />
                    <figcaption className="h-8">
                        <p className="inline-block">Douglas Matos da Silva - </p>
                        <p className="inline-block">
                            <strong>
                                <i>
                                    <small>Junho 2023, Duque de Caxias, RJ - Brasil </small>
                                </i>
                            </strong>
                        </p>
                    </figcaption>
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
                            <strong>Engenharia de Software</strong>.
                        </>
                    ) : (
                        ''
                    )}
                </Paragraph>

                <Paragraph>
                    Sou PAI da Joanna, padrasto do Brian e da Branda, sou marido da Verônica e irmão da Gabriela, essas
                    as pessoas que formam minha família. Família que com ela e por ela sou o que sou hoje.
                </Paragraph>

                <Paragraph>
                    Não possuo uma grande experiência no mundo de Desenvolvimento de Software, entrei neste mundo aos 26
                    anos de idade primeiro por curiosidade, sempre tive uma mente inquieta e curiosa, primeiro tive
                    interesse e consertar computadores e notebooks, aprendi muita coisa pesquisando e cheguei a aceitar
                    pequenos trabalhos como técnico de informática, fazendo formatação de computadores, cabeamento de
                    rede, confguração de roteadores, montagem e manutenção de computadores, impressoras, etc...Mas o
                    momento em que eu me econtrava era um dos piores momentos da minha vida e não tinha dinheiro para
                    comprar ferramentas ou equipamentos, aí pensei &quot;Como será que funciona um programa de
                    computador?&quot;, daí passei a pesquisar sobre programação, e escolhi a linguagem C++ para começar.
                </Paragraph>
            </section>
        </main>
    )
}
