// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'


export const metadata: Metadata = {
  metadataBase: new URL('https://greenstorage.vercel.app/'),
  title: 'GreenStorage',
  description: 'Almacenamiento verde en la nube',
  openGraph: {
    images: '/opengraph-image.jpg',
  },
}

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})
const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})

export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={libre_franklin.variable + ' ' + chivo.variable}>
        {children}
      </body>
    </html>
  )
}