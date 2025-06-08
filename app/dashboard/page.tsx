"use client"

import { useState, useEffect } from 'react'
import { DashboardHeader } from '@/components/dashboard/header'
import { RoadmapColumns } from '@/components/dashboard/roadmap-columns'
import { FeedbackPanel } from '@/components/dashboard/feedback-panel'
import { AnalyticsPanel } from '@/components/dashboard/analytics-panel'
import { WelcomeModal } from '@/components/dashboard/welcome-modal'
import { useSearchParams } from 'next/navigation'

export default function DashboardPage() {
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('welcome') === 'true') {
      setShowWelcome(true)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader 
        onToggleAnalytics={() => setShowAnalytics(!showAnalytics)}
        showAnalytics={showAnalytics}
      />
      
      <main className="container mx-auto px-4 py-6">
        {showAnalytics && (
          <div className="mb-6">
            <AnalyticsPanel />
          </div>
        )}
        
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <RoadmapColumns />
          </div>
          <div className="lg:col-span-1">
            <FeedbackPanel />
          </div>
        </div>
      </main>

      {showWelcome && (
        <WelcomeModal onClose={() => setShowWelcome(false)} />
      )}
    </div>
  )
}