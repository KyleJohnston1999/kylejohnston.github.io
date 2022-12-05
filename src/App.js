import logo from './doge-construction.png';
import Navbar from './components/navbar/navbar';
import './App.scss';
import SideBar from './components/side-bar/side-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate as Nav
} from 'react-router-dom';
import Container from './components/container/container';
import AboutMe from './components/about-me/about-me';
import Qualifications from './components/qualifications/qualifications';


function App() {
  
  return (
    <Router>
      
      <div className="App">
        <SideBar></SideBar>
        <div className="divider" />
        <div className="body">
          <Container>
            <Routes>
              <Route  path='/' element={<AboutMe />} />
              <Route  path='/about' element={<AboutMe />} />
              <Route  path='/qualifications' element={<Qualifications />} />
            </Routes>
          </Container>
        </div>
      </div>

      
    </Router>
  );
}

export default App;
