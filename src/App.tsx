import React, { useState } from 'react'
import data from '../data.json'
import { Planet } from './interfaces'
import NavBar from './components/NavBar/NavBar'
import PlanetInfo from './components/PlanetInfo/PlanetInfo'
import PlanetCards from './components/PlanetCards/PlanetCards'
import './App.scss'


const App: React.FC = () => {

    const [renderedPlanet, setRenderedPlanet] = useState<Planet>(data[0])
    const [section, setSection] = useState<"overview" | "structure" | "geology">("overview")
    
    const handleClick = (name: string): void => {
        
        const planet = data.find(el => el.name === name)
        if (!planet) {
            return
        }

        setRenderedPlanet(planet);
        setSection("overview")
    }


    return (
      <>
          <NavBar handleClick={handleClick} />
          <main className='main'> 
            <PlanetInfo renderedPlanet ={renderedPlanet} section={section} setSection={setSection} />
            <PlanetCards renderedPlanet={renderedPlanet}/>
          </main>
      </>
    
  )
}

export default App