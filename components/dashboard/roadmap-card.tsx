"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowUp, 
  MessageSquare, 
  Share2, 
  MoreHorizontal,
  Sparkles,
  User
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface RoadmapItem {
  id: string
  title: string
  description: string
  status: 'now' | 'next' | 'later' | 'shipped'
  upvotes: number
  comments: number
  author: string
  createdAt: string
}

interface RoadmapCardProps {
  item: RoadmapItem
}

export function RoadmapCard({ item }: RoadmapCardProps) {
  const handleUpvote = () => {
    console.log('Upvoting item:', item.id)
  }

  const handleComment = () => {
    console.log('Opening comments for item:', item.id)
  }

  const handleShare = () => {
    console.log('Sharing item:', item.id)
  }

  const handleMarkShipped = () => {
    console.log('Marking as shipped:', item.id)
  }

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleMarkShipped}>
                <Sparkles className="w-4 h-4 mr-2" />
                Mark as Shipped
              </DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleUpvote}
              className="h-8 px-2 hover:bg-blue-50 hover:text-blue-600"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              {item.upvotes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleComment}
              className="h-8 px-2 hover:bg-green-50 hover:text-green-600"
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              {item.comments}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="h-8 px-2 hover:bg-yellow-50 hover:text-yellow-600"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <User className="w-3 h-3" />
              {item.author}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}