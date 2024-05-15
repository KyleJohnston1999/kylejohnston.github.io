import React, { FC, useState } from 'react';
import './InfoNav.scss';
import InfoNavItem from '../InfoNavItem/InfoNavItem';
import IInfoNavItem from '../InfoNavItem/IInfoNavItem';

interface InfoNavProps {
    infoNavItems: IInfoNavItem[]
}

const InfoNav: FC<InfoNavProps> = ({infoNavItems}) => 
{
  const [activeIndex, setActiveIndex] = useState(0);
  return (
  <div className='InfoNav Indicator'>
    {infoNavItems.map((infoNavItem, index) => 
    <InfoNavItem Icon={infoNavItem.Icon} 
    active={activeIndex === index} 
    onClick={()=>setActiveIndex(index)}/>)}
  </div>
)};

export default InfoNav;
