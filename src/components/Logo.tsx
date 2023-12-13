import logo from '@/assets/logo.svg'
import binaryCircle from '@/assets/binary-circle.svg'

export interface LogoProps {
    containerClassName?: string
}
export const Logo = ({ containerClassName = 'w-16 h-16 md:w-32 md:h-32' }: LogoProps): JSX.Element => {

    return (
        <div
            onContextMenu={e => {
                e.preventDefault()
                alert('tribute')
            }}
            className={`rounded-full relative ${containerClassName}`}
        >
            <figure>
                <a href="/logo-meaning">
                    <img className='top-0 left-0 w-full h-full absolute animation-rotate-reverse' src={binaryCircle} alt="Logo" />
                    <img className={`top-[5%] left-[5%] w-[90%] h-[90%] absolute animation-rotate`} src={logo} alt="Logo" />
                </a>
            </figure>
        </div>
    )
}