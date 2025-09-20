import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DestinationDetails from './components/DestinationDetails';


function App() {
  useEffect(() => {
    AOS.init({duration: 1000, once: true})
  })
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
        <Route path='/destinations/:id' element={<DestinationDetails/>}></Route>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
