
import './App.css';


import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {Navbarx} from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Arboles from "./Components/Arboles/Arboles";
import Arbustos from "./Components/Arbustos/Arbustos";
import Flores from "./Components/Flores/Flores";
import Pinterior from "./Components/Pinteriores/Pinteriores";
import Suculentas from "./Components/Suculentas/Suculentas";
import Contacto from "./Components/Contacto/Contacto";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";




function App() { 
  return (
   <BrowserRouter>

    <Navbarx/>

    <Routes>
     <Route path="/" element= {<ItemListContainer  />}/>
     <Route path="/productos/:categoriaId" element= {<ItemListContainer  />}/>
     <Route path="/detail/:itemId" element= {<ItemDetailContainer  />}/>
     <Route path="/arboles" element={<Arboles/>}/>
     <Route path="/arbustos" element={<Arbustos/>}/>
     <Route path="/flores" element={<Flores/>}/>
     <Route path="/pinterior" element={<Pinterior/>}/>
     <Route path="/suculentas" element={<Suculentas/>}/>
     <Route path="/contacto" element={<Contacto/>}/>

     <Route path="*" element={<Navigate to="/"/>}/>

     
     
     </Routes>
    
    

   
    </BrowserRouter>
   
   
  );
}     
  
     
export default App;
