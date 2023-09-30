import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../../public/assets/css/vendor/vendor.min.css';
import '../../public/assets/css/plugins/plugins.min.css';
import '../../public/assets/css/style.min.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/footer';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Kelajak Mebellari',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
