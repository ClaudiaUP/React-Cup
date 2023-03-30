import LoginScreen from "../Components/LoginScreen/LoginScreen";
import { Routes, Route, Navigate } from 'react-router-dom'

const PublicRoutes = () => {

    return (
        <>
            <Routes> 
                {/* RUTAS PUBLICAS */}
                <Route path="/login" element={ <LoginScreen /> }/>
                <Route path="*" element={ <Navigate to="/login" /> }/>
            </Routes>
        </>
    )
}

export default PublicRoutes