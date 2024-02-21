import React from 'react'
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar'



const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/intern-assignment" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<Dashboard />} />
          <Route path="/comment" element={<Dashboard />} />
          <Route path="/analytics" element={<Dashboard />} />
          <Route path="/product" element={<Dashboard />} />
          <Route path="/productList" element={<Dashboard />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    
  )
}


export default App
