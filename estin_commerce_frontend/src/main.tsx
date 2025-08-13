import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Shop from './pages/Shop.tsx'
// import CardExample from './CardExample.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<App/>} />
        <Route path='/shop' element ={<Shop/>} />
        {/* <Route path = 'cardExample' element={<CardExample/>}/> */}
        {/* <Route path='/about' element ={<About/>} /> */}
        {/* <Route path='/suggest' element ={<SuggestProduct/>} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
