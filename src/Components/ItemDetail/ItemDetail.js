
import {Link, useNavigate} from "react-router-dom"
import './ItemDetail.css'
import {useContext, useState} from "react"
import ItemCount from "../ItemCount/ItemCount"
import {CartContext} from "../../context/CartContext"
import LowStockMsg from "./LowStockMsg"
// import Memo from "./Memo"

const ItemDetail = ({item}) =>{

    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState (1)
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate (-1)
    }

    const handleAgregar = ()=> {
        const newItem = {
            ...item,
            cantidad
        }

    agregarAlCarrito(newItem)    
    }

    // const fechaMontaje= useMemo(() => new Date().toLocaleString(), [])

    return(
        <div className=' contenedorPlantas'>
            <img src={item.img} className='imagen-planta' alt={item.nombre}/>         
            
            <div className='contenedorDetalle'>
            <h1 className='nombrePlanta'>{item.nombre} </h1> 
            <p className='descripcion'>{item.descripcion}</p>
            <p className='precio'>Precio: ${item.precio}</p>  
            </div>

            <div>
            { item.stock <= 5 && <LowStockMsg stock={item.stock}/>}

            {/* <p>{fechaMontaje}</p> */}
            {/* <Memo /> */}
            

            {
                isInCart(item.id)
                    ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                    :   <ItemCount 
                            max={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            handleAgregar={handleAgregar}
                        />
            }

            <br/>     
            <button onClick={handleVolver} className="boton">Volver</button>
            </div>
        </div>
    )
}

export default ItemDetail
