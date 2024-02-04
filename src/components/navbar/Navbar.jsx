import { useEffect, useState } from "react";
import NavbarFixed from "./NavbarFixed";
import NavbarScroll from "./NavbarScroll";
import {  AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 1) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <AnimatePresence>
                {isScrolling ? (
                    <NavbarScroll isScrolling={isScrolling} />
                ) : (
                    <NavbarFixed />
                )}
            </AnimatePresence>
        </>)
}

export default Navbar
