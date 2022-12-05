import React from 'react';
import PropTypes from 'prop-types';
import styles from './side-bar.module.scss';
import ListItem from '../list-item/list-item';  
import list from './side-bar.config';
import Navbar from '../navbar/navbar';


const navBars = list.bars.map((navbar,index)=> {
return <Navbar key={index} items={ navbar.map(listitem => { return <ListItem key={ listitem.text } item={ listitem } /> }) } />
});



const SideBar = () => (
  <div className={styles.SideBar}>
    { navBars }
  </div>
);

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar;
