"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useCookies } from "react-cookie";
import { getDictionary } from "@/app/[lang]/dictionaries";
import en from "@/dictionaries/en.json";
import fa from "@/dictionaries/fa.json";
import { usePathname } from "next/navigation";

const VALID_LANGUAGES = ["en", "fa"] as const;
type ValidLanguage = (typeof VALID_LANGUAGES)[number];

const isValidLanguage = (lang: string): lang is ValidLanguage =>
  VALID_LANGUAGES.includes(lang as ValidLanguage);

export interface LanguageContextType {
  language: ValidLanguage;
  setLanguage: (lang: ValidLanguage) => void;
  dict: typeof en | typeof fa;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => null,
  dict: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [, setCookie] = useCookies(["language"]);

  const pathLang = pathname?.split("/")[1] || "en";
  const urlLang = pathLang === "fa" ? "fa" : "en";

  const [language, setLanguageState] = useState<ValidLanguage>(urlLang);
  const [dict, setDict] = useState<typeof en | typeof fa>(urlLang === "fa" ? fa : en);

  const setLanguage = useCallback(
    (lang: ValidLanguage) => {
      if (isValidLanguage(lang)) {
        setLanguageState(lang);
        setCookie("language", lang, { path: "/", maxAge: 31536000 });
      }
    },
    [setCookie],
  );

  useEffect(() => {
    if (language !== urlLang) {
      setLanguage(urlLang);
    }
  }, [urlLang, language, setLanguage]);

  useEffect(() => {
    getDictionary(language).then(setDict);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
