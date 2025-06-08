"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowUp, MessageSquare, Share2, Zap } from 'lucide-react'
import Link from 'next/link'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-gray-600">Back to home</span>
            </Link>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-500" />
              <span className="text-xl font-bold text-gray-900">DefaultPublic Demo</span>
              <Badge variant="secondary">Live Demo</Badge>
            </div>
            <Link href="/auth/sign-up">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Start Building
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Demo Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            MyAwesome SaaS - Public Roadmap
          </h1>
          <p className="text-gray-600">
            See what we're building and suggest features that matter to you
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Roadmap Columns */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Now Column */}
              <Card className="border-blue-200 border-2">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-blue-600">Now</span>
                    <Badge variant="secondary">2</Badge>
                  </CardTitle>
                  <p className="text-sm text-gray-600">In Progress</p>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">User Authentication</h3>
                      <p className="text-sm text-gray-600 mb-3">Secure login and registration system</p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ArrowUp className="w-4 h-4 mr-1" />
                          12
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          3
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Dashboard Redesign</h3>
                      <p className="text-sm text-gray-600 mb-3">Modern, clean interface for better UX</p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ArrowUp className="w-4 h-4 mr-1" />
                          8
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          1
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Next Column */}
              <Card className="border-yellow-200 border-2">
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-yellow-600">Next</span>
                    <Badge variant="secondary">1</Badge>
                  </CardTitle>
                  <p className="text-sm text-gray-600">Up Next</p>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Mobile App</h3>
                      <p className="text-sm text-gray-600 mb-3">Native iOS and Android applications</p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ArrowUp className="w-4 h-4 mr-1" />
                          25
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          7
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Later Column */}
              <Card className="border-green-200 border-2">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-green-600">Later</span>
                    <Badge variant="secondary">2</Badge>
                  </CardTitle>
                  <p className="text-sm text-gray-600">Wishlist</p>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">API Access</h3>
                      <p className="text-sm text-gray-600 mb-3">Public API for third-party integrations</p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ArrowUp className="w-4 h-4 mr-1" />
                          15
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          4
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                      <p className="text-sm text-gray-600 mb-3">Detailed insights and reporting</p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ArrowUp className="w-4 h-4 mr-1" />
                          9
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          2
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Feedback Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Suggest a Feature</CardTitle>
                <p className="text-sm text-gray-600">Got an idea? Let us know!</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="What would you like to see?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                    Submit Suggestion
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Recent Suggestions</h4>
                  
                  <Card className="border border-gray-200">
                    <CardContent className="p-3">
                      <h5 className="font-medium text-sm">Dark Mode</h5>
                      <p className="text-xs text-gray-600 mb-2">Would love a dark theme option</p>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <ArrowUp className="w-3 h-3 mr-1" />
                          23
                        </Button>
                        <span className="text-xs text-gray-500">@johndoe</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200">
                    <CardContent className="p-3">
                      <h5 className="font-medium text-sm">Slack Integration</h5>
                      <p className="text-xs text-gray-600 mb-2">Get notifications in Slack</p>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <ArrowUp className="w-3 h-3 mr-1" />
                          18
                        </Button>
                        <span className="text-xs text-gray-500">@sarah</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Build Your Own Public Roadmap?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join hundreds of solo founders who are building in public and turning user feedback into unstoppable momentum.
              </p>
              <Link href="/auth/sign-up">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8">
                  Start Building for Free
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}