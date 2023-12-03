import React, { useState } from "react";
import './NavBar.scss'
import data from '../../../data.json';
import { NavBarProps, Planet } from "../../interfaces";
import menuIcon from '../../icons/icon-hamburger.svg';
import chevronIcon from '../../icons/icon-chevron.svg';
import { buttonBackgroundColor } from '../../Colors'
import { useMediaQuery } from "react-responsive";


const NavBar: React.FC<NavBarProps> = ({ handleClick }) => {

  const [isClicked, setIsClicked] = useState(false)

  const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const whatPlanet = (n: string) => {
    handleClick(n)
  }

  return (
    <nav>
      <h1 className='logo'>The Planets</h1>

      {isDesktopOrTablet && <ul className='nav-menu'>
            {data.map((el: Planet, i:number) => <li className='nav-item h3' key={i} onClick={()=>whatPlanet(el.name)}>{ el.name }</li> )}
      </ul>}

      {isMobile &&
        <>      
          <img
            className="menu-icon"
            src={menuIcon}
            alt="menu icon"
            onClick={() => setIsClicked(!isClicked)}
            style={{opacity: isClicked ? '0.6' : '1'}}  
          />
        {isClicked && 
          <ul className='nav-menu'>
            {data.map((el: Planet, i: number) => (
              <li
                className='nav-item h3'
                key={i}
                onClick={() => {
                  whatPlanet(el.name);
                  setIsClicked(!isClicked)
                }}>
                <span
                  className="list-dot"
                  style={{backgroundColor: buttonBackgroundColor[el.name]}}
                ></span>
                <span className="item-name">{el.name}</span>
                <img className='chevron-icon' src={chevronIcon} alt="chevron icon" />
              </li>))}
          </ul>
        }
        </>}
    </nav>);
  

};

export default NavBar