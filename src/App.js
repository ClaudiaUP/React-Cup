
import './App.css';


import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {Navbarx} from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Arboles from "./Components/Arboles/Arboles";
// import Arbustos from "./Components/Arbustos/Arbustos";
// import Frutales from "./Components/Frutales/Frutales";
// import Palmeras from "./Components/Palmeras/Palmeras";
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
     {/* <Route path="/arboles" element={<Arboles/>}/>
     <Route path="/arbustos" element={<Arbustos/>}/>
     <Route path="/frutales" element={<Frutales/>}/>
     <Route path="/palmeras" element={<Palmeras/>}/> */}
     <Route path="/contacto" element={<Contacto/>}/>

     <Route path="*" element={<Navigate to="/"/>}/>

     
     
     </Routes>
    
    

   
    </BrowserRouter>
   
   
  );
}     
  
     
export default App;
