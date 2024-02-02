
import { useState, useEffect } from "react";
import gitb from "./assets/gitb.png"
import linkb from "./assets/linkb.png"
import gitp from "./assets/linkp.png"
import linkp from "./assets/gitp.png"
import menub from "./assets/menub.png"
import menup from "./assets/menup.png"
import closeb from "./assets/closeb.png"
import closep from "./assets/closep.png"
import whatsb from "./assets/whatsb.png"
import { motion } from "framer-motion";




const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(true);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleBodyOverflow = () => {
            const body = document.body;
            if (isMenuOpen) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'visible';
            }
        };

        handleBodyOverflow();

        window.addEventListener('resize', handleBodyOverflow);

        return () => {
            window.removeEventListener('resize', handleBodyOverflow);
        };
    }, [isMenuOpen]);
    return (
        <nav
            className={`fixed top-0 w-full z-20 backdrop-blur-lg transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-20 shadow-lg' : 'bg-transparent'}`}
        >
            <div>
                <div className="mx-auto flex justify-between items-center ">
                    <div className={`max-[1024px]:hidden transition-all duration-500 ${isScrolled ? 'tony-scroll' : 'tony'}`}>
                        <div  className={`p-8 text-4xl font-black ${isScrolled ? '' : ''}`}>
                            TONY | DEV
                        </div>
                    </div>

                    <div className={`max-[1024px]:hidden space-x-10 flex lista-sem-marcador font-black letras ${isScrolled ? 'text-white' : ''}`}>
                        <li>
                            <a href="#">INICIO</a>
                        </li>
                        <li>
                            <a href="#sobre">SOBRE</a>
                        </li>
                        <li>
                            <a href="#projetos">PROJETOS</a>
                        </li>
                        <li>
                            <a href="#contato">CONTATO</a>
                        </li>
                    </div>

                    <div className={`max-[1024px]:hidden space-x-10 flex lista-sem-marcador font-black letras p-12 ${isScrolled ? 'text-white' : ''}`}>
                        <li>
                            <a href="https://www.linkedin.com/in/antoniobraz360x/" target="blank">
                                <img src={gitp} className={`w-8 h-8 ${isScrolled ? 'hidden' : ''}`} />
                            </a>
                            <a href="https://www.linkedin.com/in/antoniobraz360x/" target="blank">
                                <img src={linkb} className={`w-8 h-8 ${isScrolled ? '' : 'hidden'}`} />
                            </a>

                        </li>
                        <li>
                            <a href="https://github.com/Dantas206x/" target="blank">
                                <img src={linkp} className={`w-8 h-8 ${isScrolled ? 'hidden' : ''}`} />
                            </a>
                            <a href="https://github.com/Dantas206x/" target="blank">
                                <img src={gitb} className={`w-8 h-8 ${isScrolled ? '' : 'hidden'}`} />
                            </a>
                        </li>
                    </div>




                </div>
                {/*  menu mobile */}


                <div className=" justify-between flex min-[1024px]:hidden " >

                    <div className={` transition-all duration-500 ${isScrolled ? 'tony-scroll' : 'tony'}`}>
                        <div className={` text-4xl font-black p-9 ${isScrolled ? '' : ''}`}>
                            TONY<br />| DEV
                        </div>
                    </div>
                    <div >
                        <div className=" p-8" >
                            {!isMenuOpen && (
                                <>
                                    <img src={menup} className={`w-12 h-12 ${isScrolled ? 'hidden' : ''}`} onClick={handleMenuOpen} />
                                    <img src={menub} className={`w-12 h-12 ${isScrolled ? '' : 'hidden'}`} onClick={handleMenuOpen} />
                                </>
                            )}

                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="fixed">
                          

                            <div className=" items-center justify-between tone w-screen  ">
                           
                                <div className="fixed right-1 p-8">
                                    {isMenuOpen && (
                                        <>
                                            <img src={closep} className={`w-12 h-12 ${isScrolled ? 'hidden' : ''}`} onClick={handleMenuClose} />
                                            <img src={closeb} className={`w-12 h-12 ${isScrolled ? '' : 'hidden'}`} onClick={handleMenuClose} />
                                        </>
                                    )}
                                </div>
                                <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
                                <ul className="list-none  text-white font-black " onClick={handleMenuClose}>
                                    <div className={` pt-80 flex flex-col gap-10 items-center ${isMenuOpen ? 'text-white' : ''}`}>
                                        <li>
                                            <a href="#">INICIO</a>
                                        </li>
                                        <li>
                                            <a href="#sobre">SOBRE</a>
                                        </li>
                                        <li>
                                            <a href="#projetos">PROJETOS</a>
                                        </li>
                                        <li>
                                            <a href="#contato">CONTATO</a>
                                        </li>
                                    </div>
                                </ul>
                                <div className=" gap-10 flex list-none pt-10 items-center justify-center">
                                    <li>

                                        <a href="https://www.linkedin.com/in/antoniobraz360x/" target="blank">
                                            <img src={linkb} className="w-8 h-8" />
                                        </a>

                                    </li>
                                    <li>

                                        <a href="https://github.com/Dantas206x/" target="blank">
                                            <img src={gitb} className="w-8 h-8" />
                                        </a>
                                    </li>
                                    <li>

                                        <a href="https://wa.me/5511983085134?text=Ol%C3%A1,%20Como%20vai?%0AVim%20atrav%C3%A9s%20do%20seu%20portifolio%20para%20contato." target="blank">
                                            <img src={whatsb} className="w-8 h-8" />
                                        </a>
                                    </li>
                                </div></motion.div>
                            </div>

                        </div>
                    )}

                </div>
       




        </div>

        </nav >
    );
}

export default Navbar;