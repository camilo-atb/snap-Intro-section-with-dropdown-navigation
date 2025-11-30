import databiz from "../assets/client-databiz.svg"
import audioPhile from "../assets/client-audiophile.svg"
import meet from "../assets/client-meet.svg"
import maker from "../assets/client-maker.svg"
const Logos = ()=>{
    return(
        // <section className="flex gap-4">
        //     <img className="object-cover h-min" src={databiz} alt="databiz"/>
        //     <img className="object-cover h-min" src={audioPhile} alt="audio phile"/>
        //     <img className="object-cover h-min" src={meet} alt="meet"/>
        //     <img className="object-cover h-min" src={maker} alt="maker"/>
        // </section>
        <section className="grid grid-cols-4 gap-4 mt-10 mb-20 xl:mb-0">
            <img src={databiz} alt="databiz"/>
            <img src={audioPhile} alt="audio phile"/>
            <img src={meet} alt="meet"/>
            <img src={maker} alt="maker"/>
        </section>
    )
}

export default Logos;