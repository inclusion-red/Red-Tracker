import React from 'react';
import './Row.css';
import PropTypes from 'prop-types';

export default function Row({ className, children }) {
  return (
    <div className={`${className} row`}>
      { children }
    </div>
  )
}

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element
}
