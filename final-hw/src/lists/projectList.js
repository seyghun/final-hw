import adventureImg from '../images/projectFinal.png';
import sportsImg from '../images/project-10.1_img.png';
import landieImg from '../images/project-13_img.png';
import drumKitImg from '../images/project-10.2_img.png';
import StarWarsApiImg from '../images/project-12_img.png';
import authorizationImg from '../images/project-20_img.png';
import postCreatingImg from '../images/project-21_img.png';
import adventureLogo from '../images/adventure-logo.png';
import sportsLogo from '../images/sports-logo.png';
import landieLogo from '../images/landie-logo.png';
import drumKitLogo from '../images/drumKit-logo.png';
import StarWarsApiLogo from '../images/starWarsApi-logo.png';
import authorizationLogo from '../images/authorization-logo.png';
import postCreatingLogo from '../images/postCreating-logo.png';


const projects = [
    {
        title: "Adventure",
        URL: 'https://seyghun.github.io/home-work/HW-Final/',
        img: adventureLogo,
        imgBig: adventureImg,
        technologies: ['HTML', 'CSS', 'SCCS', 'Responsive'],
        description: 'A basic site about mountains with some information about them, also created photo galleries.'
    },

    {
        title: 'Star Wars',
        URL: 'https://seyghun.github.io/cursor-advanced-homework/HW-12/index.html',
        img: StarWarsApiLogo,
        imgBig: StarWarsApiImg,
        technologies: ['HTML', 'CSS', 'JS', 'API'],
        description: 'The site is dedicated and decorated in the style of Star Wars, on which there is interaction with the API, from which we take information about heroes, planets and movies.'
    },
    {
        title: 'Sports',
        URL: 'https://seyghun.github.io/home-work/HW-10/',
        img: sportsLogo,
        imgBig: sportsImg,
        technologies: ['HTML', 'CSS', 'SCCS', 'JS', 'Responsive', 'Slick'],
        description: 'An advertising site for a company that broadcasts and informs its users about football matches, the site displays the latest user comments using a slider.'
    },

    {
        title: 'Landie',
        URL: 'https://seyghun.github.io/home-work/HW-13/',
        img: landieLogo,
        imgBig: landieImg,
        technologies: ['HTML', 'CSS', 'SCCS', 'Responsive'],
        description: 'Business card site of a company that provides UI/UX design services.'
    },

    {
        title: 'Authorization Form',
        URL: 'https://seyghun.github.io/HomeWork20/',
        img: authorizationLogo,
        imgBig: authorizationImg,
        technologies: ['HTML', 'CSS', 'JS', 'React', 'SPA'],
        description: 'An example of a normal and simple authorization menu style, with the function of switching to the registration mode (SPA).'
    },

    {
        title: 'DrumKit',
        URL: 'https://seyghun.github.io/cursor-advanced-homework/HW-10/index.html',
        img: drumKitLogo,
        imgBig: drumKitImg,
        technologies: ['HTML', 'CSS', 'JS'],
        description: 'An application that uses js to press keys for sounds from the keyboard, the design is made in honor of the legendary movie.'
    },

    {
        title: 'Posts Creating',
        URL: 'https://seyghun.github.io/HomeWork21/',
        img: postCreatingLogo,
        imgBig: postCreatingImg,
        technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux'],
        description: 'The site is simple in design, which allows the user to create posts for social networks, where you can choose the user who will post the photo, the text of the publication, and the photo specified via the link.'
    }
]


export { projects }