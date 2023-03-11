
import './NavBar.css'
import logo from './logo vivero.jpg'
import {CartWidget} from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom'






export const Navbarx =() => {
  return(
      
      <header className="header">
        <div className= "header_container">
          <div>
          <h1 className="titulo" >Vivero "La Araucaria"</h1>
          </div>
          
          
          

           <nav className ="NavBar">
           <Link to="/">
          <img src={logo} alt="logo" className="header_logo"/>
          </Link>
           
              <Link to="/" className = "navbar_link">Home</Link>
              <Link to="/productos/arboles" className = "navbar_link">Arboles</Link>
              <Link to="/productos/arbustos" className = "navbar_link">Arbustos</Link>
              <Link to="/productos/frutales" className = "navbar_link">Frutales</Link>
              <Link to="/productos/pinterior" className = "navbar_link">Plantas interior</Link>
              <Link to="/productos/palmeras" className = "navbar_link">Palmeras</Link>
              <Link to="/contacto" className = "navbar_link">Contacto</Link>
              
           <CartWidget />
           </nav>

        
        </div>
      </header>
  )
}
        