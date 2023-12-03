import React from 'react'
import { RenderedPlanet } from '../../interfaces'
import './PlanetCards.scss'

const PlanetCards: React.FC<RenderedPlanet> = ({ renderedPlanet }) => {

    const { 
        rotation,
        revolution,
        radius,
        temperature,
    } = renderedPlanet
    
    const cardsInfo: { [key: string]: string }[] = [
        { 'Rotation Time': rotation },
        { 'Revolution Time': revolution },
        {'Radius': radius},
        {'Temperature': temperature},
    ]


    const cards = cardsInfo.map((card: { [key: string]: string }, index : number) => {
        const heading: string = Object.keys(card)[0];
        
        return (
            (<div className='card' key={index}>
                <div className='card__content'>
                    <h4 className='h4 heading'>{ heading }</h4>
                    <h2 className='h2 card__text'>{card[heading]}</h2>
                </div>
            </div>
        ))
    })
    
    return (
        <div className='container__cards'>
            { cards }
        </div>
      
  )
}

export default PlanetCards