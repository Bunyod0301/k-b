import type { Metadata } from 'next'

import '../../public/assets/css/vendor/vendor.min.css';
import '../../public/assets/css/plugins/plugins.min.css';
import '../../public/assets/css/style.min.css';


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
      <body>
        {children}
      </body>
    </html>
  )
}
