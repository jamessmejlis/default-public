"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Eye, 
  Users, 
  TrendingUp, 
  MessageSquare,
  ArrowUp,
  Calendar
} from 'lucide-react'

// Mock analytics data
const analytics = {
  totalViews: 1247,
  uniqueContributors: 89,
  totalUpvotes: 156,
  totalComments: 34,
  topFeature: 'Dark mode support',
  growthRate: '+23%'
}

export function AnalyticsPanel() {
  return (
    <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-yellow-600" />
          This Roadmap in Numbers
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
            Live
          </Badge>
        </CardTitle>
        <p className="text-sm text-gray-600">Real-time engagement metrics for your public roadmap</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-white rounded-lg border border-yellow-200">
            <Eye className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{analytics.totalViews.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Total Views</div>
          </div>
          
          <div className="text-center p-3 bg-white rounded-lg border border-yellow-200">
            <Users className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{analytics.uniqueContributors}</div>
            <div className="text-xs text-gray-600">Contributors</div>
          </div>
          
          <div className="text-center p-3 bg-white rounded-lg border border-yellow-200">
            <ArrowUp className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{analytics.totalUpvotes}</div>
            <div className="text-xs text-gray-600">Total Upvotes</div>
          </div>
          
          <div className="text-center p-3 bg-white rounded-lg border border-yellow-200">
            <MessageSquare className="w-6 h-6 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{analytics.totalComments}</div>
            <div className="text-xs text-gray-600">Comments</div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-gray-900 mb-2">🔥 Hottest Feature</h4>
            <p className="text-sm text-gray-600">{analytics.topFeature}</p>
            <Badge variant="secondary" className="mt-2 bg-red-100 text-red-700">
              23 upvotes
            </Badge>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-gray-900 mb-2">📈 Growth This Week</h4>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600">{analytics.growthRate}</span>
              <span className="text-sm text-gray-600">engagement</span>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            <Calendar className="w-3 h-3" />
            Last updated: Just now
          </p>
        </div>
      </CardContent>
    </Card>
  )
}