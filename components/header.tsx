import Link from 'next/link'
import { Video as VideoIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <VideoIcon className="h-6 w-6" />
            <span className="font-bold text-xl">VideoGen</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Button variant="outline" size="sm">Login</Button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

