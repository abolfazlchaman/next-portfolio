import { Button } from "@/components/ui/button";
import { SiGithub, SiGmail, SiLinkedin, SiTelegram } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { getDictionary } from "@/get-dictionary";
import Link from "next/link";

// const footerLinks = [
//   { label: "About", href: "/about" },
//   { label: "Projects", href: "/projects" },
//   { label: "Blog", href: "/blog" },
// ];

const iconMap: Record<string, React.ElementType> = {
  github: SiGithub,
  email: SiGmail,
  linkedin: SiLinkedin,
  telegram: SiTelegram,
  whatsapp: IoLogoWhatsapp,
};

function getJalaliYear() {
  const date = new Date();
  const year = date.getFullYear() - 621;
  return year;
}

export function Footer({
  socialLinks,
  footer,
  fullName,
  language,
}: {
  socialLinks: Awaited<ReturnType<typeof getDictionary>>["socialLinks"];
  footer: Awaited<ReturnType<typeof getDictionary>>["footer"];
  fullName: Awaited<ReturnType<typeof getDictionary>>["developerInfo"]["fullName"];
  language: Awaited<ReturnType<typeof getDictionary>>["language"];
}) {
  return (
    <footer className="container mx-auto p-4 pt-6 mt-6 border-t bg-background/95">
      <blockquote className="text-center text-lg text-gray-500 mt-10 mb-10 dark:text-gray-400">
        &ldquo;{footer.quote}&rdquo; - {footer.author}
      </blockquote>
      <div className="flex flex-wrap justify-center mb-4 gap-2">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.key];
          if (!Icon) return null;

          return (
            <Button
              key={link.label}
              variant="outline"
              size="sm"
              asChild
              className="gap-2">
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}>
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            </Button>
          );
        })}
      </div>
      <p className="text-center text-sm text-gray-500 mt-8 mb-8 dark:text-gray-400">
        &copy; {language === "fa" ? getJalaliYear() : new Date().getFullYear()} {fullName} |{" "}
        {footer.copyrightText}
      </p>
    </footer>
  );
}
