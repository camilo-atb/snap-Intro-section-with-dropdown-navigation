import mobile from "../assets/image-hero-mobile.png"
import desktop from "../assets/image-hero-desktop.png"
import TextMain from "./TextMain" 
const Main = ()=>{
    return(
        <main className="flex flex-1 flex-col xl:flex-row xl:gap-20 xl:px-32 xl:items-center">
            <picture className="order-1 xl:order-2 xl:w-[35%]">{/*1/2 2/6*/}
                <source srcSet={desktop} media="(min-width: 1024px)" />
                <img src={mobile} className="w-full" alt="Hero" />
            </picture>
            <TextMain/>
        </main>
    )
}

export default Main;