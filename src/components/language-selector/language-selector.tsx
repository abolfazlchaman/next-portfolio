"use client";

import * as React from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiGoogletranslate } from "react-icons/si";
import { useRouter, usePathname } from "next/navigation";
import { useCookies } from "react-cookie";

const languages = [
  { code: "en", label: "English", path: "/en" },
  { code: "fa", label: "فارسی", path: "/fa" },
];

export function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [cookies, setCookie] = useCookies(["language"]);

  const detectLanguage = () => {
    if (cookies.language) return cookies.language;
    const browserLang = navigator.language || navigator.languages[0];
    if (browserLang.startsWith("fa")) return "fa";
    return "en";
  };

  const setLanguage = (lang: string) => {
    setCookie("language", lang, { path: "/", maxAge: 31536000 });
    const langPath = languages.find((l) => l.code === lang)?.path || "/";
    router.push(langPath);
  };

  useEffect(() => {
    const detectedLang = detectLanguage();

    if (!cookies.language || cookies.language !== detectedLang) {
      setLanguage(detectedLang);
    }

    if (pathname === "/") {
      router.push(detectedLang === "fa" ? "/fa" : "/en");
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon">
          <SiGoogletranslate className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center justify-between">
            <div className="flex items-center gap-2">{lang.label}</div>
            {pathname?.startsWith(lang.path) && <span className="text-primary">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
