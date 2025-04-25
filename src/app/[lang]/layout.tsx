import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { ReactNode } from "react";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shabnam = localFont({
  src: [
    {
      path: "../fonts/Shabnam-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Shabnam.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Shabnam-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-shabnam",
  display: "swap",
});

const getMetadata = (lang: string): Metadata => {
  const isEnglish = lang === "en";

  return {
    title: isEnglish
      ? "Abolfazl Chaman - Web Developer | Software Engineer | React & Next.js Expert | Software Consultant"
      : "ابوالفضل چمن - توسعه‌دهنده وب | مهندس نرم‌افزار | متخصص ری‌اکت و نکست‌جی‌اس | مشاور نرم‌افزار",
    description: isEnglish
      ? "Discover the portfolio of Abolfazl Chaman, a seasoned Web Developer and Software Engineer with over 5 years of experience delivering high-performance, scalable web applications. Specializing in React, Next.js, TypeScript, and modern full-stack web and software development. Check out my resume and let's discuss how I can help improve your team or project output."
      : "پورتفولیوی ابوالفضل چمن، توسعه‌دهنده وب و مهندس نرم‌افزار با بیش از ۵ سال تجربه در ارائه اپلیکیشن‌های وب با عملکرد بالا و مقیاس‌پذیر. متخصص در ری‌اکت، نکست‌جی‌اس، تایپ‌اسکریپت و توسعه وب و نرم‌افزار فول‌استک مدرن. رزومه من را مشاهده کنید و با من در مورد بهبود عملکرد تیم یا خروجی پروژه خود ارتباط برقرار کنید.",
    keywords: isEnglish
      ? "Abolfazl Chaman, Web Developer, Front-End Developer, React, Next.js, TypeScript, JavaScript, Software Engineer, Full-Stack Developer, Software Consultant, Web Consultant, Shiraz, Iran, Web Development Portfolio"
      : "ابوالفضل چمن، توسعه‌دهنده وب، توسعه‌دهنده فرانت‌اند، ری‌اکت، نکست‌جی‌اس، تایپ‌اسکریپت، جاوااسکریپت، مهندس نرم‌افزار، توسعه‌دهنده فول‌استک، مشاور نرم‌افزار، مشاور وب، شیراز، ایران، پورتفولیو وب‌سایت",
    authors: [
      {
        name: isEnglish ? "Abolfazl Chaman" : "ابوالفضل چمن",
        url: isEnglish ? "https://www.abolfazlchaman.ir/en" : "https://www.abolfazlchaman.ir/fa",
      },
    ],
    openGraph: {
      type: "website",
      title: isEnglish
        ? "Abolfazl Chaman - Web Developer | Software Engineer | React & Next.js Expert | Software Consultant"
        : "ابوالفضل چمن - توسعه‌دهنده وب | مهندس نرم‌افزار | متخصص ری‌اکت و نکست‌جی‌اس | مشاور نرم‌افزار",
      description: isEnglish
        ? "Discover the portfolio of Abolfazl Chaman, a seasoned Web Developer and Software Engineer with over 5 years of experience delivering high-performance, scalable web applications. Specializing in React, Next.js, TypeScript, and modern full-stack web and software development. Check out my resume and let's discuss how I can help improve your team or project output."
        : "پورتفولیوی ابوالفضل چمن، توسعه‌دهنده وب و مهندس نرم‌افزار با بیش از ۵ سال تجربه در ارائه اپلیکیشن‌های وب با عملکرد بالا و مقیاس‌پذیر. متخصص در ری‌اکت، نکست‌جی‌اس، تایپ‌اسکریپت و توسعه وب و نرم‌افزار فول‌استک مدرن. رزومه من را مشاهده کنید و با من در مورد بهبود عملکرد تیم یا خروجی پروژه خود ارتباط برقرار کنید.",
      url: isEnglish ? "https://www.abolfazlchaman.ir/en" : "https://www.abolfazlchaman.ir/fa",
      siteName: isEnglish ? "Abolfazl Chaman Portfolio" : "پورتفولیوی ابوالفضل چمن",
      images: [
        {
          url: "https://www.abolfazlchaman.ir/images/AbolfazlChamanFormal.jpg",
          alt: isEnglish
            ? "Abolfazl Chaman - Web Developer, Software Engineer and Software Consultant"
            : "ابوالفضل چمن - توسعه‌دهنده، وب مهندس نرم‌افزار و مشاور نرم‌افزار",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isEnglish
        ? "Abolfazl Chaman - Web Developer | Software Engineer | React & Next.js Expert | Software Consultant"
        : "ابوالفضل چمن - توسعه‌دهنده وب | مهندس نرم‌افزار | متخصص ری‌اکت و نکست‌جی‌اس | مشاور نرم‌افزار",
      description: isEnglish
        ? "Discover the portfolio of Abolfazl Chaman, a seasoned Web Developer and Software Engineer with over 5 years of experience delivering high-performance, scalable web applications. Specializing in React, Next.js, TypeScript, and modern full-stack web and software development. Check out my resume and let's discuss how I can help improve your team or project output."
        : "پورتفولیوی ابوالفضل چمن، توسعه‌دهنده وب و مهندس نرم‌افزار با بیش از ۵ سال تجربه در ارائه اپلیکیشن‌های وب با عملکرد بالا و مقیاس‌پذیر. متخصص در ری‌اکت، نکست‌جی‌اس، تایپ‌اسکریپت و توسعه وب و نرم‌افزار فول‌استک مدرن. رزومه من را مشاهده کنید و با من در مورد بهبود عملکرد تیم یا خروجی پروژه خود ارتباط برقرار کنید.",
      images: [
        {
          url: "https://www.abolfazlchaman.ir/images/AbolfazlChamanFormal.jpg",
          alt: isEnglish
            ? "Abolfazl Chaman - Web Developer, Software Engineer and Software Consultant"
            : "ابوالفضل چمن - توسعه‌دهنده، وب مهندس نرم‌افزار و مشاور نرم‌افزار",
        },
      ],
    },
    canonical: isEnglish ? "https://www.abolfazlchaman.ir/en" : "https://www.abolfazlchaman.ir/fa",
  };
};

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  // BUG remove await async if flashing is major
  const { lang } = params;
  const metadata = getMetadata(lang);
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <html
      lang={lang}
      dir={dir}>
      <head>
        <title>{metadata.title as string}</title>
        {/* Favicon & Manifest */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
        {/* Alternate & Canonical */}
        <link
          rel="alternate"
          href="https://www.abolfazlchaman.ir/en"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.abolfazlchaman.ir/fa"
          hrefLang="fa"
        />
        <link
          rel="canonical"
          href={metadata.canonical as string}
        />
        {/* Meta Tags */}
        <meta
          name="description"
          content={metadata.description as string}
        />
        <meta
          name="keywords"
          content={metadata.keywords as string}
        />
        <meta
          property="og:title"
          content={metadata.openGraph?.title as string}
        />
        <meta
          property="og:description"
          content={metadata.openGraph?.description as string}
        />
        <meta
          property="og:image"
          content={metadata.openGraph?.images?.[0]?.url}
        />
        <meta
          property="og:url"
          content={metadata.openGraph?.url}
        />
        <meta
          name="twitter:title"
          content={metadata.twitter?.title as string}
        />
        <meta
          name="twitter:description"
          content={metadata.twitter?.description as string}
        />
        <meta
          name="twitter:image"
          content={metadata.twitter?.images?.[0]?.url}
        />
        <meta
          property="og:locale"
          content={lang === "fa" ? "fa_IR" : "en_US"}
        />
        <meta
          property="og:locale:alternate"
          content={lang === "fa" ? "en_US" : "fa_IR"}
        />
        <meta
          name="author"
          content={lang === "fa" ? "ابوالفضل چمن" : "Abolfazl Chaman"}
        />
      </head>
      <body className={`${shabnam.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
