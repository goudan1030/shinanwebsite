import Link from 'next/link'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const navigation = {
  main: [
    { name: '首页', href: '/' },
    { name: '案例', href: '/cases' },
    { name: '关于我们', href: '/about' },
    { name: '联系我们', href: '/contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container-max section-padding">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 shadow-soft">
                <SparklesIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Photinia</span>
            </div>
            <p className="text-gray-300 text-sm leading-6">
              我们致力于为客户提供最优质的网站开发服务，创造卓越的数字体验。
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200 shadow-soft hover:shadow-medium"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6">服务</h3>
                <ul role="list" className="space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white mb-6">技术</h3>
                <ul role="list" className="space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                      React
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                      Next.js
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                      TypeScript
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6">联系我们</h3>
                <ul role="list" className="space-y-4">
                  <li className="flex items-center space-x-3 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-200">
                      <EnvelopeIcon className="h-4 w-4" />
                    </div>
                    <span className="text-sm leading-6 text-gray-300 group-hover:text-white transition-colors duration-200">contact@photinia.com</span>
                  </li>
                  <li className="flex items-center space-x-3 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-200">
                      <PhoneIcon className="h-4 w-4" />
                    </div>
                    <span className="text-sm leading-6 text-gray-300 group-hover:text-white transition-colors duration-200">+86 138 0000 0000</span>
                  </li>
                  <li className="flex items-center space-x-3 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-200">
                      <MapPinIcon className="h-4 w-4" />
                    </div>
                    <span className="text-sm leading-6 text-gray-300 group-hover:text-white transition-colors duration-200">北京市朝阳区</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; 2024 Photinia. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
}
