"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { 
  Sparkles, 
  Share2, 
  Code, 
  Copy,
  CheckCircle,
  ExternalLink
} from 'lucide-react'

interface WelcomeModalProps {
  onClose: () => void
}

export function WelcomeModal({ onClose }: WelcomeModalProps) {
  const [step, setStep] = useState(1)
  const [copied, setCopied] = useState(false)
  
  const publicUrl = 'https://defaultpublic.com/roadmap/my-awesome-project'
  const embedCode = `<script src="https://defaultpublic.com/widget.js" data-project="my-awesome-project"></script>`

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(publicUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        {step === 1 && (
          <>
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-yellow-600" />
              </div>
              <DialogTitle className="text-2xl">🎉 Your Roadmap is Live!</DialogTitle>
              <DialogDescription className="text-base">
                Congratulations! Your public roadmap is now live and ready to collect feedback from your community.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-900">Public URL Generated</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-sm bg-white px-2 py-1 rounded border text-gray-700">
                    {publicUrl}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleCopyUrl}
                    className="shrink-0"
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open(publicUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Public Page
                </Button>
                <Button
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black"
                  onClick={() => setStep(2)}
                >
                  Next: Share It
                  <Share2 className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Share2 className="w-8 h-8 text-blue-600" />
              </div>
              <DialogTitle className="text-2xl">Time to Share!</DialogTitle>
              <DialogDescription className="text-base">
                Let your community know about your public roadmap. The more people who see it, the better feedback you'll get.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="h-12"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=Just launched my public roadmap! Check it out and let me know what you think: ${publicUrl}`, '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="h-12"
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${publicUrl}`, '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Button>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Want to embed it?</span>
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Add this widget to your website to collect feedback directly.
                </p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs bg-white px-2 py-1 rounded border text-gray-700 font-mono">
                    {embedCode}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleCopyEmbed}
                    className="shrink-0"
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                onClick={onClose}
              >
                Got it! Let's start building
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}