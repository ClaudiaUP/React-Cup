
const ItemCount = ( {max, cantidad, setCantidad, handleAgregar} ) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className="my-3">

            <button onClick={handleRestar}
            className={` ms-4 btn boton ${cantidad ===1 ?"btn btn-outline-danger"
                                       :"btn btn-outline-primary"}`}
             disable={cantidad===1}                          
              >                         
                -
            </button>

            <span className="mx-2">{cantidad}</span>

            <button onClick={handleSumar} 
            className={`btn boton ${cantidad ===max ?"btn btn-outline-danger"
            :"btn btn-outline-primary"}`}
             disable={cantidad===1}                          
            >                         
            
                +
            </button>

            <br/>
            <button onClick={handleAgregar} className="btn btn-success my-4">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount