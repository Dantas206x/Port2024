import tony from "./assets/tony.jpeg"
import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <div id="sobre" className="mt-10 card ">
      <div className="circle2"></div>
      <div className="circle2"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-inner2 justify-center gap-20 p-4 items-center text-center flex flex-wrap">

          <div className="h-auto max-w-[500px]">

            <h1 className="text-4xl pb-6   font-semibold text-black">Sobre mim</h1>
            <div className=" font-semibold text-black p-2  ">
              Sou um Desenvolvedor Full Stack, com conhecimento em JavaScript, React, C# .NET, TypeScript, React Native e Angular. Minha especialização em bancos de dados abrange PostgreSQL, MySQL e MongoDB, garantindo eficiência e integridade nos sistemas que desenvolvo. Destaco-me na criação e implementação de API's REST, demonstrando habilidades avançadas para facilitar integrações perfeitas e impulsionar soluções inovadoras. Comprometido com a entrega de aplicações robustas e escaláveis, meu foco é evidenciado em cada projeto.
            </div>
          </div>
          <div>
            <img src={tony} className="rounded-2xl w-[400px] max-h-[400px]" alt="Tony's photo" />
          </div>


        </div>
      </motion.div>


    </div>



  );
}

export default Sobre;