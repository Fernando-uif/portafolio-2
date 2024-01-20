interface ProjectsProps {
  name: string;
  technologies: string[];
  view: ["view project"] | ["view project", "view code"];
  urlImage?: string;
}
export const projects: ProjectsProps[] = [
  {
    name: "",
    technologies: ["html", "css"],
    view: ["view project", "view code"],
    urlImage: "",
  },
];
