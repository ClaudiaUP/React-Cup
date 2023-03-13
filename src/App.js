
import './App.css';


import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {Navbarx} from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contacto from "./Components/Contacto/Contacto";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";




function App() { 
  return (
  <div className='App'>
    <div>
        <BrowserRouter>

        <Navbarx/>

        <Routes>
        <Route path="/" element= {<ItemListContainer  />}/>
        <Route path="/productos/:categoriaId" element= {<ItemListContainer  />}/>
        <Route path="/detail/:itemId" element= {<ItemDetailContainer  />}/>

        <Route path="/contacto" element={<Contacto/>}/>

        <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>

        </BrowserRouter>


      </div>
    

  </div>
   
   
  );
}     
  
     
export default App;
