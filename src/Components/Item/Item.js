import { Link } from "react-router-dom"
import './Item.css'

const Item = ({item}) => {

    return(
        <div className=  'col-3 m-5 card sombra'  >
          <img src={item.img} width= '80' className=' imgProductos' alt={item.nombre}/>
          <h4>{item.nombre}</h4>
          <p>Precio: <strong>${item.precio}</strong></p>
          <Link to = {`/detail/${item.id}`} className='boton'>Ver mas</Link>

        </div>
    )
}

export default Item