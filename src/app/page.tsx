import { Children } from "react";
import About from "@/components/about/About";
import mainStyle from "@/sass/main/main.module.scss";
import BreakInfo from "@/components/breakInfo/BreakInfo";
import Technologies from "@/components/technologies/Technologies";
import { technologies } from "../data/technologies/technologies";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <section className={`${mainStyle["main"]}`}>
      <About />
      <BreakInfo />
      <Technologies />
      <BreakInfo />
      <Projects />
    </section>
  );
}
