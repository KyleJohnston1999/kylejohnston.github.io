import React from 'react';
import PropTypes from 'prop-types';
import styles from './side-bar.module.css';
import ListItem from '../list-item/list-item';  
import list from './side-bar.config';
import Navbar from '../navbar/navbar';


const navBars = list.bars.map(navbar => {
return <Navbar items={ navbar.map(item => { return <ListItem label={ item.text } /> }) } />
});



const SideBar = () => (
  <div className={styles.SideBar}>
    { navBars }
  </div>
);

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar;
