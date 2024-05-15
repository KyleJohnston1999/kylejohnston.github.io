import React, { FC } from 'react';
import IInfoDescription from './IInfoDescription';
import './InfoDescription.scss';


interface InfoDescriptionProps {
  items: IInfoDescription[]
}

const InfoDescription: FC<InfoDescriptionProps> = ({items}) => (
  <div className='InfoDescription'>
    {items.map((item, index)=> {
      return (
        <div className='Container' key={index}>
          {item.icon ? <img src={item.icon} /> : ''}

          <div className="Text">
            {item.link ? 
              <a href={item.link}>{item.title}</a> :
              <h2>{item.title}</h2>
            }
            <p>{item.body}</p>
          </div>
          
        </div>
      )
    })}
  </div>
);

export default InfoDescription;
