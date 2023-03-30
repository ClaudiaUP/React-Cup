
import './NavBar.css' 
import logo from './logo vivero.jpg'
import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'






export const Navbarx =() => {
  const {user, logout} =useContext(LoginContext)
  return(
      
      <header className="header">
        <div className= "header_container">
          <div>
          <h1 className="titulo" >Vivero "La Araucaria"</h1>
          </div>
          
          
          

           <nav className ="navBar">
           <Link to="/">
          <img src={logo} alt="logo" className="header_logo"/>
          </Link>
           
              <Link to="/" className = "navbar_link">Home</Link>
              <Link to="/productos/arboles" className = "navbar_link">Arboles</Link>
              <Link to="/productos/arbustos" className = "navbar_link">Arbustos</Link>
              <Link to="/productos/frutales" className = "navbar_link">Frutales</Link>
              <Link to="/productos/palmeras" className = "navbar_link">Palmeras</Link>
              <Link to="/contacto" className = "navbar_link">Contacto</Link>
              
           <CartWidget />
           </nav>

        
        </div>

        <div className = 'login-state container'>
          <h6>Bienvenido {user.email}</h6>
          <button className= 'btn btn-danger' onClick= {logout}>Logout</button>
        </div>
      </header>
  )
}
        