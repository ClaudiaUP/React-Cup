import './ItemListContainer.scss'
import {useState} from "react"
import {useEffect} from "react"
import {pedirDatos} from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'





const ItemListContainer = () =>{

    const[productos, setProductos]=useState([])
    const [loading, setLoading]=useState(true)

    const {categoriaId}= useParams()

    
    console.log(categoriaId)
   
    useEffect (() => { 
      setLoading(true)

    pedirDatos ()
    .then ((response) => {
        if(!categoriaId){
        setProductos (response) 

        }else{
            setProductos (response.filter((prod)=> prod.categoria ===categoriaId))
        }
        

    })
    .catch ((error) => {
        console.log (error)
       
    })

 .finally (() => {
    setLoading(false)
     })

}, [categoriaId])

    return(
        <div className = "contenedor">
        {
            loading
            ?<h2>Cargando</h2>
            : <ItemList items={productos}/>
        }
        

        </div>
    )
    }

           

export default ItemListContainer