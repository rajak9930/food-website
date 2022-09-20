import React, { useState } from "react";
import { Link } from "react-scroll";
import '../Components/Style.css'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
    window.addEventListener("scroll", changeBackground);
  };
  return (
    <>
     <nav className={nav ? " nav active" : "nav"}>
      <Link to="main"  className="logo" smooth={true} duration={2000}/>
      <h6>BURGER HOUSE</h6>
      <input type='checkbox' id='menu-btn' className="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
             </label>
       <ul className="menu">
        <li><Link to="header" smooth={true} duration={2000}>HOME</Link> </li>
        <li><Link to="ourstory" smooth={true} duration={2000}>MENU</Link> </li>
        <li><Link to="today" smooth={true} duration={2000}>OUR STORY</Link> </li>
        <li><Link to="Contact" smooth={true} duration={2000}>CONTACT</Link> </li>
       </ul>
     </nav>
    </>
  );
};

export default Navbar;
