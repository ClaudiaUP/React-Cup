import {Link} from "react-router-dom"

const Item = ({item}) => {

    return(
        <div className = 'col-3 m-1'>
          <img src={item.img} width="60" alt={item.nombre}/>
          <h4>{item.nombre}</h4>
          {/* <p>{item.descripcion}</p> */}
          <p>Precio: <strong>${item.precio}</strong></p>
          <Link to= {'/detail/${item.id}'} className='btn btn-primary'>Ver mas</Link>

        </div>
    )
}

export default Item