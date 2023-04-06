import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import { Navbarx } from "../Components/NavBar/NavBar";
import Servicios from "../Components/Servicios/Servicios";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../Components/Cart/Cart";
import { Routes, Route, Navigate } from 'react-router-dom'
import Checkout from "../Components/Checkout/Checkout";


const PrivateRoutes = () => {

    return (
        <>
            <Navbarx />
            {/* RUTAS PRIVADAS */}
            <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/productos/:categoriaId" element={ <ItemListContainer /> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
                <Route path="/cart" element={ <Cart /> } />
                <Route path="/checkout" element={ <Checkout /> } />
                <Route path="/servicios" element={ <Servicios /> } />
                <Route path="*" element={ <Navigate to="/" /> }/>
            </Routes>
        </>
    )
}

export default PrivateRoutes