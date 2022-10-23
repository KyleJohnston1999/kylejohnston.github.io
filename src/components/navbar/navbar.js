import React from 'react';
import PropTypes from 'prop-types';
import styles from './navbar.module.scss';



const Navbar = (props) => (
  <div className={styles.Navbar}>
    { props.items }
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
