const BlackFond = ({ open, closeMenu })=>{
    return(
        <div onClick={closeMenu} className={`fixed top-0 left-0 w-screen h-screen bg-black/70 ${open?"block cursor-pointer":"hidden"}`}/>
    )
}

export default BlackFond;