import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoryList from './components/CategoryList/CategoryList';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';



const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a mi Tienda!'} />} />
          <Route path="/juego/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:categoria" element={<CategoryList />} />
          <Route path="*" element={<ItemListContainer greeting={'Bienvenidos a mi Tienda!'} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

/* function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/">
            <ItemListContainer greeting={'Bienvenidos a mi Tienda!'} />
          </Route>
        </Routes>
        <Routes>
          <Route exact path="/juego/:id">
            <ItemDetailContainer />
          </Route>
        </Routes>
           
      </BrowserRouter>  
    </div>
  );
} */

export default App;
