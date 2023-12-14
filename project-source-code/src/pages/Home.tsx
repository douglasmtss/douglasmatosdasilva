import { Footer } from '@/components/Footer'
import { Logo } from '../components/Logo'
import { Menu } from '@/components/Menu';
import { TogggleTheme } from '@/components/ToggleTheme';

export const Home = (): JSX.Element => {

  return (
    <div className='bg-dmds-1 dark:bg-dmds-2 h-screen flex flex-col md:px-8 md:pt-8'>
      <div className='flex justify-end px-8 py-4'>
        <TogggleTheme />
      </div>
      <nav className='px-8 pb-8 flex justify-between items-center'>
        <Logo />
        <Menu.MenuAside />
      </nav>
      <header className='flex flex-col items-center py-8 w-max mx-auto'>
        <h1 className='font-ranga mt-8 text-5xl text-dmds-2 dark:text-dmds-1 md:text-8xl tracking-tighter'>Douglas Silva</h1>
        <span className='font-sans text-base text-dmds-3 dark:text-dmds-5 max-w-[70%] md:w-full text-center md:text-2xl'>
          Father, husband, brother and software developer.
        </span>
      </header>
      <main className='w-full flex-1'>
      </main>
      <Footer />
    </div>
  )
}