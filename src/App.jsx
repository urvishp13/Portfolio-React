import './App.css'

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}