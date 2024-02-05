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
                <p className="sm:text-[18px] text-[16px] uppercase tracking-wider text-center">
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
                                                <img src="https://media.licdn.com/dms/image/D4D0BAQH_J4IHl6XW9w/company-logo_200_200/0/1703091846342/nava_technology_logo?e=1715212800&v=beta&t=z7vGrOCWlhrnMgBUvooCRE6XS78V3Ie-TYr2eS4SKJ8" />

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
                                                <li className="text-black-100 text-[16px] pl-1 tracking-wider">Responsável por dar suporte às soluções implementadas em uma empresa, garantindo o seu funcionamento e resolvendo eventuais problemas.

                                                </li>
                                                <li className="text-black-100 text-[16px] pl-1 tracking-wider">Colaborar em conjunto a uma equipe interna, para ilustrar novas ideias e a viabilidade de projetos. 
                                                    
                                                </li>
                                                <li className="text-black-100 text-[16px] pl-1 tracking-wider">Certificar de que o design está responsivo e testar compatibilidade entre navegadores.
                                                    
                                                </li>
                                                <li className="text-black-100 text-[16px] pl-1 tracking-wider">Participar de Code Reviews e providenciar o feedback para os desenvolvedores.
                                                    
                                                </li>
                                            </ul>

                                        <span className="vertical-timeline-element-date">Dez 2022 - Nov 2023

                                        </span>

                                    </div>

                                </div>
                                <div className="vertical-timeline-element ">
                                    <span className="vertical-timeline-element-icon bounce-in bg-neutral-100  shadow-xl  5">
                                        <div className="flex justify-center items-center w-full h-full">
                                            <div className="rounded-full overflow-hidden w-[90%] h-[90%] ">
                                                <img src="https://media.licdn.com/dms/image/D4D0BAQHKsH5LtoEWvg/company-logo_200_200/0/1696421129275?e=1715212800&v=beta&t=wgFwlRliySuPZN0DTdACOrFAui6HMbGalhsw6SAFrF0" />

                                            </div>
                                        </div>
                                    </span>
                                    <div className="vertical-timeline-element-content bounce-intone bg-neutral-100  shadow-xl ">
                                     
                                        <div className="vertical-timeline-element-content-arrow"></div>
                                        <div>
                                            <h3 className="text-black text-[24px] font-bold"> Support Analyst

                                            </h3>
                                            <p className="text-black text-[16px] font-semibold">Algar Tech

                                            </p>
                                        </div>
                                            <ul>
                                                <li className="text-black-100 text-[16px] pl-1 tracking-wider">responsável por fornecer suporte técnico aos usuários de sistemas, hardware e software.

                                                </li>
                                                <li className="text-black-100 text-[16px] pl-1 tracking-wider">identificar e resolver problemas, instalar softwares e atualizações, além de prestar atendimento aos usuários por telefone, chat ou e-mail. 
                                                    
                                                </li>
                                                <li className="text-black-100 text-[16px] pl-1 tracking-wider">Implementing responsive design and ensuring cross-browser compatibility.
                                                    
                                                </li>
                                                <li className="text-black-100 text-[16px] pl-1 tracking-wider">Responsável pela manutenção preventiva de equipamentos e pela criação de documentação de suporte e procedimentos técnicos.
                                                    
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