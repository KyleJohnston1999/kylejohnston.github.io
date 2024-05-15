import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  active: boolean,
  title: string,
  onClick: () => void
}

const Button: FC<ButtonProps> = ({active, title, onClick}) => (
  <div className={`Button ${active && 'Active'}`} onClick={onClick}>
    <span>{title}</span>
  </div>
);

export default Button;
