import { FaHome, FaUser } from 'react-icons/fa'
import { motion } from "framer-motion";

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

interface MenuContentProps {
    open: boolean
}
export const MenuContent = ({ open }: MenuContentProps): JSX.Element => {

    return open ? (
        <>
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-black dark:bg-white opacity-60 flex justify-end" />
            <div className="absolute top-0 right-0 bg-dmds-1 dark:bg-dmds-2 w-8/12 h-screen opacity-1 p-8">

                <h1 className='font-ranga mt-8 text-5xl text-dmds-2 dark:text-dmds-1 md:text-6xl tracking-tighter'>Douglas Silva</h1>
                <ul className="mt-6 pt-8 border-t border-black dark:border-dmds-5">
                    <li>
                        <motion.a variants={itemVariants} href="/" className="mt-6 flex justify-start items-center text-dms-2 dark:text-dmds-4">
                            <FaHome />
                            <span className="ml-6">Home</span>
                        </motion.a>
                    </li>
                    <li>
                        <motion.a variants={itemVariants} href="/" className="mt-6 flex justify-start items-center text-dms-2 dark:text-dmds-4">
                            <FaUser />
                            <span className="ml-6">About</span>
                        </motion.a>
                    </li>
                </ul>
            </div>
        </>
    ) : <></>
}