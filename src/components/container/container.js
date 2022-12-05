import React from 'react';
import PropTypes from 'prop-types';
import styles from './container.module.scss';
import AboutMe from '../about-me/about-me';

// document.body.appendChild(<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>)
// var typed = new Typed(".typing", {
//   strings: ['hello world', 'potato'],
//   typeSpeed: 100,
//   backSpeed: 80,
//   loop: true
// })

const Container = (props) => (
  <div className={styles.Container}>
    { props.children }
  </div>
);

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
