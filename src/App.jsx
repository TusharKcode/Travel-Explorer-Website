import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  
  return (
    <>
    <Navbar/>
      <Routes>
        {/* Default route */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
