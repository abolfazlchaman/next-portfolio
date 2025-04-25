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

  // Handle /en → redirect to / if language is not 'en-US'
  if (pathname.startsWith('/en')) {
    if (cookieLang !== 'en-US') {
      const response = NextResponse.redirect(
        new URL(pathname.replace(/^\/en/, '') || '/', request.url)
      )
      response.cookies.set('language', 'en-US', { path: '/', maxAge: 31536000 })
      return response
    }
    return NextResponse.next() // No change needed if the cookie already matches
  }

  // Handle /fa → redirect to /fa if language is not 'fa'
  if (pathname.startsWith('/fa')) {
    if (cookieLang !== 'fa') {
      const response = NextResponse.redirect(
        new URL(pathname.replace(/^\/fa/, '') || '/', request.url)
      )
      response.cookies.set('language', 'fa', { path: '/', maxAge: 31536000 })
      return response
    }
    return NextResponse.next() // No change needed if the cookie already matches
  }

  // For all other paths, determine the locale based on the cookie or browser language
  const detectedLocale = getLocale(request)

  // Redirect to the correct locale version based on detected language
  if (detectedLocale === 'fa' && !pathname.startsWith('/fa')) {
    const newUrl = new URL(`/fa${pathname}`, request.url)
    const response = NextResponse.redirect(newUrl)
    response.cookies.set('language', 'fa', { path: '/', maxAge: 31536000 })
    return response
  } else if (detectedLocale === 'en-US' && !pathname.startsWith('/en')) {
    const newUrl = new URL(`/en${pathname}`, request.url)
    const response = NextResponse.redirect(newUrl)
    response.cookies.set('language', 'en-US', { path: '/', maxAge: 31536000 })
    return response
  }

  return NextResponse.next() // Continue processing if nothing matches
}

export const config = {
  matcher: ['/((?!_next|fa|api|favicon.ico|fonts|images).*)', '/en/:path*']
}
