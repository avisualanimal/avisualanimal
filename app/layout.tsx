import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: {
    default: 'A Visual Animal',
    template: '%s — A Visual Animal',
  },
  description:
    'We create cultural footprints that people fall in love with. We back founders and help them build brands and products from the ground up.',
  openGraph: {
    title: 'A Visual Animal',
    description: 'We create cultural footprints that people fall in love with.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload above-the-fold fonts to prevent FOUT on nav + hero */}
        <link rel="preload" href="/fonts/TWKLausanne-100.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/TWKLausanne-200.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PPEditorialNew-Ultralight.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </head>
      <body>
        <ScrollToTop />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
