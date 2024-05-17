import taskImage from "../assets/Task.PNG";
import recipeImage from "../assets/recipe.PNG";
import youtubeImage from "../assets/youtube.PNG";
import carhubImage from "../assets/carhub.PNG";

export const Images = {
  task: taskImage,
  recipe: recipeImage,
  youtube: youtubeImage,
  carhub: carhubImage,
};

export const NAV_LINKS = [
  { id: 1, name: "Home", scroll: "0" },
  { id: 2, name: "About", scroll: "800" },
  { id: 3, name: "Tech Stack", scroll: "1800" },
  { id: 4, name: "Projects", scroll: "2800" },
  { id: 5, name: "Contact", scroll: "3900" },
];

export const PROJECTS = [
  {
    id: 1,
    img: Images.task,
    title: "Task.Io",
    description:
      "Front-End application for managing daily tasks with basic CRUD operations. Build using React js and Material UI.",
    techStack: [
      "React Js,",
      " React Routing,",
      " Material UI,",
      " Context API,",
      " Reducers,",
      " Moment js",
    ],
    livePreview: "https://nauman-taskio.netlify.app/",
  },
  {
    id: 2,
    img: Images.recipe,
    title: "Recipe Book",
    description:
      "Front-End application for managing recipes with basic CRUD operations. Build using React js and Bootstrap5.",
    techStack: [
      "React Js,",
      " React Routing,",
      " Bootstrap5,",
      " Context API,",
      " Reducers,",
      " firebase authentication,",
      " React Toastify",
    ],
    livePreview: "https://recipe-book-88940.web.app/",
  },
  {
    id: 3,
    img: Images.youtube,
    title: "Youtube Clone",
    description:
      "Front-End application for watching videos online which consist of channel pages, custom categories and video sections. Build using React js and Material UI.",
    techStack: [
      "React Js,",
      " React Routing,",
      " Material UI,",
      " React Toastify,",
      " Rapid API",
    ],
    livePreview: "https://nauman-youtube-clone.netlify.app/",
  },
  {
    id: 4,
    img: Images.carhub,
    title: "Car Hub",
    description:
      "Front-End application where users can seamlessly search for cars. Build using Next js, designed a modern and responsive user interface using Tailwind CSS and Headless UI.",
    techStack: ["Next Js,", " Tailwind CSS,", " Headless UI,", " Rapid API"],
    livePreview: "https://carhub-nextjs-topaz.vercel.app/",
  },
];
