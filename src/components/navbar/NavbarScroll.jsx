import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const NavAnimations = {
    initial: {
        y: -50,
        x: "-50%",
        opacity: 0,
    },
    animate: {
        y: 0,
        x: "-50%",
        opacity: 1,
        transition: {
            type: "spring",
            damping: 10,
            stiffness: 100,
        },
    },
    exit: {
        y: -50,
        opacity: 0,
    },
};

const NavbarScroll = ({ isScrolling }) => {
    return (
        <motion.nav
            key={1}
            initial="initial"
            animate={isScrolling ? "animate" : "initial"}
            exit="exit"
            variants={NavAnimations}
            className="fixed z-10 flex justify-between px-4 py-2 rounded-full  left-1/2 top-3 bg-primary"
        >
            <ul className="flex items-center">
                <li className="px-2 text-white text-md">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-2 text-white text-md">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="px-2 text-white text-md">
                    <Link to="/">Work</Link>
                </li>
                <li className="px-4 py-2 ml-2 text-white bg-primary rounded-full text-md ">
                    <Link to="/">Login</Link>
                </li>
            </ul>
        </motion.nav>
    )
}

export default NavbarScroll
