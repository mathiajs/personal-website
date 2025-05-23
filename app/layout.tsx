import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Intro from '@/components/intro'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mathias Skogen-Karstensen | Personal Website',
  description: 'Mathias is a third year computer science student at NTNU in Trondheim, Norway.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-slate-50 text-slate-950 relative pt-28 sm:pt-36 dark:bg-slate-800 dark:text-slate-50 dark:text-opacity-90`}>
        <div className="bg-[#e2fbf5] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position='top-right' />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
      <Analytics />
      </body>
    </html>
  );
}