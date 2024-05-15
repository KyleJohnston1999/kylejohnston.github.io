import React, { FC, useEffect } from 'react';
import ArrowRaw from '../../icons/arrows/arrow-minimalistic.png'
import './Arrow.scss';
// import kute from 'kute.js';
interface ArrowProps {
  onClick: () => void,
  pointUp: boolean
}


const Arrow: FC<ArrowProps> = ({onClick, pointUp}) => {
  return (
  <div className={`Arrow ${pointUp ? '' : 'Down'}`} onClick={onClick}>
    <img className='ArrowIcon' src={ArrowRaw} />
  </div>
)};

export default Arrow;
