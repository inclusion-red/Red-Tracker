import React from 'react';
import './Row.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export function LinkRow({ className, children, to, delay }) {
  return (
    <Link to={to}>
      <div className={`${className || ''} row`} style={{animation: `fadein ${delay}`}}>
        { children }
      </div>
    </Link>
  )
}

Row.propTypes = {
  delay: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element
}

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
