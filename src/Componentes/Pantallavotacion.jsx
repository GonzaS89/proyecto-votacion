import React from 'react';
import { useState , useEffect } from 'react';
import Resultadoporcandidato from './Resultadoporcandidato';
import candidatos from '../candidatos.json';
// import Totaldevotantes from './Totaldevototantes';
import Votos from './Votos';
import '../Estilos/pantallavotacion.css'

const Pantallavotacion = () => {

    
    const [totalVotos , setTotalVotos] = useState(0);
    const [votosMilei , setVotosMilei] = useState(0);
    const [votosMassa , setVotosMassa] = useState(0);
    // const [condicionVotosTotales, setCondicionVotosTotales] = useState(false);

    const [id , setID] = useState('');

    useEffect(() => {
      setTotalVotos(votosMilei + votosMassa)
    },[votosMilei , votosMassa]);

    // useEffect(() => {
    //   totalVotos > 0 && setCondicionVotosTotales(true)
    // },[totalVotos])


    const recibirId = (id) => {
        setID(id);
        id === 'javier milei' ?
        setVotosMilei(votosMilei + 1): 
        setVotosMassa(votosMassa + 1);
      }


      const votosIngresadosMilei = e => {
        e.target.value === '' ?
        setVotosMilei(0) :
        setVotosMilei(parseInt(e.target.value))
      }

      const votosIngresadosMassa = e => {
        e.target.value === '' ? 
        setVotosMassa(0) :
        setVotosMassa(parseInt(e.target.value))
      }

      // useEffect(() => {
      //   totalVotos > 0 &&
      //   setCondicionVotosTotales(true);
      //   setTimeout(() => {
      //     setCondicionVotosTotales(false);
      //   }, 750);
      // },[totalVotos])


    return (
    <div className='bloque-resultados'>
      <div className={votosMassa > votosMilei || id === 'sergio massa' ? 'porcentajes-container ascenso' : 'porcentajes-container'}>
      {candidatos.map(candidato => (
          <Resultadoporcandidato 
          nombre={candidato.nombre} 
          imagen={candidato.imagen}
          totalVotos = {totalVotos}
          votosMilei = {votosMilei}
          votosMassa = {votosMassa}
          id = {id}/>
        ))}
      </div>
      {/* <p className={condicionVotosTotales ? 'votostotales zoomearvotostotales' : 'votostotales'}>{totalVotos}</p> */}
        <>
          <div className='boletas-container'>
              {candidatos.map (candidato => (
                <Votos 
                boleta = {candidato.boleta}
                nombreCandidato = {candidato.nombre}
                enviarId = {recibirId}
                enviarTotalVotos = {totalVotos}/>
              ))}
          </div>
        </>
        <>
          <input type="numer" onChange={votosIngresadosMilei}/>
          <input type="numer" onChange={votosIngresadosMassa}/>
        </>
      </div>
    )
}

export default Pantallavotacion