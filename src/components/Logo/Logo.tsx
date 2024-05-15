import React, { FC } from 'react';
import LogoSVG from './Logo.svg';
import './Logo.scss';

interface LogoProps {}

const Logo: FC<LogoProps> = () => (
  <div className='Logo'>
    <img src={LogoSVG} />
  </div>
);

export default Logo;
