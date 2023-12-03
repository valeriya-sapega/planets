import { useState } from "react";
import { ButtonsProps } from "../../interfaces";
import './Buttons.scss'
import '../../styles.scss'

type PlanetSection = "overview" | "structure" | "geology";

const buttonBackgroundColor: {[key: string]: string}  = {
    Mercury: '#4193bb',
    Venus: '#EDA249',
    Earth: '#6f2ed6',
    Mars: '#D14C32',
    Jupiter: '#D83A34',
    Saturn: '#CD5120',
    Uranus: '#1ec2a4',
    Neptune: '#2d68f0'
}

const Buttons: React.FC<ButtonsProps> = ({ handleClick, name }) => {

    const [activeButton, setActiveButton] = useState<null | number>(0)
    const [chosenPlanet, setChosenPlanet] = useState<string>(name)


    const sections: PlanetSection[] = ['overview', 'structure', 'geology']

    const changeSection = (section:PlanetSection, index: null | number) : void => {
        handleClick(section)
        setActiveButton(index)
    }


    if (name !== chosenPlanet) {
        setChosenPlanet(name)
        setActiveButton(0)
    }

    return (

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
  )
}

export default Buttons