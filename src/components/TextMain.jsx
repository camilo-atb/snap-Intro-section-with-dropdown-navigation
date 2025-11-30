import Logos from "./Logos";
const TextMain = ()=>{
    return(
        <section className="order-2 px-6.5 xl:order-1 xl:w-[75%] xl:pr-52"> {/*xl:w-2/3 */}
            <section className="text-center xl:text-start flex flex-col items-center xl:items-start gap-4 xl:gap-10 my-6 xl:my-0">
                <h1 className="text-4xl font-bold xl:text-8xl">Make remote work</h1> {/*xl:text-7xl  */}
                <p className="xl:pr-48 xl:text-lg">
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                </p>
                <a href="#" className="bg-gray-950 text-white py-3 px-4 rounded-2xl font-bold">Learn more</a>
            </section>
            <Logos/>
        </section>
    )
}

export default TextMain;
