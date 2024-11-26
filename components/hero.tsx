import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Unleash Your Creativity with AI
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          Transform text into videos, images, and speech effortlessly.
        </p>
        <Button size="lg" className="animate-pulse">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

