"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Zap, 
  Share2, 
  Code, 
  Bell, 
  User, 
  BarChart3,
  Settings,
  LogOut
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { useSupabase } from '@/utils/supabase/context'
import { useRouter } from 'next/navigation'

interface DashboardHeaderProps {
  onToggleAnalytics: () => void
  showAnalytics: boolean
}

export function DashboardHeader({ onToggleAnalytics, showAnalytics }: DashboardHeaderProps) {
  const supabase = useSupabase()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      router.push('/')
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            <span className="text-xl font-bold text-gray-900">DefaultPublic</span>
            <Badge variant="secondary" className="text-xs">Beta</Badge>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleAnalytics}
              className={showAnalytics ? 'bg-yellow-50 border-yellow-200' : ''}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            
            <Button variant="outline" size="sm">
              <Code className="w-4 h-4 mr-2" />
              Embed
            </Button>
            
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}