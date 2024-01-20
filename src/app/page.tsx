import About from "@/components/about/About";
import mainStyle from "@/sass/main/main.module.scss";

export default function Home() {
  return (
    <section className={`${mainStyle['main']}`}>
      <About />
    </section>
  );
}
