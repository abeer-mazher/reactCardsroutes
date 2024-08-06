import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Product/:id' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
