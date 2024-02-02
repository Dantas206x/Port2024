import linkb from "./assets/linkb.png"
import gitb from "./assets/gitb.png"

const Footer = () => {
    return (<div >
        <div className="gap-20 p-10 items-center text-center  flex-wrap text-black border-t-2 border-white text-white bg-tertiary ">
            <div className="p-2">
                <a href="#" className="tony p-8 text-4xl">
                    TonyDEV
                </a>
                <p className="p-4  font-semibold">

                    ©2024 por Antonio Braz.<br />

                    Todos os direitos reservados.

                </p>
            </div>
            <div className=" border-b-2 p-2  border-violet-600  justify-center flex ">
                <ul className="flex gap-10  ">
                    <li>
                        <a href="https://www.linkedin.com/in/antoniobraz360x/">
                            <img src={linkb} className="w-12 h-12  transform transition-transform hover:scale-125" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Dantas206x">
                            <img src={gitb} className="w-12 h-12 transform transition-transform hover:scale-125" />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>);
}

export default Footer;