import { Analytics } from "@vercel/analytics/next";
import { i18n, type Locale } from "../../i18n-config";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const shabnam = localFont({
  src: [
    { path: "../fonts/Shabnam-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Shabnam.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Shabnam-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-shabnam",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const isEnglish = params.lang === "en";

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
      images: "https://www.abolfazlchaman.ir/images/AbolfazlChamanFormal.jpg",
    },
    alternates: {
      canonical: isEnglish
        ? "https://www.abolfazlchaman.ir/en"
        : "https://www.abolfazlchaman.ir/fa",
    },
  };
}

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  const { children } = props;
  const isRtl = ["fa", "ar", "he"].includes(params.lang); //keep for future

  return (
    <html
      className={`${shabnam.variable} scroll-smooth antialiased`}
      lang={params.lang}
      dir={isRtl ? "rtl" : "ltr"}
      suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
