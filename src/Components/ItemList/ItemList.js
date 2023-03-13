import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({items}) => {

    return (

        <div>
         <h2 className= 'centrado'>Catálogo de Plantas</h2>
            <hr className= 'lineaGruesa'/>

            <div  className= 'row my-1 '>
                {items.map((producto) => <Item key={producto.id} item={producto}/>)}
             </div>      
        </div>
    )
}

export default ItemList