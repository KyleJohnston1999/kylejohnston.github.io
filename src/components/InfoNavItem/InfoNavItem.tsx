import React, { FC } from 'react';
import './InfoNavItem.scss';

interface InfoNavItemProps {
  Icon: FC,
  active: boolean,
  onClick: () => void
}

const InfoNavItem: FC<InfoNavItemProps> = ({Icon, active, onClick}) => (
  <div className={`InfoNavItem ${active && 'Active'}`} onClick={onClick}>
    {/* <img src={icon} /> */}
    <Icon />

  </div>
);

export default InfoNavItem;
