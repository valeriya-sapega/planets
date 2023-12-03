import React from "react";
import './NavBar.scss'
import data from '../../../data.json';
import { NavBarProps, Planet } from "../../interfaces";

const NavBar: React.FC<NavBarProps> = ({ handleClick }) => {

  const whatPlanet = (n: string) => {
    handleClick(n)
  }

  return (
    <nav>
        <h1 className='logo'>The Planets</h1>
        <div className='links'>
            {data.map((el: Planet, i:number) => <h3 className='link h3' key={i} onClick={()=>whatPlanet(el.name)}>{ el.name }</h3> )}
        </div>
    </nav>);
  

};

export default NavBar