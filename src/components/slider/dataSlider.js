import { v4 as uuidv4 } from "uuid";

const dataSlider = [
    {
        id: uuidv4(),
        title: 'UberEats',
        structure: 'Structure: Adaptive layout',
        about: 'About: Food restaraunt',
        technologiesTitle: 'Using technologies:',
        listOfTechnologies: 'HTML5, CSS3, JS'
    },
    {
        id: uuidv4(),
        title: 'PiperNet',
        structure: 'Structure: Adaptive layout',
        about: 'About: IT portal',
        technologiesTitle: 'Using technologies:',
        listOfTechnologies: 'HTML5, CSS3'
    },
    {
        id: uuidv4(),
        title: 'Odigo',
        structure: 'Structure: Adaptive layout',
        about: 'About: Traveling portal',
        technologiesTitle: 'Using technologies:',
        listOfTechnologies: 'HTML5, CSS3, JS'
    },
    {
        id: uuidv4(),
        title: 'Food project',
        structure: 'Structure: Adaptive layout with active JS using',
        about: 'About: Healty food article',
        technologiesTitle: 'Using technologies:',
        listOfTechnologies: 'HTML5, CSS3, JS (DOM API, slider, calculator, timer)' 
    },
    {
        id: uuidv4(),
        title: 'Game of thrones DB',
        structure: 'Structure: React application',
        about: 'About: All info about GOT using fake API',
        technologiesTitle: 'Using technologies:',
        listOfTechnologies: 'SCSS, REST API, React (hooks, class components, react router)'
    },
    {
        id: uuidv4(),
        title: 'Resto app',
        structure: 'Structure: React application',
        about: 'About: List of available to order cards using json-server',
        technologiesTitle: 'Using technologies:',
        listOfTechnologies: 'SCSS, REST API, Redux, React (hooks, class components, react router)'
    }
];
export default dataSlider;