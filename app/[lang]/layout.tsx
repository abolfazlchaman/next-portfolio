import { Analytics } from '@vercel/analytics/next';
import { i18n, type Locale } from '../../i18n-config';
import { ThemeProvider } from './components/theme-provider';
import './globals.css';
import localFont from 'next/font/local';
import { Metadata } from 'next';
import Head from 'next/head';
import { SpeedInsights } from '@vercel/speed-insights/next';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const shabnam = localFont({
  src: [
    { path: '../fonts/Shabnam-Light.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/Shabnam.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Shabnam-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-shabnam',
  display: 'swap',
});

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const params = await props.params;
  const isEnglish = params.lang === 'en';

  return {
    title: isEnglish
      ? 'Abolfazl Chaman - Web Developer | Software Engineer | React & Next.js Expert | Software Consultant'
      : 'ابوالفضل چمن - توسعه‌دهنده وب | مهندس نرم‌افزار | متخصص ری‌اکت و نکست‌جی‌اس | مشاور نرم‌افزار',
    description: isEnglish
      ? "Discover the portfolio of Abolfazl Chaman, a seasoned Web Developer and Software Engineer with over 5 years of experience delivering high-performance, scalable web applications. Specializing in React, Next.js, TypeScript, and modern full-stack web and software development. Check out my resume and let's discuss how I can help improve your team or project output."
      : 'پورتفولیوی ابوالفضل چمن، توسعه‌دهنده وب و مهندس نرم‌افزار با بیش از ۵ سال تجربه در ارائه اپلیکیشن‌های وب با عملکرد بالا و مقیاس‌پذیر. متخصص در ری‌اکت، نکست‌جی‌اس، تایپ‌اسکریپت و توسعه وب و نرم‌افزار فول‌استک مدرن. رزومه من را مشاهده کنید و با من در مورد بهبود عملکرد تیم یا خروجی پروژه خود ارتباط برقرار کنید.',
    keywords: isEnglish
      ? 'Abolfazl Chaman, Web Developer, Front-End Developer, React, Next.js, TypeScript, JavaScript, Software Engineer, Full-Stack Developer, Software Consultant, Web Consultant, Shiraz, Iran, Web Development Portfolio'
      : 'ابوالفضل چمن، توسعه‌دهنده وب، توسعه‌دهنده فرانت‌اند، ری‌اکت، نکست‌جی‌اس، تایپ‌اسکریپت، جاوااسکریپت، مهندس نرم‌افزار، توسعه‌دهنده فول‌استک، مشاور نرم‌افزار، مشاور وب، شیراز، ایران، پورتفولیو وب‌سایت',
    authors: [
      {
        name: isEnglish ? 'Abolfazl Chaman' : 'ابوالفضل چمن',
        url: isEnglish ? 'https://www.abolfazlchaman.com/en' : 'https://www.abolfazlchaman.com/fa',
      },
    ],
    openGraph: {
      type: 'website',
      title: isEnglish
        ? 'Abolfazl Chaman - Web Developer | Software Engineer | React & Next.js Expert | Software Consultant'
        : 'ابوالفضل چمن - توسعه‌دهنده وب | مهندس نرم‌افزار | متخصص ری‌اکت و نکست‌جی‌اس | مشاور نرم‌افزار',
      description: isEnglish
        ? "Discover the portfolio of Abolfazl Chaman, a seasoned Web Developer and Software Engineer with over 5 years of experience delivering high-performance, scalable web applications. Specializing in React, Next.js, TypeScript, and modern full-stack web and software development. Check out my resume and let's discuss how I can help improve your team or project output."
        : 'پورتفولیوی ابوالفضل چمن، توسعه‌دهنده وب و مهندس نرم‌افزار با بیش از ۵ سال تجربه در ارائه اپلیکیشن‌های وب با عملکرد بالا و مقیاس‌پذیر. متخصص در ری‌اکت، نکست‌جی‌اس، تایپ‌اسکریپت و توسعه وب و نرم‌افزار فول‌استک مدرن. رزومه من را مشاهده کنید و با من در مورد بهبود عملکرد تیم یا خروجی پروژه خود ارتباط برقرار کنید.',
      url: isEnglish ? 'https://www.abolfazlchaman.com/en' : 'https://www.abolfazlchaman.com/fa',
      siteName: isEnglish ? 'Abolfazl Chaman Portfolio' : 'پورتفولیوی ابوالفضل چمن',
      images: [
        {
          url: 'https://www.abolfazlchaman.com/images/cropped-AbolfazlChamanFormalUpscaled.webp',
          alt: isEnglish
            ? 'Abolfazl Chaman - Web Developer, Software Engineer and Software Consultant'
            : 'ابوالفضل چمن - توسعه‌دهنده، وب مهندس نرم‌افزار و مشاور نرم‌افزار',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEnglish
        ? 'Abolfazl Chaman - Web Developer | Software Engineer | React & Next.js Expert | Software Consultant'
        : 'ابوالفضل چمن - توسعه‌دهنده وب | مهندس نرم‌افزار | متخصص ری‌اکت و نکست‌جی‌اس | مشاور نرم‌افزار',
      description: isEnglish
        ? "Discover the portfolio of Abolfazl Chaman, a seasoned Web Developer and Software Engineer with over 5 years of experience delivering high-performance, scalable web applications. Specializing in React, Next.js, TypeScript, and modern full-stack web and software development. Check out my resume and let's discuss how I can help improve your team or project output."
        : 'پورتفولیوی ابوالفضل چمن، توسعه‌دهنده وب و مهندس نرم‌افزار با بیش از ۵ سال تجربه در ارائه اپلیکیشن‌های وب با عملکرد بالا و مقیاس‌پذیر. متخصص در ری‌اکت، نکست‌جی‌اس، تایپ‌اسکریپت و توسعه وب و نرم‌افزار فول‌استک مدرن. رزومه من را مشاهده کنید و با من در مورد بهبود عملکرد تیم یا خروجی پروژه خود ارتباط برقرار کنید.',
      images: ['https://www.abolfazlchaman.com/images/cropped-AbolfazlChamanFormalUpscaled.webp'],
    },
    alternates: {
      canonical: isEnglish
        ? 'https://www.abolfazlchaman.com/en'
        : 'https://www.abolfazlchaman.com/fa',
    },
    manifest: '/site.webmanifest',
  };
}

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  const { children } = props;
  const isRtl = ['fa', 'ar', 'he'].includes(params.lang); //keep for future
  const isEnglish = params.lang === 'en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: isEnglish ? 'Abolfazl Chaman' : 'ابوالفضل چمن',
    image: 'https://www.abolfazlchaman.com/images/cropped-AbolfazlChamanFormalUpscaled.webp',
    jobTitle: isEnglish
      ? 'Expert Web Developer, Software Engineer & Consultant'
      : 'توسعه‌دهنده وب، مهندس نرم افزار و مشاور متخصص',
    description: isEnglish
      ? "Discover the portfolio of Abolfazl Chaman, a seasoned Web Developer and Software Engineer with over 5 years of experience delivering high-performance, scalable web applications. Specializing in React, Next.js, TypeScript, and modern full-stack web and software development. Check out my resume and let's discuss how I can help improve your team or project output."
      : 'پورتفولیوی ابوالفضل چمن، توسعه‌دهنده وب و مهندس نرم‌افزار با بیش از ۵ سال تجربه در ارائه اپلیکیشن‌های وب با عملکرد بالا و مقیاس‌پذیر. متخصص در ری‌اکت، نکست‌جی‌اس، تایپ‌اسکریپت و توسعه وب و نرم‌افزار فول‌استک مدرن. رزومه من را مشاهده کنید و با من در مورد بهبود عملکرد تیم یا خروجی پروژه خود ارتباط برقرار کنید.',
    url: isEnglish ? 'https://www.abolfazlchaman.com/en' : 'https://www.abolfazlchaman.com/fa',
    sameAs: ['https://www.linkedin.com/in/abolfazlchaman', 'https://www.github.com/abolfazlchaman'],
    worksFor: [
      {
        '@type': 'Organization',
        'name': 'Meta',
        'url': 'https://www.meta.com',
        'sameAs': 'https://github.com/abolfazlchaman',
      },
      {
        '@type': 'Organization',
        'name': 'Airbnb',
        'url': 'https://www.airbnb.com',
        'sameAs': 'https://github.com/abolfazlchaman',
      },
    ],
  };

  return (
    <html
      className={`${shabnam.variable} scroll-smooth antialiased`}
      lang={params.lang}
      dir={isRtl ? 'rtl' : 'ltr'}
      suppressHydrationWarning>
      <Head>
        {/* llms.txt */}
        <link
          rel='llms'
          href='https://www.abolfazlchaman.com/llms.txt'
        />
        {/* Favicon Links */}
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <link
          rel='apple-touch-icon'
          href='/apple-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        {/* Android Chrome icons */}
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/android-icon-512x512.png'
        />

        {/* Web App Manifest */}
        <link
          rel='manifest'
          href='/site.webmanifest'
        />
      </Head>
      <body>
        {/* jsonLd */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
