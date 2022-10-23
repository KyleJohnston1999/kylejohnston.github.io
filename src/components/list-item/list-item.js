import React from 'react';
import PropTypes from 'prop-types';
import styles from './list-item.module.scss';

const ListItem = (props) => (
  <div className={styles.ListItem}>
    { props.label }
  </div>
);

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;
