"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  ArrowUp, 
  MessageSquare, 
  Lightbulb,
  TrendingUp,
  Clock
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Mock feedback data
const mockFeedback = [
  {
    id: '1',
    title: 'Dark mode support',
    description: 'Would love to see a dark theme option for better night usage',
    upvotes: 23,
    comments: 5,
    author: '@johndoe',
    createdAt: '2 hours ago',
    sentiment: 'positive'
  },
  {
    id: '2',
    title: 'Export to PDF',
    description: 'Ability to export roadmaps as PDF for sharing with stakeholders',
    upvotes: 18,
    comments: 3,
    author: '@sarahsmith',
    createdAt: '4 hours ago',
    sentiment: 'neutral'
  },
  {
    id: '3',
    title: 'Slack integration',
    description: 'Get notifications in Slack when new feedback is submitted',
    upvotes: 12,
    comments: 2,
    author: '@mikejones',
    createdAt: '1 day ago',
    sentiment: 'positive'
  }
]

export function FeedbackPanel() {
  const [newSuggestion, setNewSuggestion] = useState('')
  const [sortBy, setSortBy] = useState('upvotes')

  const handleSubmitSuggestion = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newSuggestion.trim()) return
    
    console.log('New suggestion:', newSuggestion)
    setNewSuggestion('')
  }

  const handleUpvote = (id: string) => {
    console.log('Upvoting feedback:', id)
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          Community Ideas
        </CardTitle>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Suggestions from your community</p>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-32 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upvotes">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3 h-3" />
                  Most Voted
                </div>
              </SelectItem>
              <SelectItem value="recent">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Recent
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Suggest Feature Form */}
        <form onSubmit={handleSubmitSuggestion} className="space-y-3">
          <Input
            placeholder="Got a bold idea or pain point? Suggest a feature..."
            value={newSuggestion}
            onChange={(e) => setNewSuggestion(e.target.value)}
            className="placeholder:text-gray-400"
          />
          <Button 
            type="submit" 
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
            disabled={!newSuggestion.trim()}
          >
            <Plus className="w-4 h-4 mr-2" />
            Suggest a Feature
          </Button>
        </form>

        {/* Feedback List */}
        <div className="space-y-3">
          {mockFeedback.map((feedback) => (
            <Card key={feedback.id} className="border border-gray-200 hover:border-gray-300 transition-colors">
              <CardContent className="p-3">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm text-gray-900">{feedback.title}</h4>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      feedback.sentiment === 'positive' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {feedback.sentiment}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  {feedback.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleUpvote(feedback.id)}
                      className="h-7 px-2 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <ArrowUp className="w-3 h-3 mr-1" />
                      {feedback.upvotes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 hover:bg-green-50 hover:text-green-600"
                    >
                      <MessageSquare className="w-3 h-3 mr-1" />
                      {feedback.comments}
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500">
                    {feedback.author} • {feedback.createdAt}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {mockFeedback.length === 0 && (
          <div className="text-center py-8">
            <Lightbulb className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm mb-2">No suggestions yet</p>
            <p className="text-gray-400 text-xs">Be the first to shape what we build!</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}