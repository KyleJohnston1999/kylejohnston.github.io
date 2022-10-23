import logo from './doge-construction.png';
import Navbar from './components/navbar/navbar';
import './App.scss';
import SideBar from './components/side-bar/side-bar';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <div class="body">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Much construction. Such wow.
          </p>
        </header>
      </div>
      
    </div>
  );
}

export default App;
