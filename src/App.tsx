import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import MenuBarConfig from './MenuBarConfig.json';
import Home from './pages/Home/Home';
import MenuBar from './components/MenuBar/MenuBar';
import About from './pages/About/About';
import HomePageConfig from './pageConfigs/HomeContentConfig.json';
import AboutPageConfig from './pageConfigs/AboutContentConfig.json';
import ContactPageConfig from './pageConfigs/ContactContentConfig.jsx';
import Contact from './pages/Contact/Contact';
import Wave from './assets/Wave';


function App() {
  const [menuBarIndex, setMenuBarIndex] = useState(0);
  const pageEnter = (page: number) => {
    setMenuBarIndex(page);
  }

  return (
    <div className="App">
      
      <Home onEnter={pageEnter} config={HomePageConfig}/>

      {AboutPageConfig.pageContent.map((pageConfig, index) => {
        return <About onEnter={pageEnter} config={pageConfig} key={index}/>
      })}
      <Contact onEnter={pageEnter} config={ContactPageConfig.pageContent}/>
      <Wave />
      <MenuBar config={MenuBarConfig} index={menuBarIndex} setIndex={(index) => {setMenuBarIndex(index)}}/>
    </div>
  );
}

export default App;
