import React, { FC } from 'react';
import './MenuBarItem.scss';

interface MenuBarItemProps {
  active: boolean,
  title: string,
  onClick: () => void
}

const MenuBarItem: FC<MenuBarItemProps> = ({active, title, onClick}) => (
  <div className={`MenuBarItem ${active && 'Active'}`} onClick={onClick}>
    {title}
  </div>
);

export default MenuBarItem;

