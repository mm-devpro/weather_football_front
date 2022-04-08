import React from "react";
import TopNav from "../top-nav/top-nav.component";
import DropdownBtn from "../dropdown/dropdown-btn.component";
import './header.styles.css'

const Header = () => {

  return (
    <div className="header">
      <h1> WEATHER YOU WIN OR YOU LOSE</h1>
      <div className="top-full-nav">
        <DropdownBtn />
        <TopNav />
      </div>
    </div>
  )
}

export default Header
