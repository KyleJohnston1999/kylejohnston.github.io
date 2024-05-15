import React, { FC, useEffect, useState } from 'react';
import Button from '../Button/Button';
import './MenuBar.scss';
// import Config from './MenuBar.json';
import MenuBarItem from '../MenuBarItem/MenuBarItem';
import IMenuBar from './IMenuBar';
interface MenuBarProps {
  config: IMenuBar,
  index: number,
  setIndex: (i: number) => void
}


// const Buttons = Config.buttons;

const MenuBar: FC<MenuBarProps> = ({config, index, setIndex}) => {

  const scrollToSection = (i: number) => {
    
    if (!window.visualViewport) return;
      if (i === 2) {
        window.scrollTo({top: document.body.offsetHeight - window.visualViewport.height, behavior: 'smooth'});
      } else {
        window.scrollTo({top: window.visualViewport.height * i, behavior: 'smooth'});
      }
      
      setIndex(i);
  }

  const menuBarItems = config.menuBarItems;
  return (
  <div className='MenuBar Indicator'>
    {
      menuBarItems.map((item, i) => <MenuBarItem key={i} active={index === i} title={item.title} onClick={() => scrollToSection(i)} />)
    }
  </div>
)};

export default MenuBar;
