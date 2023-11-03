import React from 'react'
import Reg from './Pages/Reg'
import { Route, Routes } from 'react-router-dom'
import Log from './Pages/Log'
import Homs from './Pages/Homs'
import Products from './Pages/Products'
import Home from './Components/Home'
import ProductDetails from './Pages/ProductDetails'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/Register' element={<Reg/>}></Route>
        <Route path='/login' element={<Log/>}></Route>
        <Route path='/' element={<Homs/>}> </Route>
        <Route path='/product' element={<Products/>}></Route>
        <Route path='/productDetail/:id' element={<ProductDetails/>}></Route>
       
      </Routes>
    </div>
  )
}

export default App
