import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
