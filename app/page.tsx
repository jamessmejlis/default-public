"use client"

import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { CTA } from '@/components/landing/cta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <CTA />
    </main>
  )
}