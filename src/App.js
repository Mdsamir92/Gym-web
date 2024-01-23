import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Membership from "./components/Membership"
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Training from './components/Training';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './components/Contact';

AOS.init();

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar />
        <Routes>
         
          <Route exact path='/' element={<Hero/>} />
          <Route exact path='/membership' element={<Membership />} />
          <Route exact path='/training' element={<Training />} />
          <Route exact path='/contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>
      
        
      <Footer/>
    </div>
  );
}

export default App;
