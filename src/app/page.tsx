import About from "@/components/about/About";
import mainStyle from "@/sass/main/main.module.scss";
import BreakInfo from "@/components/breakInfo/BreakInfo";
import Technologies from "@/components/technologies/Technologies";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import TopButton from "@/components/topButton/TopButton";

export default function Home() {
  return (
    <section className={`${mainStyle["main"]}`}>
      <About />
      <BreakInfo />
      <Technologies />
      <BreakInfo />
      <Projects />
      <Contact />
      <TopButton />
    </section>
  );
}
