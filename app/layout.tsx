import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import { Toaster } from "react-hot-toast"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaustubh Shinde',
  description: 'Fullstack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 left-0 h-[31.25rem] w-[50%] rounded-full blur-[10rem] sm:w-[50%] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 right-0 h-[31.25rem] w-[50%] rounded-full blur-[10rem] sm:w-[50%] md:right-0 lg:right-0 xl:right-0 2xl:right-0 dark:bg-[#676394]"></div>
        <Header/>
        {children}
        <Footer/>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
