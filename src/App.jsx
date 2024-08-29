import './App.css'
import Header from './components/Header'
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './assets/pages/Menu';
import Venue from './assets/pages/Venue';
import Events from './assets/pages/Events';

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
