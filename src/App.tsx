import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import { Contacto } from './components/Contact/Contac'
import NotFound from './components/404/NotFound'

import './App.css'



function App() {


  return (
    <BrowserRouter>
    {/* 1. La Navbar (Siempre visible) */}
      <nav className="p-4 bg-indigo-600 text-white flex gap-4 shadow-lg">
        <Link to="/" className="hover:underline font-bold">Inicio</Link>
        <Link to="/contacto" className="hover:underline font-bold">Contacto</Link>
      </nav>

    {/* 2. El Área de Contenido (Aquí cambian los componentes) */}
    <div className='p-10'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        {/* 404 - Si no encuentra la ruta */}
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>

    </BrowserRouter>
  )
}

export default App
