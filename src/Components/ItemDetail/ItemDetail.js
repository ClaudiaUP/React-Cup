
import {useNavigate} from "react-router-dom"
import './ItemDetail.css'

const ItemDetail = ({item}) =>{

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate (-1)
    }

    return(
        <div className=' contenedorPlantas'>
            <img src={item.img} className='imagen-planta' alt={item.nombre}/>         
            
            <div className='contenedorDetalle'>
            <h1 className='nombrePlanta'>{item.nombre} </h1> 
            <p className='descripcion'>{item.descripcion}</p>
            <p className='precio'>Precio: ${item.precio}</p>  
            <button onClick={handleVolver} className="boton">Volver</button>
            </div>
        </div>
    )
}

export default ItemDetail
