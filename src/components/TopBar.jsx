import Nav from "./Nav"
import logo from "../assets/logo.svg"
import menu from "../assets/icon-menu.svg"
import closeMenuu from "../assets/icon-close-menu.svg"
import BlackFond from "./BlackFond"
import { useEffect, useState } from "react"

const TopBar = ()=>{

    const [abierto, setAbierto] = useState(false)

    useEffect(()=>{
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setAbierto(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function openMenu(){
        setAbierto(true)
    }

    function closeMenu(){
        setAbierto(false)
    }

    return(
        <section className="flex justify-between p-6 relative">
            <BlackFond open={abierto} closeMenu={closeMenu}></BlackFond>
            <figure className="xl:w-1/12 flex items-center">
                <img src={logo} alt="snap logo"/>
            </figure>
            <Nav abiertoo={abierto}></Nav>
            <img className={`cursor-pointer xl:hidden ${abierto?"hidden":"block"}`} onClick={openMenu} src={menu} alt="menu hamburguesa"/>
            <img src={closeMenuu} onClick={closeMenu} alt="cerrar menu" className={`cursor-pointer xl:hidden ${abierto?"block z-1":"hidden"}`}/>
        </section>
    )
}

export default TopBar;