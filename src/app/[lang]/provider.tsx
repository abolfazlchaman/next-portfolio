"use client"

import { CookiesProvider } from "react-cookie"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/components/theme-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </ThemeProvider>
    </CookiesProvider>
  )
}