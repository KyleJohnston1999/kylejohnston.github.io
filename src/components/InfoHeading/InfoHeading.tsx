import React, { FC } from 'react';
import './InfoHeading.scss';
import IInfoHeading from './IInfoHeading';

interface InfoHeadingProps {
  content: IInfoHeading
}

const InfoHeading: FC<InfoHeadingProps> = ({content}) => (
  <div className='InfoHeading'>
    <h1>
      {content.titleLight} <br />
      <strong>{content.titleHeavy}</strong>
    </h1>
  </div>
);

export default InfoHeading;
