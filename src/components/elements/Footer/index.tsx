import { navigation } from '@/Common/VariableOption'
import { BookOpen, ScrollText, Shield } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">BlogHub</span>
          </div>
          <p className="text-slate-400 mb-4">
            Your trusted source for insightful articles, expert opinions, and engaging content across various topics.
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} BlogHub. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <ScrollText className="w-4 h-4" />
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer