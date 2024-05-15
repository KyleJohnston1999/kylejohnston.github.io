import React, { FC } from 'react';
import ITitleBody from './ITitleBody';
import './TitleBody.scss';

interface TitleBodyProps {
  config: ITitleBody
}

const TitleBody: FC<TitleBodyProps> = ({config}) => (
  <div className='TitleBody'>
    <h1>
      {config.title_1} <br />
      <strong>{config.title_2}</strong>
    </h1>

    <p>
      {config.body}  
    </p>
  </div>
);

export default TitleBody;
