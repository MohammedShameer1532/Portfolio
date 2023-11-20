import nav from '../assets/nav.svg';
import './navbar.css';
import { Link } from 'react-router-dom';
import "../App.css";
import { useState } from 'react';

const MenuData = [
  {
    title: "Home",
    to: "/",
    cName: "nav-links",
    icon: "fa-solid fa-house-user"
  },
  {
    title: "About",
    to: "/about",
    cName: "nav-links",
    icon: "fa-solid fa-circle-info"
  },
  {
    title: "Project",
    to: "/project",
    cName: "nav-links",
    icon: "fas fa-project-diagram"
  },
  {
    title: "Resume",
    to: "/resume",
    cName: "nav-links",
    icon: "fa-solid fa-file"
  },
  {
    title: "Contact",
    to: "/contact",
    cName: "nav-links",
    icon: "fa-solid fa-address-book"
  }
];
const Navbar = () => {
  const [click, SetClick] = useState(false);
  const handleClick = () => {
    SetClick(!click);
  }
  return (
    <div>
      <nav className='NavbarItems'>
        <h1><img src={nav} alt='' /></h1>
        <div onClick={handleClick} className='menu-icons'>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className={item.cName}>
                <i className={item.icon} /> {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}


export default Navbar;

