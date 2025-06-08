"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RoadmapCard } from './roadmap-card'
import { AddItemModal } from './add-item-modal'
import { Plus, Clock, ArrowRight, CheckCircle } from 'lucide-react'

// Mock data
const mockItems = {
  now: [
    {
      id: '1',
      title: 'User Authentication',
      description: 'Implement secure login and registration system',
      status: 'now' as const,
      upvotes: 12,
      comments: 3,
      author: 'You',
      createdAt: '2024-01-15'
    }
  ],
  next: [
    {
      id: '2',
      title: 'Dashboard Analytics',
      description: 'Add comprehensive analytics dashboard for tracking metrics',
      status: 'next' as const,
      upvotes: 8,
      comments: 2,
      author: 'Community',
      createdAt: '2024-01-14'
    }
  ],
  later: [
    {
      id: '3',
      title: 'Mobile App',
      description: 'Native mobile application for iOS and Android',
      status: 'later' as const,
      upvotes: 15,
      comments: 7,
      author: 'Community',
      createdAt: '2024-01-13'
    }
  ]
}

export function RoadmapColumns() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedColumn, setSelectedColumn] = useState<'now' | 'next' | 'later'>('now')

  const handleAddItem = (column: 'now' | 'next' | 'later') => {
    setSelectedColumn(column)
    setShowAddModal(true)
  }

  const columns = [
    {
      id: 'now' as const,
      title: 'Now',
      subtitle: 'In Progress',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      items: mockItems.now
    },
    {
      id: 'next' as const,
      title: 'Next',
      subtitle: 'Up Next',
      icon: ArrowRight,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      items: mockItems.next
    },
    {
      id: 'later' as const,
      title: 'Later',
      subtitle: 'Wishlist',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      items: mockItems.later
    }
  ]

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <Card key={column.id} className={`${column.borderColor} border-2`}>
            <CardHeader className={`${column.bgColor} rounded-t-lg`}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <column.icon className={`w-5 h-5 ${column.color}`} />
                  <span className="text-lg font-bold">{column.title}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {column.items.length}
                </Badge>
              </CardTitle>
              <p className="text-sm text-gray-600">{column.subtitle}</p>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              {column.items.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No items in this stage yet</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddItem(column.id)}
                    className="text-gray-600"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </Button>
                </div>
              ) : (
                <>
                  {column.items.map((item) => (
                    <RoadmapCard key={item.id} item={item} />
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleAddItem(column.id)}
                    className="w-full border-2 border-dashed border-gray-300 hover:border-gray-400"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {showAddModal && (
        <AddItemModal
          column={selectedColumn}
          onClose={() => setShowAddModal(false)}
          onAdd={(item) => {
            console.log('Adding item:', item)
            setShowAddModal(false)
          }}
        />
      )}
    </>
  )
}