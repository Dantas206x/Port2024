import React, { useState } from "react";
import projetos from "./constantes/index.js";
import { motion } from "framer-motion";

const Projetos = () => {
  const [mostrarMais, setMostrarMais] = useState(false);
  const projetosParaExibir = mostrarMais ? projetos : projetos.slice(0, 3);

  const handleMostrarMais = () => {
    setMostrarMais(!mostrarMais);
  };

  return (
    <div id="projetos">
      <div className="text-black card">
        <div className="text-center">
          <p className="sm:text-[18px] text-[14px] text-black uppercase tracking-wider">
            Meus trabalhos
          </p>
          <h2 className="text-black font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projetos
          </h2>
        </div>
        <div className="circle4"></div>
        <div className="circle4"></div>
        <div className="circle4"></div>
        <div className="circle4"></div>
        <div className="mt-20 flex flex-wrap gap-10 justify-center card-inner2">
          {projetosParaExibir.map((projeto, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl sm:w-[360px] w-full shadow-xl bg-white-100"
            >
              {/* Seu conteúdo do projeto aqui */}
              <div className="relative w-full h-[230px]">
                <img
                  src={projeto.image}
                  alt={`project_image_${index}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img
                      src={
                        "https://portifolio-web-antonio.netlify.app/assets/github-3b4e1609.png"
                      }
                      alt="github_icon"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-black font-bold text-[24px]">
                  {projeto.name}
                </h3>
                <p className="mt-2 text-hite text-[14px]">
                  {projeto.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {projeto.tags.map((tag, tagIndex) => (
                  <p
                    key={`${projeto.name}-${tagIndex}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
          
        </div>
        
      </div>
      
      <div className=" items-center text-center justify-center  pb-10">
          {projetos.length > 3 && (
            <button
              onClick={handleMostrarMais}
              className=" font-bold button1 mt-4 border-solid border-2  border-violet-600 hover:bg-violet-700 hover:text-white duration-300 text-black px-4 py-2 rounded "
            >
              {mostrarMais ? "Mostrar Menos" : "Mostrar Mais"}
            </button>
          )}
        </div>
    </div>
  );
};

export default Projetos;
