import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Shop from './pages/Shop.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
// import CardExample from './CardExample.tsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error('missing publishable key')
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Routes>
        <Route path='/' element ={<App/>} />
        <Route path='/shop' element ={<Shop/>} />
        {/* <Route path = 'cardExample' element={<CardExample/>}/> */}
        {/* <Route path='/about' element ={<About/>} /> */}
        {/* <Route path='/suggest' element ={<SuggestProduct/>} /> */}
      </Routes>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
