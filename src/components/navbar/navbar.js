import React from 'react';
import PropTypes from 'prop-types';
import styles from './navbar.module.scss';
import list from './navbar.config';
import ListItem from '../list-item/list-item';


const listItems = list.items.map(item => <ListItem label={ item.text } />)

const Navbar = () => (
  <div className={styles.Navbar}>
    { listItems }
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
