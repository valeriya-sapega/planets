import { useState } from "react";
import { ButtonsProps } from "../../interfaces";
import './Buttons.scss'
import '../../styles.scss'
import { buttonBackgroundColor } from '../../Colors'
import { useMediaQuery } from "react-responsive";

type PlanetSection = "overview" | "structure" | "geology";

const Buttons: React.FC<ButtonsProps> = ({ handleClick, name }) => {

    const [activeButton, setActiveButton] = useState<null | number>(0)
    const [chosenPlanet, setChosenPlanet] = useState<string>(name)

    const sections: PlanetSection[] = ['overview', 'structure', 'geology']

    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 769px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const changeSection = (section:PlanetSection, index: null | number) : void => {
        handleClick(section)
        setActiveButton(index)
    }


    if (name !== chosenPlanet) {
        setChosenPlanet(name)
        setActiveButton(0)
    }

    return (

        <>
        {isDesktopOrTablet && 
            <div className="buttons">
                    {sections.map((el: PlanetSection, index: number) => {
                        return <button
                            key={index}
                            onClick={() => changeSection(el, index)}
                            className='h3'
                            style={index === activeButton ? { backgroundColor: buttonBackgroundColor[name] } : {}}>
                            <span>0{index + 1}</span>{el}</button>
                    })}
            </div>
        }
        {isMobile && 
            <div className="buttons">
                    {sections.map((el: PlanetSection, index: number) => {
                        return <button
                            key={index}
                            onClick={() => changeSection(el, index)}
                            className='h3'
                            style={index === activeButton ?
                                {
                                    'borderBottom': `4px solid ${buttonBackgroundColor[name]}`,
                                    "color":"#ffffff"} : {}}>
                            {el}</button>
                    })}
            </div>
        }
        </>
  )
}

export default Buttons