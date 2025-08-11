import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<App/>} />
        {/* <Route path='/shop' element ={<Shop/>} /> */}
        {/* <Route path='/about' element ={<About/>} /> */}
        {/* <Route path='/suggest' element ={<SuggestProduct/>} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
