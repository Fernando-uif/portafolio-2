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
    name: "8M Data N+ (Televisa)",
    technologies: [
      "react",
      "next",
      "sass",
      "nodejs",
      "mapboxgl",
      "graphql/apollo",
      "typescript",
    ],
    urlImage: "/assets/images/projects/webp/8m.webp",
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/mapas/8m-dia-de-la-mujer-mexico-datos/",
      },
    ],
  },
  {
    name: "Latino vote n+ (televisa)",
    technologies: [
      "react",
      "next",
      "sass",
      "mapboxgl",
      "graphql/apollo",
      "highcharts",
      "typescript",
    ],
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/mapas/voto-latino-estados-unidos-elecciones-2024/",
      },
    ],
    urlImage: "/assets/images/projects/webp/latin-vote.webp",
  },
  {
    name: "Election results 2018 & 2024 n+ (televisa)",
    technologies: [
      "react",
      "next",
      "sass",
      "nodejs",
      "mapboxgl",
      "graphql/apollo",
      "typescript",
    ],
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/mapas/mapa-presidencial-calle/",
      },
    ],
    urlImage: "/assets/images/projects/webp/results-elections-street-view.webp",
  },
  {
    name: "presidential election maps 2024 n+ (televisa)",
    technologies: [
      "react",
      "next",
      "sass",
      "nodejs",
      "mapboxgl",
      "graphql/apollo",
      "typescript",
    ],
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/mapas/mapa-presidencial-estado/",
      },
    ],
    urlImage: "/assets/images/projects/webp/presidential-map.gif",
  },
  {
    name: "governors election maps 2024 n+ (televisa)",
    technologies: [
      "react",
      "next",
      "sass",
      "nodejs",
      "mapboxgl",
      "graphql/apollo",
      "typescript",
    ],
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/mapas/mapas-gobernadores/",
      },
    ],
    urlImage: "/assets/images/projects/webp/governors-map.gif",
  },
  {
    name: "election maps 2023 n+ (televisa)",
    technologies: [
      "react",
      "next",
      "sass",
      "nodejs",
      "d3js",
      "graphql/apollo",
      "typescript",
    ],
    view: [],
    urlImage: "/assets/images/projects/webp/elections-2023.webp",
  },
  {
    name: "movie app",
    technologies: ["react", "sass", "zustand", "typescript"],
    urlImage: "/assets/images/projects/webp/movie-app.webp",
    view: [
      {
        name: "view project",
        url: "https://movie-page-auth.netlify.app/",
      },
    ],
  },
  {
    name: "Teslo shop",
    technologies: [
      "react",
      "Next",
      "Sass",
      "prisma",
      "postgresql",
      "zustand",
      "typescript",
    ],
    view: [
      {
        name: "view project",
        url: "https://teslo-shop-a3avodv6y-fernandouifs-projects.vercel.app/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/teslo-shop",
      },
    ],
    urlImage: "/assets/images/projects/webp/teslo-shop.webp",
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
    urlImage: "/assets/images/projects/webp/space.webp",
  },
  {
    name: "Product-list",
    technologies: ["React", "sass", "zustand", "typescript"],
    view: [
      {
        name: "view project",
        url: "https://product-list-fer.netlify.app/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/product-list",
      },
    ],
    urlImage: "/assets/images/projects/webp/desserts.webp",
  },
  {
    name: "clock-app",
    technologies: ["tailwind", "typescript", "react"],
    view: [
      {
        name: "view project",
        url: "https://clock-app-fer.netlify.app/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/clock-app",
      },
    ],
    urlImage: "/assets/images/projects/webp/clock-app.webp",
  },
  {
    name: "todo app",
    technologies: ["react", "zustand", "sass", "typescript"],
    urlImage: "/assets/images/projects/webp/to-do.webp",
    view: [
      {
        name: "view project",
        url: "https://verdant-faun-928ab4.netlify.app/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/todo-app",
      },
    ],
  },
  {
    name: "Portafolio 1",
    technologies: ["html", "css", "typeScript"],
    view: [
      {
        name: "view project",
        url: "https://fernando-uif.github.io/portafolio/",
      },
    ],
    urlImage: "/assets/images/projects/webp/portafolio-1.webp",
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
    urlImage: "/assets/images/projects/webp/sunnyside.webp",
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
    urlImage: "/assets/images/projects/webp/easybank.webp",
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
    urlImage: "/assets/images/projects/webp/countdown.webp",
  },

  {
    name: "Natures",
    technologies: ["html", "sass"],
    view: [
      {
        name: "view project",
        url: "https://fernando-uif.github.io/natures/",
      },
      {
        name: "view code",
        url: "https://github.com/Fernando-uif/natures",
      },
    ],
    urlImage: "/assets/images/projects/webp/natures.webp",
  },

  // {
  //   name: "bookmark",
  //   technologies: ["html", "css", "tailwind", "javascript", "github"],
  //   view: [
  //     {
  //       name: "view project",
  //       url: "https://fernando-uif.github.io/bookmark/",
  //     },
  //     {
  //       name: "view code",
  //       url: "https://github.com/Fernando-uif/bookmark",
  //     },
  //   ],
  //   urlImage: "/assets/images/projects/webp/bookmark.webp",
  // },
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
    urlImage: "/assets/images/projects/webp/creditCard.webp",
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
    urlImage: "/assets/images/projects/webp/commerce.webp",
  },
  // {
  //   name: "loop-studio",
  //   technologies: ["html", "sass", "tailwind"],
  //   view: [
  //     {
  //       name: "view project",
  //       url: "https://fernando-uif.github.io/loop-studio/",
  //     },
  //     {
  //       name: "view code",
  //       url: "https://github.com/Fernando-uif/loop-studio",
  //     },
  //   ],
  //   urlImage: "/assets/images/projects/webp/loopstudio.webp",
  // },
];
