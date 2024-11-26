import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Video, Image, Mic } from 'lucide-react'

const features = [
  {
    title: 'Text-to-Video',
    description: 'Convert your words into stunning videos in just a few clicks.',
    icon: Video,
    action: 'Try Text-to-Video',
  },
  {
    title: 'Text-to-Image',
    description: 'Bring your imagination to life by generating images from text.',
    icon: Image,
    action: 'Try Text-to-Image',
  },
  {
    title: 'Text-to-Speech',
    description: 'Transform text into natural-sounding speech effortlessly.',
    icon: Mic,
    action: 'Try Text-to-Speech',
  },
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <feature.icon className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Placeholder for feature demo */}
                <div className="bg-gray-200 h-40 rounded-md flex items-center justify-center text-gray-500">
                  Feature Demo Placeholder
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{feature.action}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

