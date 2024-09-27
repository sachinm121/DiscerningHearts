import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import Home from './pages/Home';
import InSight from './components/InSight';
import About from './components/About';
import UpComing from './components/UpComing';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/insight' element={<InSight />} />
        <Route path='/about' element={<About />} />
        <Route path='/upcoming' element={<UpComing />} />
      </Routes>
    </Router>
  );
}

export default App;
