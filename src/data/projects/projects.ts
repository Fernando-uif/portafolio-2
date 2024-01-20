import { StringifyOptions } from "querystring";

export interface ProjectsProps {
  name: string;
  technologies: string[];
  view: ViewProps[];
  urlImage: string;
}
interface ViewProps {
  name: string;
  url: string;
}
export const projects: ProjectsProps[] = [
  {
    name: "election maps n+ (televisa)",
    technologies: ["next", "sass", "nodejs", "d3js"],
    view: [],
    urlImage: "/assets/images/projects/elections-2023.png",
  },
  {
    name: "TODO",
    technologies: ["html", "css", "Java Script"],
    view: [
      {
        name: "view project",
        url: "https://resilient-baklava-3d3a0d.netlify.app/",
      },
    ],
    urlImage: "/assets/images/projects/todo.png",
  },
  {
    name: "Rick and Morty App",
    technologies: ["html", "css", "sass", "react"],
    view: [
      {
        name: "view project",
        url: "https://subtle-buttercream-946b65.netlify.app/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/rick-morty",
      },
    ],
    urlImage: "/assets/images/projects/ricknmorty.png",
  },
  {
    name: "bookmark",
    technologies: ["html", "css", "tailwind", "javascript", "github"],
    view: [
      {
        name: "view project",
        url: "https://fernando-uif.github.io/bookmark/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/bookmark",
      },
    ],
    urlImage: "/assets/images/projects/bookmark.png",
  },
  {
    name: "sunnyside",
    technologies: ["html", "sass", "react"],
    view: [
      {
        name: "view project",
        url: "https://profound-alfajores-06345c.netlify.app/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/Sunnyside-agency-landing-page",
      },
    ],
    urlImage: "/assets/images/projects/sunnyside.png",
  },
  {
    name: "credit Card",
    technologies: ["html", "sass", "javascript"],
    view: [
      {
        name: "view project",
        url: "https://stirring-cassata-bd3937.netlify.app/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/interactive-card",
      },
    ],
    urlImage: "/assets/images/projects/creditCard.png",
  },
  {
    name: "E-commerce",
    technologies: ["html", "sass", "javascript"],
    view: [
      {
        name: "view project",
        url: "https://fernando-uif.github.io/ecommerce-product/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/ecommerce-product",
      },
    ],
    urlImage: "/assets/images/projects/commerce.png",
  },
  {
    name: "space tourism",
    technologies: ["html", "sass", "react"],
    view: [
      {
        name: "view project",
        url: "https://dainty-muffin-1efc1c.netlify.app/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/space-tourism",
      },
    ],
    urlImage: "/assets/images/projects/space.png",
  },
  {
    name: "count down",
    technologies: ["html", "sass", "react"],
    view: [
      {
        name: "view project",
        url: "https://dazzling-cannoli-1936a6.netlify.app/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/countdown",
      },
    ],
    urlImage: "/assets/images/projects/countdown.png",
  },
  {
    name: "Advice generator",
    technologies: ["html", "sass", "react"],
    view: [
      {
        name: "view project",
        url: "https://snazzy-mandazi-36f2f4.netlify.app/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/Advice-Generator",
      },
    ],
    urlImage: "/assets/images/projects/advice-generator.png",
  },
  {
    name: "Easybank",
    technologies: ["html", "sass", "react"],
    view: [
      {
        name: "view project",
        url: "https://earnest-cranachan-1b9f63.netlify.app/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/EasyBank",
      },
    ],
    urlImage: "/assets/images/projects/easybank.png",
  },
  {
    name: "loop-studio",
    technologies: ["html", "sass", "tailwind"],
    view: [
      {
        name: "view project",
        url: "https://fernando-uif.github.io/loop-studio/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/loop-studio",
      },
    ],
    urlImage: "/assets/images/projects/loopstudio.png",
  },
];
