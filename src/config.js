// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/day_sydney.jpg";
import HeroDark from "./images/night_sydney.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "13erkcan";

// Avatar URL
export const avatar_url = "/images/avatar.jpg";

// Navbar Logo image
export const navLogo = null;

/* Main
 **************************************************************
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = `
  Recent IT graduate from Victoria University Sydney with a robust foundation in front-end development and software engineering. I possess strong skills in front-end technologies, Java programming, and have earned certifications in Front End Development Libraries and Data Structures & Algorithms in Java.

  My professional journey began with volunteering at the Hacettepe University Robotics Society, where I developed programming skills and led various technology projects. Subsequently, I served as the Head of Advisory Board at the Hacettepe Free Software Society, providing strategic guidance and overseeing software courses and events. Most recently, my role at IKEA honed my customer service and strategic planning abilities.

  I am now actively seeking opportunities in Front-end Development and Software Engineering to leverage my technical skills and project experience in creating innovative web and mobile applications.
`;

/* Skills
 **************************************************************
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="teenyicons:python-outline" className="display-4" />,
    name: "Python",
  },
  {
    id: 11,
    skill: <Icon icon="teenyicons:mongodb-outline" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 12, // New Java skill with increased size
    skill: <Icon icon="ri:java-fill" width="1.2em" height="1.2em" className="display-4" />,
    name: "Java",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1tRvqbNPRtHycyGYe5njlHhGKttF70yyx/view";

/* Projects
 **************************************************************
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the default GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 **************************************************************
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xkgwnajq";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
