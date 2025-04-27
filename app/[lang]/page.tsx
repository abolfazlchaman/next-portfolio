import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import About from "./components/about";
import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation";
import { Skills } from "./components/skills";

export default async function IndexPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <main>
      <Navigation
        dictionary={dictionary.navigation}
        fullName={dictionary.developerInfo.fullName}
        theme={dictionary.theme}
      />
      <section
        id="hero"
        aria-label="Main hero section">
        <Hero dictionary={dictionary} />
      </section>
      <section
        id="about"
        aria-label="About Abolfazl Chaman section">
        <About
          dictionary={dictionary.about}
          language={lang}
        />
      </section>
      <section
        id="skills"
        className="scroll-mt-20">
        <Skills
          skillsTitles={dictionary.skills}
          softSkills={dictionary.softSkills}
          languages={dictionary.languages}
        />
      </section>
    </main>
  );
}
