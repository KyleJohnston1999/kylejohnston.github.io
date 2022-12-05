import React from 'react';
import PropTypes from 'prop-types';
import styles from './goal.module.scss';

const Goal = (props) => (
  <div className={styles.Goal}>
    <div className={styles.Container}> 
      <h1>
        {props.title}
      </h1>
      
      <p>
      { props.body}
      </p>
    </div>
  </div>
);

Goal.propTypes = {};

Goal.defaultProps = {};

export default Goal;
