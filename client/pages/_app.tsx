import { Inter as FontSans } from '@next/font/google'
import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'

const fontSans = FontSans({
  display: 'swap',
  variable: '--font-sans',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          :root {
            --font-sans: ${fontSans.style.fontFamily};
          }
        `}
      </style>
    </>
  )
}
