
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import {Link} from "react-router-dom"
import './Cart.css'

const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>No tienes productos agregados</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Carrito</h2>
            <h5 className= 'ubicarDerecha'>Precio</h5>
            <hr/>

            {
                cart.map((prod) => (
                    <div key={prod.id} className="contenedorProd">
                      <img src={prod.img} width='150' alt={prod.name}/>
                        <div className='contenedorDetalle'>
                        <h4>{prod.nombre}</h4>
                        <p>Precio unitario: ${prod.precio} </p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <button 
                            onClick={() => eliminarDelCarrito(prod.id) } 
                            className="btn btn-danger"
                        >
                         <BsFillTrashFill/>   
                        </button>
                        </div>
                        <div className='ubicarDerecha'>
                        <p className='ubicarDerecha2'>Total: ${prod.precio * prod.cantidad}</p>
                        </div>
                        <hr/>
                        
                    </div>
                ))
            }

            <h4 className='ubicarDerecha'>TOTAL: ${totalCompra().toFixed(2)}</h4>
            <button onClick={vaciarCarrito} className="btn btn-danger m-3">Vaciar carrito</button>
            <Link className= "btn btn-success" to ="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart