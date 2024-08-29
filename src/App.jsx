import './App.css'
import Header from './components/Header'
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/MAIZ/" element={<Home />} />
        <Route path="/MAIZ/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
