interface ProjectsProps {
  name: string;
  technologies: string[];
  view: ["view project"] | ["view project", "view code"];
}
export const projects: ProjectsProps[] = [
  {
    name: "",
    technologies: ["html", "css"],
    view: ["view project", "view code"],
  },
];
