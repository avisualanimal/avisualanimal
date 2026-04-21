'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[1000] flex flex-col items-center"
      style={{
        mixBlendMode: 'difference',
        padding: '14px 32px 10px',
      }}
    >
      <div className="flex justify-between items-end w-full">
        {/* Logo */}
        <Link href="/" aria-label="A Visual Animal — home" className="block">
          <div className="relative" style={{ width: 209, height: 25 }}>
            <Image
              src="/AvisualAnimalLogoLight.svg"
              alt="A Visual Animal"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Contact */}
        <a
          href="mailto:info@avisualanimal.com"
          style={{
            color: '#fff',
            fontFamily: '"Twklausanne 100", Arial, sans-serif',
            fontSize: 16,
            letterSpacing: '0.04em',
            lineHeight: '120%',
          }}
        >
          Contact
        </a>
      </div>
    </div>
  )
}
