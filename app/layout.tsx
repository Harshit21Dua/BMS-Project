import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thapar SBMS - Smart Battery Management System',
  description: 'An intelligent monitoring and control system for electric vehicle batteries developed at Thapar Institute of Engineering and Technology, Patiala, India. Sponsored by Ministry of Electronics and Information Technology (MeitY), ESDA.',
  keywords: ['Smart BMS', 'Battery Management System', 'Thapar Institute', 'Electric Vehicle', 'EV Battery', 'TIET', 'MeitY'],
  authors: [{ name: 'Thapar Institute of Engineering and Technology' }],
  openGraph: {
    title: 'Thapar SBMS - Smart Battery Management System',
    description: 'Intelligent monitoring and control system for electric vehicle batteries',
    type: 'website',
    locale: 'en_US',
    siteName: 'Thapar SBMS',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
