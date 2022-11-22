import {BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';
import ProfileDetails from './Components/profile/ProfileDetails';
import Nav from './Components/navBar/Nav';
import About from './Components/about/About'
import Home from './Components/home/Home';



function App() {
  return (
    <div className='app'>

    <BrowserRouter>
      <Nav/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfileDetails />} />
            <Route path="/about" element={<About />} />
      </Routes> 
    </BrowserRouter>

    </div>
  );
}

export default App;
