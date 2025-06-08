"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Zap, ArrowRight, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [firstFeature, setFirstFeature] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const totalSteps = 3
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handleFinish = async () => {
    setIsLoading(true)
    
    try {
      // TODO: Create project in database
      console.log('Creating project:', { projectName, projectDescription, firstFeature })
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      router.push('/dashboard?welcome=true')
    } catch (error) {
      console.error('Project creation error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold text-white">DefaultPublic</span>
            </div>
            <CardTitle className="text-2xl text-white">Let's Set Up Your Public Roadmap</CardTitle>
            <CardDescription className="text-gray-400">
              This will only take a few minutes. You'll be live and collecting feedback in no time!
            </CardDescription>
            <div className="mt-4">
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-gray-400 mt-2">Step {step} of {totalSteps}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">What's your project called?</h3>
                  <p className="text-gray-400">Give your project a name that your community will recognize</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectName" className="text-white">Project Name</Label>
                  <Input
                    id="projectName"
                    type="text"
                    placeholder="e.g., MyAwesome SaaS, CoolApp, etc."
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <Button
                  onClick={handleNext}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                  disabled={!projectName.trim()}
                >
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Tell us about your project</h3>
                  <p className="text-gray-400">A brief description helps visitors understand what you're building</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDescription" className="text-white">Project Description</Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="e.g., A simple tool that helps developers manage their side projects and track progress..."
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-h-[100px]"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="border-gray-700 text-white hover:bg-gray-800"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                    disabled={!projectDescription.trim()}
                  >
                    Continue
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Add your first roadmap item</h3>
                  <p className="text-gray-400">What's the first thing you're working on or planning to build?</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstFeature" className="text-white">First Feature/Item</Label>
                  <Input
                    id="firstFeature"
                    type="text"
                    placeholder="e.g., User authentication, Dashboard redesign, Mobile app..."
                    value={firstFeature}
                    onChange={(e) => setFirstFeature(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="border-gray-700 text-white hover:bg-gray-800"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleFinish}
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                    disabled={!firstFeature.trim() || isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Sparkles className="mr-2 w-4 h-4 animate-spin" />
                        Creating Your Roadmap...
                      </>
                    ) : (
                      <>
                        Launch My Public Roadmap
                        <Sparkles className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}