"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Globe, 
  MessageSquare, 
  Brain, 
  Share2, 
  BarChart3, 
  Zap,
  Users,
  Rocket,
  Heart
} from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: "Public-First Design",
    description: "Fully embeddable feedback widget that creates transparency and trust with your early adopters.",
    badge: "Core Feature"
  },
  {
    icon: Share2,
    title: "Social Sharing Engine",
    description: "Auto-generate ready-to-share social posts for every milestone and roadmap update.",
    badge: "Marketing"
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Automatically cluster feedback, analyze sentiment, and get AI-generated roadmap suggestions.",
    badge: "AI-Powered"
  },
  {
    icon: BarChart3,
    title: "Build-in-Public Metrics",
    description: "Track engagement growth and showcase momentum as part of your public journey.",
    badge: "Analytics"
  },
  {
    icon: Zap,
    title: "Lightning Setup",
    description: "Go from signup to live public roadmap in under 10 minutes. No enterprise bloat.",
    badge: "Simple"
  },
  {
    icon: Heart,
    title: "Solo-Friendly Pricing",
    description: "Affordable pricing designed for indie makers and solo founders, starting at $9/month.",
    badge: "Affordable"
  }
]

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose DefaultPublic?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most feedback tools are overbuilt for large teams. DefaultPublic flips the script—
            it's a public engagement weapon that helps solo founders build momentum, trust, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-yellow-400/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentiators Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Not Just Another Feedback Tool
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Amplifier</h4>
              <p className="text-gray-600">Turn feedback into marketing loops that drive engagement</p>
            </div>
            <div className="p-6">
              <Rocket className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Marketing Engine</h4>
              <p className="text-gray-600">Every update becomes shareable content for your audience</p>
            </div>
            <div className="p-6">
              <Brain className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Clarity Tool</h4>
              <p className="text-gray-600">AI insights help you build with users, not just for them</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}