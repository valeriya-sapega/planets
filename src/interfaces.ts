export interface Planet {
    name: string,
    overview: {
      content: string,
      source: string
    },
    structure: {
      content: string,
      source: string
    },
    geology: {
      content: string,
      source: string
    },
    rotation: string,
    revolution: string,
    radius: string,
    temperature: string,
    images: {
      planet: string,
      internal: string,
      geology: string
    }
}

export interface NavBarProps {
    handleClick: (name: string) => void;
  }
  

export interface RenderedPlanet {
    renderedPlanet: Planet;
}

export interface PlanetInfoProps extends RenderedPlanet {
    section: "overview" | "structure" | "geology";
    setSection: React.Dispatch<React.SetStateAction<"overview" | "structure" | "geology">>;
}

export interface ButtonsProps {
  handleClick: (section: "overview" | "structure" | "geology") => void;
  name: string;
  }

