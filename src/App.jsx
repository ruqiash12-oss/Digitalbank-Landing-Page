import Layout from './components/Layout'
import HeroSection from './pages/HeroSection'
import Features from './pages/Features'
import Articles from './pages/Articles'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
  
      <Route path="/" element={<Layout />}>
        
        
        <Route index element={<Home />} />
        <Route path="about" element={<HeroSection />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Features isPage={true} />} />

        <Route path="careers" element={<Articles isPage={true} />} />

        
      </Route> 
    </Routes>
  )
}

export default App
