import comp from './assets/comp.png'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex text-white items-center  justify-evenly  min-h-[100vh] flex-col md:flex-row  pt-40 bg-tertiary">
      {/* Seção para dispositivos móveis */}
      <div className="flex flex-col text-center ">
        <div className=" text-center typewriter gap-10">
          <h1 className=" text-lime-500">Print("Hello World")</h1>
        </div>
        <div className="text-5xl">Eu sou &nbsp;
          <div className=" inline-flex ">
            <div className=" text-orange-500 font-">λ</div>
            <div className=" font-extrabold">
              ntonio</div>

          </div>
        </div>
        <div className=" pt-10 text-3xl  font-semibold Frisbe">Desenvolvedor Fullstack</div>
      </div>

      {/* Seção para computadores */}

      <div className=" bg-violet-500 rounded-full md:h-[400px] md:w-[400px] h-[250px] w-[250px] ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={comp} className='comp1' />
          <div className='relative flex justify-center'>
            <div className='shadow'></div>
          </div>
          </motion.div>
      </div>

    </div>


  );
}

export default Home;