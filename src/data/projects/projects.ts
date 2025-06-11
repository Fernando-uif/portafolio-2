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
    name: " Illegal dumping sites in Mexico City (Televisa)",
    technologies: [
      "react",
      "next",
      "sass",
      "nodejs",
      "mapbox studio",
      "mapboxgl",
      "typescript",
    ],
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604327/dumps_special_bvmmsj.webp",
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/especiales/mapa-tiraderos-clandestinos-cdmx/",
      },
    ],
  },
  {
    name: "Illegal dumping sites in Mexico City (Televisa)",
    technologies: [
      "react",
      "next",
      "sass",
      "nodejs",
      "mapbox studio",
      "mapboxgl",
      "typescript",
    ],
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604327/dumps_map_nxrwi1.webp",
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/mapas/mapa-tiraderos-clandestinos-cdmx/",
      },
    ],
  },
  {
    name: "Judicial Branch Election Results by State (Televisa)",
    technologies: ["react", "next", "sass", "nodejs", "mapboxgl", "typescript"],
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604327/judges_v0w3mm.webp",
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/mapas/resultados-elecciones-poder-judicial-2025-estado-ine-scjn/",
      },
    ],
  },
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604365/8m_qruh8w.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604368/latin-vote_rl6jws.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604369/results-elections-street-view_cf7rxv.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604375/presidential-map_sdpgr2.gif",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604371/governors-map_zaercj.gif",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604366/elections-2023_lc53wh.webp",
  },
  {
    name: "movie app",
    technologies: ["react", "sass", "zustand", "typescript"],
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604370/movie-app_wjpugx.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604368/teslo-shop_rmemq0.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604369/space_z3dwjj.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604367/desserts_jzwezw.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604366/clock-app_ec5hnh.webp",
  },
  {
    name: "todo app",
    technologies: ["react", "zustand", "sass", "typescript"],
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604368/to-do_j3e1if.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604369/portafolio-1_wwfi1t.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604367/sunnyside_jjilj3.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604366/easybank_gdn6gz.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604366/countdown_bfwjdh.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604367/natures_vhsswf.webp",
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
  //   urlImage: "https://res.cloudinary.com/djophy5vk/image/upload/v1749604365/bookmark_tfw7m7.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604366/creditCard_gjmbos.webp",
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
    urlImage:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604365/commerce_gk0wb3.webp",
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
  //   urlImage: "https://res.cloudinary.com/djophy5vk/image/upload/v1749604368/loopstudio_qer2bs.webp",
  // },
];
