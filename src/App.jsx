import { Route, Routes } from 'react-router-dom'
import './App.css' 
import HomePage from './pages/HomePage.jsx'
import Destination from './pages/Destination.jsx'
import Gallery from './pages/Gallery.jsx'
import SpacePackage from './pages/SpacePackage.jsx'
import { Contact } from 'lucide-react'
import About from './pages/About.jsx'

function App() { 

  return (
    <> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/package' element={<SpacePackage/>}/>
        <Route path='/conduct' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
