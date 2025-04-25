"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { SiGithub, SiGmail, SiLinkedin, SiTelegram } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

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

export function Footer() {
  const { dict } = useLanguage();
  const socialLinks = dict.socialLinks || [];

  return (
    <footer className="container mx-auto p-4 pt-6 mt-6 border-t bg-background/95">
      {/*TODO <div className="flex flex-wrap justify-center mb-4">
        {footerLinks.map((link) => (
          <Button
            key={link.label}
            variant="link"
            size="sm"
            asChild
            className="gap-2"
          >
            <a href={link.href}>{link.label}</a>
          </Button>
        ))}
      </div> */}
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
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}>
                <Icon className="w-4 h-4" />
                {link.label}
              </a>
            </Button>
          );
        })}
      </div>
      <blockquote className="text-center text-sm text-gray-500 dark:text-gray-400">
        &ldquo;{dict.footer.quote}&rdquo; - {dict.footer.author}
      </blockquote>
      <p className="text-center text-sm text-gray-500 mt-4 dark:text-gray-400">
        &copy; {dict.language === "fa" ? getJalaliYear() : new Date().getFullYear()}{" "}
        {dict.developerInfo.fullName} | {dict.footer.copyrightText}
      </p>
    </footer>
  );
}
