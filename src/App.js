import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import Home from './pages/Home';
import About from './components/About';
import UpComing from './components/UpComing';
import OurGoal from './components/OurGoal';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/ourgoal' element={<OurGoal />} />
        <Route path='/about' element={<About />} />
        <Route path='/upcoming' element={<UpComing />} />
      </Routes>
    </Router>
  );
}

export default App;
