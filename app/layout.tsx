import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Alice, Caveat, Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const alice = Alice({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-alice',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lenguajemusicaljugando.com.ar'),
  title: {
    default: 'Lenguaje Musical Jugando | Materiales imprimibles para docentes de música',
    template: '%s | Lenguaje Musical Jugando',
  },
  description:
    'Juegos y actividades imprimibles en PDF para enseñar lenguaje musical: batalla naval, tarjetas, plantillas para dictado rítmico, figuras y silencios para recortar y más.',
  keywords: [
    'lenguaje musical',
    'educación musical',
    'docentes de música',
    'juegos musicales',
    'imprimibles',
    'dictado rítmico',
    'figuras musicales',
  ],
  openGraph: {
    title: 'Lenguaje Musical Jugando',
    description: 'Materiales imprimibles para enseñar lenguaje musical jugando.',
    url: 'https://lenguajemusicaljugando.com.ar',
    siteName: 'Lenguaje Musical Jugando',
    locale: 'es_AR',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fff8e7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es-AR"
      className={`${montserrat.variable} ${alice.variable} ${caveat.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
