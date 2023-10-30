import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  SingleProduct,
  Cart,  
  Error,
  Products,
} from './pages';

function App() {
  return (
    <Router>
        <Navbar /> 
        <Sidebar />
        <Routes>  
          <Route path='/' exact element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />                
          <Route path='*' element={<Error />} /> 
        </Routes>
        <Footer />
      </Router>
  ) 
} 

export default App
 