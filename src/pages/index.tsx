import Head from "next/head";
import React from "react";
import Image from "next/image";
import { useGithubApi } from "@/hooks/useGihubApi";
import { MainMenu } from "@/components/mainMenu/mainMenu";
import { useTextAnimation } from "@/hooks/useTextAnimation";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(true);
  const { data, loading } = useGithubApi()
  const [isOpen, setIsOpen] = React.useState(false)

  const headingH2Ref = React.useRef<HTMLHeadingElement>(null)
  const headingH3Ref = React.useRef<HTMLHeadingElement>(null)
  useTextAnimation(data.name, headingH2Ref, 100, 0)
  useTextAnimation(data.bio, headingH3Ref, 50, 2500)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return !loading && (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Website's Douglas Matos da Silva" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" />
      </Head>
      <main className="relative w-full h-[100vh] bg-white dark:bg-gray-900 p-4">
        <div onClick={handleClick} className='w-10 h-10 flex justify-center items-center'>
          <RxHamburgerMenu className='text-white text-4xl' />
        </div>

        <MainMenu.MenuLateral isOpen={isOpen} onClick={handleClick} />

        <section>
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium" ref={headingH2Ref} />
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl" ref={headingH3Ref} />
          </div>

          <div className="w-full mx-auto bg-gradient-to-b from-teal-500 rounded-full relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image
              loader={() => data.avatar_url}
              alt="avatar"
              src={data.avatar_url}
              width={384}
              height={384}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
