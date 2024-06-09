import React, { FC, useEffect, useRef, useState } from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import Logo from '../../components/Logo/Logo';
import TitleBody from '../../components/TitleBody/TitleBody';
import './Home.scss';
import Arrow from '../../components/Arrow/Arrow';
import Blob from '../../components/Blob/Blob';
import { includeDownArrowFunctionality } from '../../shared/index'


interface HomeProps {
  onEnter: (i: number) => void,
  config: any
}

const arrowClick = (direction: number) => {
  if (!window.visualViewport) return;
  const currentPage = window.visualViewport ? Math.floor(window.scrollY / window.visualViewport.height) : 0;
  const top = (currentPage+(1*direction))*window.visualViewport.height;
  window.scrollTo({top: top, behavior: 'smooth'});  
}

const Home: FC<HomeProps> = ({onEnter, config}) => 
 {

  const keydown = (event: KeyboardEvent) => {
    includeDownArrowFunctionality(event)
  }

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  
  useEffect(()=> {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          window.addEventListener('keydown', keydown);
          onEnter(0);
        } else {
          window.removeEventListener('keydown', keydown);
          setIsIntersecting(false);
        }
      });

      return () => observer.disconnect();
    }, {threshold: 0.5});
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);


  return (
  <div className={`Home ${isIntersecting && 'Show'}`} ref={ref}>
    <div className='Body'>
      <TitleBody config={config}/>
      <Blob />
    </div>
    <div className="Arrows">
      <Arrow onClick={() => arrowClick(1)} pointUp={false}/>
    </div>

  </div>
)};

export default Home;
