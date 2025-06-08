"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function CTA() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement waitlist signup
    setIsSubmitted(true)
  }

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Turn Stealth Mode Off?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the community of solo founders who are building in public and turning 
            user feedback into unstoppable momentum.
          </p>

          {/* Pricing Preview */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Solo Plan</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-4">$9<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  1 Public Roadmap
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Unlimited Feedback
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  AI Insights
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Social Sharing
                </li>
              </ul>
            </div>
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Small Team</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-4">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Multiple Roadmaps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Team Collaboration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Advanced Analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Priority Support
                </li>
              </ul>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <Link href="/auth/sign-up">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-12 py-4 text-xl">
                Start Building in Public
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            
            <p className="text-gray-400 text-sm">
              No credit card required • 14-day free trial • Setup in under 10 minutes
            </p>
          </div>

          {/* Waitlist Form */}
          <div className="mt-16 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Join the Early Access Waitlist
            </h3>
            {isSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-green-400 font-medium">Thanks! You're on the list.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Button type="submit" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Join
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}