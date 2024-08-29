import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Venue from './pages/Venue';
import Events from './pages/Events';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="background-left"></div>
      <div className="background-right"></div>
      <Routes>
        <Route path="/MAIZ/" element={<Home />} />
        <Route path="/MAIZ/about" element={<About />} />
        <Route path="/MAIZ/menu" element={<Menu />} />
        <Route path="/MAIZ/venue" element={<Venue />} />
        <Route path="/MAIZ/events" element={<Events />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
