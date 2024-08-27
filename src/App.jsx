import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className="background-left"></div>
      <div className="background-right"></div>
      <Header />
      <Routes>
        <Route path="/MAIZ" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
