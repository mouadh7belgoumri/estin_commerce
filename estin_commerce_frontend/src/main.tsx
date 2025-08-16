import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductDetails from './pages/ProductDetailsPage.tsx'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Shop from './pages/Shop.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
// import CardExample from './CardExample.tsx'

try {
  console.log(import.meta.env.VITE_CLERK_DEV_PUBLISHABLE_KEY);
} catch (error) {
  console.error(error,"missing publishable key of clerk");
  
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_DEV_PUBLISHABLE_KEY}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/shop' element={<Shop />} />
          <Route path = '/product_details' element={<ProductDetails/>}/>
          {/* <Route path='/about' element ={<About/>} /> */}
          {/* <Route path='/suggest' element ={<SuggestProduct/>} /> */}
        </Routes>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
