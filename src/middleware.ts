import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest, NextResponse } from 'next/server'

const locales = ['en-US', 'fa']
const defaultLocale = 'en-US'

function getLocale (request: NextRequest) {
  const cookieLang = request.cookies.get('language')?.value
  if (cookieLang && locales.includes(cookieLang)) {
    return cookieLang
  }

  const negotiator = new Negotiator({
    headers: {
      'accept-language': request.headers.get('accept-language') || defaultLocale
    }
  })

  const languages = negotiator.languages().map(lang => {
    switch (lang.toLowerCase()) {
      case 'fa':
        return 'fa'
      case 'en':
        return 'en-US'
      default:
        return lang
    }
  })

  return match(languages, locales, defaultLocale)
}

export function middleware (request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const cookieLang = request.cookies.get('language')?.value
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/fonts') ||
    pathname === '/site.webmanifest'
  ) {
    return NextResponse.next()
  }

  // If already on a locale route (/fa or /en), just update cookie if needed (no redirect)
  if (pathname.startsWith('/fa') || pathname.startsWith('/en')) {
    const expectedLang = pathname.startsWith('/fa') ? 'fa' : 'en-US'

    // Only update cookie if it differs from the route
    if (cookieLang !== expectedLang) {
      const response = NextResponse.next()
      response.cookies.set('language', expectedLang, {
        path: '/',
        maxAge: 31536000
      })
      return response
    }

    return NextResponse.next()
  }

  // If no locale in path, detect best match and redirect
  const detectedLocale = getLocale(request)

  const newUrl = new URL(`/${detectedLocale}${pathname}`, request.url)
  const response = NextResponse.redirect(newUrl)
  response.cookies.set('language', detectedLocale, {
    path: '/',
    maxAge: 31536000
  })
  return response
}

// Middleware matcher config: exclude certain paths from being handled
export const config = {
  matcher: ['/((?!_next|fa|en|api|favicon.ico|fonts|images).*)']
}
