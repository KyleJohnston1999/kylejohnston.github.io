import React from 'react';
import PropTypes from 'prop-types';
import styles from './list-item.module.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';



const ListItem = (props) => {
  return (
    <div className={styles.ListItem}>
        
        <NavLink to={ props.item.href }
          className={ ({isActive}) => (isActive ? styles.active : '') }
          >{ props.item.text }</NavLink>
    </div> 
  );
};

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;
