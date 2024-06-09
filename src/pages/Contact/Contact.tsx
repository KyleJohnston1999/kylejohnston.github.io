import React, { FC, useEffect, useRef, useState } from 'react';
import './Contact.scss';
import Arrow from '../../components/Arrow/Arrow';
import InfoDescription from '../../components/InfoDescription/InfoDescription';
import InfoHeading from '../../components/InfoHeading/InfoHeading';
import { arrowClick, includeUpArrowFunctionality } from '../../shared';
import Blob from '../../components/Blob/Blob';

interface ContactProps {
  onEnter: (i: number) => void,
  config: any
}

const Contact: FC<ContactProps> = ({onEnter, config}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  
  const keydown = (event: KeyboardEvent) => {
    includeUpArrowFunctionality(event)
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
  
  return (
      <div className={`Contact ${isIntersecting && 'Show'}`} ref={ref}>
        <div className="Body ">
        <div className={`Body ${config.reverse && 'Reverse'}`}>
            <>
              <InfoHeading content={config.pageTitle}/>
              <InfoDescription items={config.pageBody}/>
              <Blob />
            </>
           
        </div>
        </div>
        <div className="Arrows">
          <Arrow onClick={() => arrowClick(-1)} pointUp={true}/>
        </div>
      </div>
  
)};

export default Contact;
