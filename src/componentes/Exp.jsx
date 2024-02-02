import { motion } from "framer-motion";

const Exp = () => {
    return (<div className="text-black  card w-full">
        <div>
        <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
                <div className="circle3"></div>
                <div className="circle3"></div>
        <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 ">
            <div>
                <p className="sm:text-[18px] text-[14px] uppercase tracking-wider text-center">
                O que eu fiz até agora
                </p>
                <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
                Experiencias de trabalho
                </h2>

            </div>
                <div className="mt-20 flex flex-col card-inner2">
                
                        <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
                                <div className="vertical-timeline-element">
                                    <span className="vertical-timeline-element-icon bounce-in bg-neutral-100  shadow-xl">
                                        <div className="flex justify-center items-center w-full h-full">
                                            <div className="rounded-full overflow-hidden w-[90%] h-[90%]">
                                                <img src="data:image/jpeg;base64,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" />

                                            </div>
                                        </div>
                                    </span>
                                    <div className="vertical-timeline-element-content bounce-in  bg-neutral-100  shadow-xl">
                                        <div className="vertical-timeline-element-content-arrow"></div>
                                        <div>
                                            <h3 className="text-black text-[24px] font-bold"> Analista de Sustentação

                                            </h3>
                                            <p className="text-black text-[16px] font-semibold">NAVA - Technology for Business

                                            </p>
                                        </div>
                                            <ul>
                                                <li className="text-black-100 text-[14px] pl-1 tracking-wider">Responsável por dar suporte às soluções implementadas em uma empresa, garantindo o seu funcionamento e resolvendo eventuais problemas.

                                                </li>
                                                <li className="text-black-100 text-[14px] pl-1 tracking-wider">Colaborar em conjunto a uma equipe interna, para ilustrar novas ideias e a viabilidade de projetos. 
                                                    
                                                </li>
                                                <li className="text-black-100 text-[14px] pl-1 tracking-wider">Certificar de que o design está responsivo e testar compatibilidade entre navegadores.
                                                    
                                                </li>
                                                <li className="text-black-100 text-[14px] pl-1 tracking-wider">Participar de Code Reviews e providenciar o feedback para os desenvolvedores.
                                                    
                                                </li>
                                            </ul>

                                        <span className="vertical-timeline-element-date">Dez 2022 - Nov 2023

                                        </span>

                                    </div>

                                </div>
                                <div className="vertical-timeline-element ">
                                    <span className="vertical-timeline-element-icon bounce-in bg-neutral-100  shadow-xl">
                                        <div className="flex justify-center items-center w-full h-full">
                                            <div className="rounded-full overflow-hidden w-[90%] h-[90%]">
                                                <img src="https://portifolio-web-antonio.netlify.app/assets/tesla-e09e2562.jpeg" />

                                            </div>
                                        </div>
                                    </span>
                                    <div className="vertical-timeline-element-content bounce-intone bg-neutral-100  shadow-xl">
                                     
                                        <div className="vertical-timeline-element-content-arrow"></div>
                                        <div>
                                            <h3 className="text-black text-[24px] font-bold"> Support Analyst

                                            </h3>
                                            <p className="text-black text-[16px] font-semibold">Algar Tech

                                            </p>
                                        </div>
                                            <ul>
                                                <li className="text-black-100 text-[14px] pl-1 tracking-wider">responsável por fornecer suporte técnico aos usuários de sistemas, hardware e software.

                                                </li>
                                                <li className="text-black-100 text-[14px] pl-1 tracking-wider">identificar e resolver problemas, instalar softwares e atualizações, além de prestar atendimento aos usuários por telefone, chat ou e-mail. 
                                                    
                                                </li>
                                                <li className="text-black-100 text-[14px] pl-1 tracking-wider">Implementing responsive design and ensuring cross-browser compatibility.
                                                    
                                                </li>
                                                <li className="text-black-100 text-[14px] pl-1 tracking-wider">Responsável pela manutenção preventiva de equipamentos e pela criação de documentação de suporte e procedimentos técnicos.
                                                    
                                                </li>
                                            </ul>

                                        <span className="vertical-timeline-element-date">Aug 2021 - Dez 2022

                                        </span>

                                    </div>
                     

                                </div>
                        </div>
                        
                </div>

        </section>




  </motion.div>
        </div>
    </div>);
}

export default Exp;