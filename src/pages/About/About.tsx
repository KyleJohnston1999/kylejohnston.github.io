import React, { FC, useEffect, useRef, useState } from 'react';
import './About.scss';
import Arrow from '../../components/Arrow/Arrow';
import InfoBlob from '../../components/Blob/Blob';
import TitleBody from '../../components/TitleBody/TitleBody';
import InfoHeading from '../../components/InfoHeading/InfoHeading';
import InfoDescription from '../../components/InfoDescription/InfoDescription';
interface AboutProps {
  onEnter: (i: number) => void,
  config: any
}


const About: FC<AboutProps> = ({onEnter, config}) => 
{

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  
  const keydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      arrowClick(1);
    } else if (event.key ==='ArrowUp') {
      event.preventDefault();
      arrowClick(-1);
    }
  }

  useEffect(()=> {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          document.addEventListener("keydown", keydown);
          onEnter(1);
        } else {
          document.removeEventListener("keydown", keydown);
          setIsIntersecting(false);
        }
      });
    }, {threshold: 0.5});
    if (ref.current) {
      observer.observe(ref.current);
    }
    
  }, [])

  const arrowClick = (direction: number) => {
    if (!window.visualViewport) return;
    const currentPage = window.visualViewport ? Math.floor((window.scrollY + 50) / window.visualViewport.height) : 0;
    const top = (currentPage+(1*direction))*window.visualViewport.height;
    window.scrollTo({top: top, behavior: 'smooth'});  
  }
  
  return (
    <div className={`About ${isIntersecting && 'Show'}`} ref={ref}>
        <div className={`Body ${config.reverse && 'Reverse'}`}>
            <>
              <InfoDescription items={config.pageBody}/>
              <InfoHeading content={config.pageTitle}/>
            </>
           <InfoBlob />
        </div>
        <div className="Arrows">
          <Arrow onClick={() => arrowClick(1)} pointUp={false}/>
          <Arrow onClick={() => arrowClick(-1)} pointUp={true}/>
        </div>
  
       
    </div>
  );
}


export default About;
