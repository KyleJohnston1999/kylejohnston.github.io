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
import Goal from './components/goal/goal';


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
              <Route  path='/goal-one' element={<Goal title="My book journey" body="I aim to read three new books per year.  I plan on finishing YDKJS by end of year.  I would like to start with Clean Code next year."/>} />
              <Route  path='/goal-two' element={<Goal title="But where's the practical aspect Kyle?!?" body="From next year, I would also like to start developing with my brother on his idea.  Hopefully there will be some good progress by the middle of next year."/>} />
            </Routes>
          </Container>
        </div>
      </div>

      
    </Router>
  );
}

export default App;
