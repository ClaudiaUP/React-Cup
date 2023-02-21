

import Badge from 'react-bootstrap/Badge'
import './CartWidget.scss'

export const CartWidget = () => {
  return (
      <div className='carritoHeader'>
          <img src='./imagenes/carrito.jpg' alt="Carrito" className='carritoTamanio'/> 
          <Badge bg="danger" className='carritoNumero'>7</Badge>
          <span className="visually-hidden">unread messages</span>
      </div>
  )
}

 


//  export const CartWidget = () =>{
//    return(
//      <div>
//      <img scr='./imagenes/carrito.jpg' alt="carrito" className= "carrito"/>
//      </div>
//    )

//  }


 