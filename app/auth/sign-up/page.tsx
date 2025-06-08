"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Github, Twitter, ArrowLeft, Zap } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // TODO: Implement Clerk email signup
      console.log('Email signup:', { email, password, name })
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/onboarding')
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignUp = (provider: 'github' | 'twitter') => {
    // TODO: Implement Clerk social signup
    console.log(`${provider} signup`)
    router.push('/onboarding')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold text-white">DefaultPublic</span>
            </div>
            <CardTitle className="text-2xl text-white">Create Your Account</CardTitle>
            <CardDescription className="text-gray-400">
              Start building your public roadmap in minutes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Social Sign Up */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
                onClick={() => handleSocialSignUp('github')}
              >
                <Github className="w-4 h-4 mr-2" />
                Continue with GitHub
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
                onClick={() => handleSocialSignUp('twitter')}
              >
                <Twitter className="w-4 h-4 mr-2" />
                Continue with Twitter
              </Button>
            </div>

            <div className="relative">
              <Separator className="bg-gray-700" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-2 text-sm text-gray-400">
                or
              </span>
            </div>

            {/* Email Sign Up */}
            <form onSubmit={handleEmailSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{' '}
                <Link href="/auth/sign-in" className="text-yellow-400 hover:text-yellow-300">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-gray-500 mt-4">
          By creating an account, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}