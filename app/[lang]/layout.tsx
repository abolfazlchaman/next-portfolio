import { i18n, type Locale } from "../../i18n-config";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

export const metadata = {
  title: "i18n within app router - Vercel Examples",
  description: "How to do i18n in Next.js 15 within app router",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
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
        </ThemeProvider>
      </body>
    </html>
  );
}
