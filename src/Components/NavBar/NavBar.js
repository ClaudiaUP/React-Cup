
import './NavBar.css'
import logo from './logo vivero.jpg'
import {CartWidget} from "../CartWidget/CartWidget"






export const Navbarx =() => {
  return(
      
      <header className="header">
        <div className= "header_container">
          <div>
          <h1 className="titulo" >Vivero "La Araucaria"</h1>
          </div>
          

           <nav className ="NavBar">
           <img src={logo} alt="logo" className="header_logo"/>
              <a href="#" className = "navbar_link">Home</a>
              <a href="#" className = "navbar_link">Nuestras plantas</a>
              <a href="./Servicios.js" className = "navbar_link">Servicios</a>
              <a href="#" className = "navbar_link">Contactos</a>
           <CartWidget />
           </nav>

        
        </div>
      </header>
  )
}
        