import Head from 'next/head';
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

  const isEnglish = lang === 'en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: isEnglish ? 'Abolfazl Chaman' : 'ابوالفضل چمن',
    image: 'https://www.abolfazlchaman.com/images/AbolfazlChamanFormal.jpg',
    description: isEnglish
      ? "Discover the portfolio of Abolfazl Chaman, a seasoned Web Developer and Software Engineer with over 5 years of experience delivering high-performance, scalable web applications. Specializing in React, Next.js, TypeScript, and modern full-stack web and software development. Check out my resume and let's discuss how I can help improve your team or project output."
      : 'پورتفولیوی ابوالفضل چمن، توسعه‌دهنده وب و مهندس نرم‌افزار با بیش از ۵ سال تجربه در ارائه اپلیکیشن‌های وب با عملکرد بالا و مقیاس‌پذیر. متخصص در ری‌اکت، نکست‌جی‌اس، تایپ‌اسکریپت و توسعه وب و نرم‌افزار فول‌استک مدرن. رزومه من را مشاهده کنید و با من در مورد بهبود عملکرد تیم یا خروجی پروژه خود ارتباط برقرار کنید.',
    url: isEnglish ? 'https://www.abolfazlchaman.com/en' : 'https://www.abolfazlchaman.com/fa',
    sameAs: [
      'https://www.linkedin.com/in/abolfazlchaman',
      'https://www.github.com/abolfazlchaman',
      'https://wa.me/+989027001688',
      'https://wa.me/+989352121688',
      'mailto:contact@abolfazlchaman.com',
      'mailto:contact@abolfazlchaman.com',
      'mailto:info.abolfazlchaman@gmail.com',
    ],
    worksFor: [
      {
        '@type': 'Organization',
        'name': 'Meta',
        'url': 'https://www.meta.com',
        'roleName': 'Open Source Contributor',
        'sameAs': 'https://github.com/abolfazlchaman',
      },
      {
        '@type': 'Organization',
        'name': 'Airbnb',
        'url': 'https://www.airbnb.com',
        'roleName': 'Open Source Contributor',
        'sameAs': 'https://github.com/abolfazlchaman',
      },
    ],
  };

  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
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
    </>
  );
}
