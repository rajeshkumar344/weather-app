
// import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
// import Login from './components/Login';
// import Product from './components/Product';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Search/>
     
      {/* <Link to="/product">product</Link> */}
      {/* <Routes>
      <Route path='/' element={<Login/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes> */}
   
    </div>
  )
}

export default App;
