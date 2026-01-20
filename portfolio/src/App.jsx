import { useState } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { Home } from './pages/home'
import { Toaster } from './components/ui/toaster'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster/>
    <BrowserRouter>
      <Routes>
         <Route index element={<Home/>}/>

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
