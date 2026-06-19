export interface ProjectsProps {
  name: string;
  technologies: string[];
  view: ViewProps[];
  urlMedia: string;
}
interface ViewProps {
  name: string;
  url: string;
}
export const projects: ProjectsProps[] = [
  {
    name: "World cup 2026 - Compare Teams ( Televisa N+ )",
    technologies: ["react", "sass", "next", "typescript", "highcharts", "gsap"],
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1781907699/Magic-worldcup_cwzlc5.webp",
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/deportes/portugal-vs-congo-asi-llegan-ambas-selecciones-a-su-debut-en-el-mundial-2026/",
      },
    ],
  },
  {
    name: "Coahuila Elections 2026 ( Televisa N+ )",
    technologies: ["react", "sass", "next", "typescript", "highcharts"],
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/video/upload/v1781713732/coahuila-2026_t4sgm2.mp4",
    view: [
      {
        name: "view project",
        url: "https://nmas.com.mx/coahuila/elecciones/elecciones-coahuila-2026",
      },
    ],
  },
  {
    name: "Bakemono band",
    technologies: [
      "react",
      "sass",
      "next",
      "typescript",
      "payload",
      "database",
    ],
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/video/upload/v1781714504/bakemono-page_fdheqd.mp4",
    view: [
      {
        name: "view project",
        url: "https://www.bakemono.band",
      },
    ],
  },
  {
    name: "Interactive Map World Cup ( Televisa N+ )",
    technologies: ["react", "highcharts", "next", "css", "typescript"],
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1766712205/Screenshot-2025-12-25-at-19.21.31_szb2tb.webp",
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/noticieros/programas/despierta/videos/rumbo-al-mundial-2026-explicacion-las-seis-confederaciones-la-fifa/",
      },
    ],
  },
  {
    name: "Interns Who Support the Healthcare System in Mexico ( Televisa N+ )",
    technologies: [
      "react",
      "highcharts",
      "gsap",
      "next",
      "sass",
      "nodejs",
      "mapboxgl",
      "typescript",
    ],
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/video/upload/v1781714748/pasantes-mexico_1_uumyts.mp4",
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/especiales/pasantes-medicina-los-que-sostienen-salud-rural-mexico-sin-insumos-inseguros/",
      },
    ],
  },
  {
    name: "Illegal dumping sites in Mexico City ( Televisa N+ )",
    technologies: [
      "react",
      "next",
      "sass",
      "nodejs",
      "mapbox studio",
      "mapboxgl",
      "typescript",
    ],
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/video/upload/v1781715511/Screen_Recording_2026-06-17_at_10.55.12_so9mqb.mp4",
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/especiales/mapa-tiraderos-clandestinos-cdmx/",
      },
    ],
  },
  {
    name: "Illegal dumping sites in Mexico City ( Televisa N+ )",
    technologies: [
      "react",
      "next",
      "sass",
      "nodejs",
      "mapbox studio",
      "mapboxgl",
      "typescript",
    ],
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604327/dumps_map_nxrwi1.webp",
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/mapas/mapa-tiraderos-clandestinos-cdmx/",
      },
    ],
  },
  {
    name: "Judicial Branch Election Results by State ( Televisa N+ )",
    technologies: ["react", "next", "sass", "nodejs", "mapboxgl", "typescript"],
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604327/judges_v0w3mm.webp",
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/mapas/resultados-elecciones-poder-judicial-2025-estado-ine-scjn/",
      },
    ],
  },
  {
    name: "8M Data ( Televisa N+ )",
    technologies: [
      "react",
      "next",
      "sass",
      "nodejs",
      "mapboxgl",
      "graphql/apollo",
      "typescript",
    ],
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604365/8m_qruh8w.webp",
    view: [
      {
        name: "view project",
        url: "https://www.nmas.com.mx/mapas/8m-dia-de-la-mujer-mexico-datos/",
      },
    ],
  },
  {
    name: "Latino vote ( Televisa N+ )",
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
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604368/latin-vote_rl6jws.webp",
  },
  {
    name: "Election results 2018 & 2024 ( Televisa N+ )",
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
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604369/results-elections-street-view_cf7rxv.webp",
  },
  {
    name: "presidential election maps 2024 ( Televisa N+ )",
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
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604375/presidential-map_sdpgr2.gif",
  },
  {
    name: "governors election maps 2024 ( Televisa N+ )",
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
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604371/governors-map_zaercj.gif",
  },
  {
    name: "election maps 2023 ( Televisa N+ )",
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
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604366/elections-2023_lc53wh.webp",
  },
  {
    name: "movie app",
    technologies: ["react", "sass", "zustand", "typescript"],
    urlMedia:
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
    urlMedia:
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
    urlMedia:
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
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604367/desserts_jzwezw.webp",
  },
  {
    name: "todo app",
    technologies: ["react", "zustand", "sass", "typescript"],
    urlMedia:
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
    urlMedia:
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
    urlMedia:
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
    urlMedia:
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
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604367/natures_vhsswf.webp",
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
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604365/bookmark_tfw7m7.webp",
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
    urlMedia:
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
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604365/commerce_gk0wb3.webp",
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
    urlMedia:
      "https://res.cloudinary.com/djophy5vk/image/upload/v1749604368/loopstudio_qer2bs.webp",
  },
];
