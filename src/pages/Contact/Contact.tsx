import React, { FC, useEffect, useRef, useState } from 'react';
import './Contact.scss';
import Arrow from '../../components/Arrow/Arrow';
import InfoDescription from '../../components/InfoDescription/InfoDescription';
import InfoHeading from '../../components/InfoHeading/InfoHeading';

interface ContactProps {
  onEnter: (i: number) => void,
  config: any
}

const Contact: FC<ContactProps> = ({onEnter, config}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  
  const keydown = (event: KeyboardEvent) => {
    if (event.key ==='ArrowUp') {
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
          onEnter(2);
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
    const currentPage = window.visualViewport ? Math.floor(window.scrollY / window.visualViewport.height) : 0;
    const top = (currentPage+(direction * 1))*window.visualViewport.height;
    window.scrollTo({top: top, behavior: 'smooth'});  
  }
  
  return (
      <div className={`Contact ${isIntersecting && 'Show'}`} ref={ref}>
        <div className="Body ">
        <div className={`Body ${config.reverse && 'Reverse'}`}>
            <>
              <InfoHeading content={config.pageTitle}/>
              <InfoDescription items={config.pageBody}/>
            </>
           {/* <InfoBlob /> */}
        </div>
        </div>
        <div className="Arrows">
          <Arrow onClick={() => arrowClick(-1)} pointUp={true}/>
        </div>
      </div>
  
)};

export default Contact;
