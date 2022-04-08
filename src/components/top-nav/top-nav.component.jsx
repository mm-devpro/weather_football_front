import React from 'react';
import {Nav, NavItem, NavLink} from "reactstrap";
import {NavLink as RRNavLink} from "react-router-dom";

import './top-nav.styles.css'

const TopNav = () => {
  return (
    <div className="top-nav-container">
      <Nav tabs className="top-nav">
        <NavItem>
          <NavLink tag={RRNavLink} activeClassName="active-nav-link" to="/team">
            Team Stats
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} activeClassName="active-nav-link" to="/league">
            League Stats
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} activeClassName="active-nav-link" to="/credits">
            Api Infos and Credits
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default TopNav;
