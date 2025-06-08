"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,64,64,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Turn User Feedback Into Public Momentum</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-yellow-400">DefaultPublic</span>
            <br />
            Build in Public,
            <br />
            <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              Ship with Confidence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The lightweight, AI-powered roadmap and feedback tool designed for solo founders. 
            Turn community input into marketing traction and reach product-market fit faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/auth/sign-up">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg">
                Create Public Roadmap
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                See Demo
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="text-gray-400 text-sm">
            Join 500+ solo founders building in public
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-400/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  )
}