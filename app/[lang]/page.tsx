import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';
import { About } from './components/about';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Impact } from './components/impact';
import { Inspirations } from './components/inspirations';
import { Navigation } from './components/navigation';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { ReferenceSection } from '@/components/references/reference-section';

export default async function IndexPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  const {
    developerInfo: { fullName },
  } = dictionary;

  return (
    <main>
      <Navigation
        dictionary={dictionary.navigation}
        fullName={fullName}
        theme={dictionary.theme}
      />
      <div className='container md:px-22 lg:px-36 xl:px-52 px-10 min-w-full'>
        <section
          id='hero'
          aria-label='Main hero section'>
          <Hero dictionary={dictionary} />
        </section>
        <section
          id='impact'
          aria-label='Impact section'>
          <Impact dictionary={dictionary} />
        </section>
        <section
          id='about'
          aria-label='About Abolfazl Chaman section'>
          <About
            dictionary={dictionary.about}
            language={lang}
          />
        </section>
        <section
          id='skills'
          className='scroll-mt-20'>
          <Skills
            skillsTitles={dictionary.skills}
            softSkills={dictionary.softSkills}
            languages={dictionary.languages}
          />
        </section>
        <section
          id='projects'
          className='scroll-mt-20'>
          <Projects projects={dictionary.projects} />
        </section>
        <section
          id='endorsements'
          className='scroll-mt-20'
          aria-label='Endorsements section'>
          <ReferenceSection dictionary={dictionary} />
        </section>
        <section
          id='inspiration'
          className='scroll-mt-20'>
          <Inspirations
            inspiration={dictionary.inspiration}
            quotes={dictionary.quotes}
          />
        </section>
      </div>
      <Footer
        language={lang}
        footer={dictionary.footer}
        fullName={fullName}
        socialLinks={dictionary.socialLinks}
      />
    </main>
  );
}
