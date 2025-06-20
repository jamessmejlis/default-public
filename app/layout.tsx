import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import TanstackClientProvider from '@/components/providers/tanstack-client-provider'
import { SupabaseProvider } from '@/utils/supabase/context'
import { Navbar } from '@/components/ui/navbar'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'DefaultPublic - Public-First Feedback & Roadmap Tool',
  description: 'Turn user feedback into public momentum. The lightweight, AI-powered roadmap tool for solo founders building in public.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SupabaseProvider>
          <Navbar />
          <TanstackClientProvider>{children}</TanstackClientProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}