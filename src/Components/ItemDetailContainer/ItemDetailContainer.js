import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- referencia sincrónica
        const docRef = doc(db, "productos", itemId)
        // 2.- llamado asincrónica
        getDoc(docRef)
            .then((doc) => {
        setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => setLoading(false))

    }, [itemId])

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer