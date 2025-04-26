const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  fa: () => import('@/dictionaries/fa.json').then(module => module.default)
}

type Locale = keyof typeof dictionaries

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}
