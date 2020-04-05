import NPP from './NPP/radiation128.png';
import NPP1 from './NPP/1.png';
import NPP2 from './NPP/2.png';
import NPP3 from './NPP/3.png';
import NPP4 from './NPP/4.png';
import S8NavCC from './S8NavCC/s8navcc32.png';
import S8NavCC1 from './S8NavCC/1.png';
import Portfolio from './favicon.png';
import Portfolio1 from './Portfolio/1.1.png';

const Projects: Project[] = [
    { id: 1, 
        name: 'S8NavCC', 
        description: 'Samsung Galaxy Navigation Bar Color Changer', 
        github: 'https://github.com/zed0seven/S8NavCC',
        icon: S8NavCC, 
        technologies: [
            { id: 1, name: 'WinForms', color: 'gray' },
            { id: 1, name: '.NET', color: '#512bd4' },
            { id: 2, name: 'C#', color: '#178600' },
        ],
        timestamp: 'Fall 2017', 
        screenshots: [ 
            { id: 1, source: S8NavCC1}
        ] 
    },
    { id: 2, 
        name: 'Nuclear Physics Program', 
        description: 'facilitating learning of nuclear physics', 
        github: 'https://github.com/haholm/NuclearPhysicsProgram',
        icon: NPP, 
        technologies: [
            { id: 1, name: 'WPF', color: '#1675ad' },
            { id: 1, name: '.NET', color: '#512bd4' },
            { id: 2, name: 'C#', color: '#178600' },
        ],
        timestamp: 'Fall 2019', 
        screenshots: [ 
            { id: 1, source: NPP1 }, 
            { id: 2, source: NPP2 }, 
            { id: 3, source: NPP3 }, 
            { id: 4, source: NPP4 }
        ] 
    },
    { id: 3, 
        name: 'Portfolio Website', 
        description: 'Portfolio website showcasing my projects', 
        github: 'https://github.com/haholm/Portfolio',
        icon: Portfolio, 
        technologies: [
            { id: 1, name: 'ReactJS', color: '#61dafb' },
            { id: 2, name: 'TypeScript', color: '#2b7489' },
            { id: 3, name: 'HTML', color: '#e34c26' },
            { id: 4, name: 'SASS', color: '#bf4080' },
        ],
        timestamp: 'Spring 2020', 
        screenshots: [
            { id: 1, source: Portfolio1 }
        ] 
    },
]

export default Projects;