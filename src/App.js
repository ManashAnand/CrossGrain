
import Home from './Component/Home/Home'
import './App.css';
import Farmer from './Component/MainPage/Farmer';
import Consumer from './Component/MainPage/Consumer';
import Order from '../src/Component/MainPage/Order'
import About from '../src/Component/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/farmer' element={<Farmer/>}/>
          <Route path='/consumer' element={<Consumer/>}/>
          <Route path='/consumer/order' element={<Order/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
