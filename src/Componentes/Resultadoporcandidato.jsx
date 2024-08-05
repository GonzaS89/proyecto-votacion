import { React } from "react";
import { motion } from 'framer-motion';
import "../Estilos/candidato.css";


const Resultadoporcandidato = ( {nombre,imagen,totalVotos,votosMilei,votosMassa} ) => {

  let porcentaje;

  const definirCandidato = (candidato) => {
    return (
      candidato === 'javier milei' ?
        (votosMilei / totalVotos) * 100 :
        (votosMassa / totalVotos) * 100
    )
  }

  const definirPorcentaje = (candidato) => {
    return (
      candidato === 'javier milei' ?
        (votosMilei / totalVotos) * 100 :
        (votosMassa / totalVotos) * 100
    )
  }


  porcentaje = totalVotos === 0 ?
    0 : definirPorcentaje(nombre)

  return (
    <div className='contenedor-candidato'>
      <div className="nombre-votos-contenedor">
        <h2 className="nombre-candidato">{nombre}</h2>
        <h3 className="votosporpartido">
          {nombre === 'javier milei' ?
            votosMilei : votosMassa} {(votosMilei || votosMassa) > 1 || votosMilei || votosMassa === 0 ? 'votos' : 'voto'}</h3>
      </div>
      <div className="contenedor-partido">
        <div className="contenedor-imagen">
          <img className="imagen-partido " src={imagen} alt="" />
        </div>
        <div className="contenedor-barraporcentual">
          <h3>{porcentaje.toFixed(2)}%</h3>
          <motion.div
            className={
              nombre === "javier milei"
                ? "barraporcentual lalibertadavanza"
                : "barraporcentual unionporlapatria"
            }
            style={{ width: `${definirCandidato(nombre)}%` }}
            initial={{ width: '0%' }}
            transition={{ duration: .25, ease: "backInOut" }}
            animate={{ width: `${porcentaje}%` }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resultadoporcandidato;