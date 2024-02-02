
import iphone from "./assets/iphone.png"
import mail from './assets/mail.png'
import cell from './assets/cell.png'
import zap from './assets/zap.png'

const Contato = () => {
    return (<div id="contato">

        <div className="justify-center gap-20 p-10 items-center text-center flex flex-wrap text-white bg-tertiary">
            <div>
                <h2 className=" text-center  text-3xl font-black underline underline-offset-1 decoration-violet-600">
                    Diga oi !
                </h2>
                <div className="">
                    <ul>
                        <li>
                            <a href="mailto:tony2k01@outlook.com" className="flex items-center gap-3 hover:bg-violet-700  duration-300 rounded-lg mt-10 p-4">
                                <img src={mail} className="w-4 h-4 " /> Tony2k01@outlook.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+5511983085134" className="flex items-center gap-3 hover:bg-violet-700  duration-300 rounded-lg mt-5 p-4">
                                <img src={cell} className="w-4 h-4" /> (11) 98308-5134
                            </a>
                        </li>
                    </ul>
                    <button className=" text-white font-bold button1 mt-4 border-solid border-2  border-violet-600 hover:bg-violet-700  duration-300 text-black px-4 py-2 rounded ">
                        <a href="https://wa.me/5511983085134?text=Ol%C3%A1,%20Como%20vai?%0AVim%20atrav%C3%A9s%20do%20seu%20portifolio%20para%20contato." target="blank" className="flex items-center gap-3">
                            <img src={zap} className="w-6 h-6" />WhatsApp
                        </a>
                    </button>
                </div>
            </div>
            <div className="ml-0  mt-20  md:ml-10 ">
                <div className="bg-violet-500 rounded-full md:h-[400px] md:w-[400px] h-[250px] w-[250px] items-center justify-center flex ">
                    <div className="transform transition-transform hover:scale-105">
                    <a href="https://wa.me/5511983085134?text=Ol%C3%A1,%20Como%20vai?%0AVim%20atrav%C3%A9s%20do%20seu%20portifolio%20para%20contato.">
                        <img src={iphone} className="  w-28 h-auto comp2 md:w-40 " />
                    </a>
                    </div>
                </div>

            </div>

        </div>


    </div>);
}

export default Contato;