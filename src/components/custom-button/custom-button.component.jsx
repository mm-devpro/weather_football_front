import React from 'react';
import {Link} from "react-router-dom";

import './custom-button.styles.css'

const CustomButton = ({children, ...otherProps}) => {

  /*
 * ////////////////////////////////////////
 * ///set CustomButton as a React LINK with "to" props ///
 * ///////////////////////////////////////
 */
  if (otherProps.to) {
    return (
      <Link
        to={otherProps.to}
        exact={otherProps.exact}
        {...otherProps}
      >
        {children}
      </Link>
    )
  }
  /*
 * ////////////////////////////////////////
 * /// or as a normal button ///
 * ///////////////////////////////////////
 */
  else {
    return (
      <button
        {...otherProps}
      >
        {children}
      </button>
    )
  }

};

export default CustomButton;
