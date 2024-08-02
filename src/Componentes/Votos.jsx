import React , {useState , useEffect} from 'react';
import '../Estilos/votos.css'

const Votos = (props) => {

    const [votoClickeado , setVotoClickeado] = useState(false);

    useEffect(() => {
        votoClickeado &&
        setTimeout(() => {
            setVotoClickeado(false)
        }, 100);
    },[votoClickeado])

    const enviarVotos = () => {
        return (props.enviarId(props.nombreCandidato))
    }

    return (
        <div className={votoClickeado ? 'boleta-container votoPresionado' : 'boleta-container'}>
            <img 
            onClick={()=>enviarVotos(props.children , setVotoClickeado(true))}
            src={props.boleta} alt="" />
        </div>
    )
}

export default Votos