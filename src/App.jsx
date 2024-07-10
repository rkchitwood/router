import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack from './Snack';
import './App.css'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine/>}/>
          <Route path='/:snack' element={<Snack/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
