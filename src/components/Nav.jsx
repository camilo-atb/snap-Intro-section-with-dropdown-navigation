import arrowDown from "../assets/icon-arrow-down.svg"
import todoList from "../assets/icon-todo.svg"
import calendar from "../assets/icon-calendar.svg"
import reminders from "../assets/icon-reminders.svg"
import planning from "../assets/icon-planning.svg"
import { useState } from "react"

const Nav = ({ abiertoo })=>{
    const [openSubMenu, setOpenSubMenu] = useState(null)

    function toggleMenu(menuName) {
        setOpenSubMenu(openSubMenu === menuName ? null : menuName);
    }

    return(
        <nav className={`xl:flex xl:w-11/12 ${abiertoo?"flex flex-col gap-4 py-16 absolute right-0 top-0 bg-white h-screen w-3/5 max-w-80 p-6":"hidden"}`}> {/*xl:p-2*/}
            <ul className={`flex flex-col xl:flex-row xl:w-3/5 xl:justify-start xl:gap-10 ${abiertoo?"gap-2":""}`}>
                <div className="relative">
                    <li onClick={() => toggleMenu("features")} className="cursor-pointer flex gap-1.5">Features <img src={arrowDown} className={`object-contain w-2.5 h-2.5 ${openSubMenu === "features" ?"rotate-180":"rotate-none"}`} self-center alt="desplegable" /></li>
                    <ul className={`flex-col gap-2 px-5 py-2 xl:absolute xl:p-4 xl:w-max xl:right-0 xl:rounded-lg xl:shadow-xl xl:bg-white ${openSubMenu === "features"?"flex":"hidden"}`}>
                        <li className="flex gap-2"><img className="object-contain" src={todoList} alt="" /> Todo List</li>
                        <li className="flex gap-2"><img className="object-contain" src={calendar} alt="" /> Calendar</li>
                        <li className="flex gap-2"><img className="object-contain" src={reminders} alt="" /> Reminders</li>
                        <li className="flex gap-2"><img className="object-contain" src={planning} alt="" /> Planning</li>
                    </ul>
                </div>
                <div className="relative">
                    <li onClick={() => toggleMenu("company")} className="cursor-pointer flex gap-1.5">Company <img src={arrowDown} className={`object-contain w-2.5 h-2.5 ${openSubMenu === "company" ?"rotate-180":"rotate-none"}`} self-center alt="desplegable"/></li>
                    <ul className={`flex-col gap-2 px-5 py-2 xl:absolute xl:p-4 xl:w-max xl:right-0 xl:rounded-lg xl:shadow-lg xl:bg-white  ${openSubMenu === "company" ?"flex":"hidden"}`}>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer">About</li>
            </ul>
            <ul className={`flex flex-col xl:flex-row xl:w-2/5 xl:justify-end xl:gap-10 items-center ${abiertoo?"gap-2":""}`}>
                <li className="cursor-pointer">Login</li>
                <li className={`cursor-pointer px-3 py-1 outline-1 rounded-lg ${abiertoo?"w-full text-center":""}`}>Register</li>
            </ul>
        </nav>
    )
}

export default Nav;