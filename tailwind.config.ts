import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui'],
        shabnam: ['var(--font-shabnam)'],
        mono: ['var(--font-geist-mono)']
      }
    }
  }
}

export default config
