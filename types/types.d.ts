// types/translation.d.ts
export interface Quote {
  quote: string
  author: string
  wiki: string
}
export interface TranslationDict {
  language: string
  developerInfo: {
    fullName: string
    profession: string
    experience: string
    location: string
    CTAButtonText: string
  }
  socialLinks: { platform: string; url: string }[]
  theme: {
    toggle: string
    light: string
    dark: string
    system: string
  }
  title: string
  items: {
    fa: string
    en: string
    de: string
    ar: string
    ru: string
  }
  quotes: Quote[]
  navigation: {
    home: string
    about: string
    projects: string
    blog: string
    toggle_menu: string
  }
  footer: {
    quote: string
    author: string
    copyrightText: string
  }
  about: {
    title: string
    description: string
    buttonTextFa?: string
    buttonTextEn: string
  }
  projects: {
    title: string
    subtitle: string
    projectsData: {
      title: string
      description: string
      link: string
      technologies: string[]
    }[]
  }
  inspiration: {
    description: string
    seeAllInspirations: string
  }
}
export type NavLinksType = {
  home: string
  about: string
  skills: string
  projects: string
  inspirations: string
  // blog?: string;
}
