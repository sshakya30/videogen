import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 VideoGen. All Rights Reserved.</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-500 hover:text-primary"><Facebook className="h-6 w-6" /></Link>
            <Link href="#" className="text-gray-500 hover:text-primary"><Twitter className="h-6 w-6" /></Link>
            <Link href="#" className="text-gray-500 hover:text-primary"><Instagram className="h-6 w-6" /></Link>
            <Link href="#" className="text-gray-500 hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

