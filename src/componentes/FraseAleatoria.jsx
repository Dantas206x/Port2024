import React, { useState, useEffect } from 'react';
import frases from './frases.json'; // Ajuste o caminho conforme necessário

const FraseAleatoria = () => {
  const [fraseAtual, setFraseAtual] = useState({});
  const [idAleatoria, setIdAleatoria] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        setFraseAtual(frases);
      } catch (error) {
        console.error('Erro ao obter as frases:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (fraseAtual.length > 0) {
      const novaIdAleatoria = gerarIdAleatoria();
      setIdAleatoria(novaIdAleatoria);

      const novaFrase = fraseAtual.find(frase => frase.id === novaIdAleatoria);
      setFraseAtual(novaFrase);
    }
  }, [fraseAtual]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (fraseAtual.length > 1) {
        let novaIdAleatoria;
        do {
          novaIdAleatoria = gerarIdAleatoria();
        } while (novaIdAleatoria === idAleatoria);

        setIdAleatoria(novaIdAleatoria);

        const novaFrase = fraseAtual.find(frase => frase.id === novaIdAleatoria);
        setFraseAtual(novaFrase);
      }
    }, 15000);

    return () => clearInterval(intervalo);
  }, [fraseAtual, idAleatoria]);

  const gerarIdAleatoria = () => {
    const idsDisponiveis = fraseAtual.map(frase => frase.id);
    const indiceAleatorio = Math.floor(Math.random() * idsDisponiveis.length);
    return idsDisponiveis[indiceAleatorio];
  };

  return (
    <div>
      {fraseAtual ? (
        <div className="mb-style-2  shadow-md card  ">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className='card-inner p-10'>
            <p className="text-center text-2xl">"{fraseAtual.frase}"</p>
            <p className="mb-author flex-1 bottom-0 right-5 text-2xl uppercase font-bold" style={{ letterSpacing: '1px', color: '#000' }}>
              {fraseAtual.autor}.
            </p>
          </div>
        </div>
      ) : (
        <p>Carregando frase...</p>
      )}
    </div>
  );
};

export default FraseAleatoria;
