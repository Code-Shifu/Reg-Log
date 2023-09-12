import React from 'react'
import Reg from './Pages/Reg'
import { Route, Routes } from 'react-router-dom'
import Log from './Pages/Log'

function App() {
  return (
    <div>
    
      <Routes>
        <Route path='/register' element={<Reg/>}></Route>
        <Route path='/login' element={<Log/>}></Route>
      </Routes>
    </div>
  )
}

export default App
