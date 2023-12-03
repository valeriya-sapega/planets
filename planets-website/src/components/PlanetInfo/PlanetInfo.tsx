import React from 'react'
import { PlanetInfoProps } from '../../interfaces'
import Buttons from '../Buttons/Buttons'
import './PlanetInfo.scss'
import iconSource from '../../icons/icon-source.svg'
import { useMediaQuery } from 'react-responsive'

const PlanetInfo: React.FC<PlanetInfoProps> = ({ renderedPlanet, section, setSection }) => {

    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 769px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const { name,
        overview,
        structure,
        geology,
        images } = renderedPlanet
    
    const handleClick = (section: ("overview" | "structure" | "geology")) : void => { 
        setSection(section)
    }

    let chosenSection;
    let chosenImage;

    switch (section) {
        case 'structure':
            chosenSection = structure;
            chosenImage = (<img src={images.internal} />);
            break;
        case 'geology':
            chosenSection = geology;
            chosenImage = (<><img className='img--default'src={images.planet} /> <img className='img--geology' src={images.geology} /></>);
            break;
        default:
            chosenSection = overview;
            chosenImage = (<img src={images.planet} />);
    }
    
    return (
        <div className='container'>
            {isDesktopOrTablet && 
                <div className='content'>
                    <div className='content__image'>
                        {chosenImage}
                    </div>
                    <div className='content__card'>  
                        <div className='content__text'> 
                            <h1 className='h1'>{name}</h1>
                            <p className='body__text planet__info'>{chosenSection.content}</p>
                            <p className='body__text source'>Source: <a href={chosenSection.source} target='_blank'>Wikipedia</a> <img className='icon--source' src={ iconSource } />
                            </p>
                        </div>
                        <Buttons handleClick={handleClick} name={name} />
                    </div>
                </div>
            }
            {isMobile && 
                <div className='content'>
                    <Buttons handleClick={handleClick} name={name} />
                    <div className='content__image'>
                        {chosenImage}
                    </div>
                    <div className='content__card'>  
                        <div className='content__text'> 
                            <h2 className='h2'>{name}</h2>
                            <p className='body__text planet__info'>{chosenSection.content}</p>
                            <p className='body__text source'>Source: <a href={chosenSection.source} target='_blank'>Wikipedia</a> <img className='icon--source' src={ iconSource } />
                            </p>
                        </div>
                    </div>
                </div>
            }

            
            
        </div>
  )
}

export default PlanetInfo