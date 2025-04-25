import { Navigation } from "@/components/navigation/navigation";
import { Hero } from "@/components/hero/hero";
import About from "@/components/about/about";
import { Footer } from "@/components/footer/footer";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/skills/skills";
import Inspiration from "@/components/inspiration/inspiration";

export default async function Page() {
  return (
    <main>
      <Navigation />
      <div className="container md:px-40 xl:px-60 px-10 min-w-full">
        <section
          id="hero"
          className="scroll-mt-20">
          <Hero />
        </section>
        <section
          id="about"
          className="scroll-mt-20">
          <About />
        </section>
        <section
          id="skills"
          className="scroll-mt-20">
          <Skills />
        </section>
        <section
          id="projects"
          className="scroll-mt-20">
          <Projects />
        </section>
        <section
          id="inspiration"
          className="scroll-mt-20">
          <Inspiration />
        </section>
      </div>
      <Footer />
    </main>
  );
}
