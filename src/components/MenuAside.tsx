import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Menu } from "./Menu";

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};


export const MenuAside = (): JSX.Element => {
    const [open, cycleOpen] = useCycle(false, true);

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.aside
                        initial={{ width: 0 }}
                        animate={{
                            width: 300
                        }}
                        exit={{
                            width: 0,
                            transition: { delay: 0.7, duration: 0.3 }
                        }}
                    >
                        <motion.div
                            className="container"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >
                            <Menu.MenuContent open={open} />
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
            {open && (
                <motion.div>
                    <Menu.IconCross onClick={cycleOpen} />
                </motion.div>
            )}
            {!open && (
                <motion.div>
                    <Menu.IconHamburger onClick={cycleOpen} />
                </motion.div>
            )}
        </>
    )
}