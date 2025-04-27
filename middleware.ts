// middleware.ts

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest, NextResponse } from 'next/server'

// Use short language codes everywhere
const locales = ['en', 'fa']
const defaultLocale = 'en'

function getLocale (request: NextRequest) {
  // const cookieLang = request.cookies.get('language')?.value
  // if (cookieLang && locales.includes(cookieLang)) {
  //   return cookieLang
  // }

  const negotiator = new Negotiator({
    headers: {
      'accept-language': request.headers.get('accept-language') || defaultLocale
    }
  })

  const languages = negotiator.languages().map(lang => {
    if (lang.startsWith('fa')) return 'fa'
    if (lang.startsWith('en')) return 'en'
    return defaultLocale
  })

  return match(languages, locales, defaultLocale)
}

export function middleware (request: NextRequest) {
  const pathname = request.nextUrl.pathname
  // const cookieLang = request.cookies.get('language')?.value

  // Skip static files and internal routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/fonts') ||
    pathname === '/site.webmanifest'
  ) {
    return NextResponse.next()
  }

  // Already on a locale route
  if (pathname.startsWith('/fa') || pathname.startsWith('/en')) {
    const expectedLang = pathname.startsWith('/fa') ? 'fa' : 'en'

    // Only set cookie if different
    // if (cookieLang !== expectedLang) {
    //   const response = NextResponse.next()
    //   response.cookies.set('language', expectedLang, {
    //     path: '/',
    //     maxAge: 31536000 // 1 year
    //   })
    //   return response
    // }

    return NextResponse.next()
  }

  // No locale in path: detect and redirect
  const detectedLocale = getLocale(request)

  const newUrl = new URL(`/${detectedLocale}${pathname}`, request.url)
  const response = NextResponse.redirect(newUrl)
  // response.cookies.set('language', detectedLocale, {
  //   path: '/',
  //   maxAge: 31536000
  // })
  return response
}

// Matcher: exclude static paths and already localized paths
export const config = {
  matcher: ['/((?!_next|fa|en|api|favicon.ico|fonts|images).*)']
}
