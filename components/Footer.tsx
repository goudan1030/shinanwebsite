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
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* 简洁的科技感背景 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      
      <div className="relative container-max py-16 px-6">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-6 xl:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <svg className="h-6 w-6 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 8h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H8V8z" fill="currentColor"/>
                  <path d="M8 16v-2h4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">杭州石楠文化科技有限公司</span>
            </div>
            <p className="text-base leading-7 text-gray-300 max-w-md">
              我们是一家AI驱动的科技创新型公司，专注于为企业提供全方位的数字解决方案，包括网站开发、移动应用开发、企业系统开发、AI应用开发等，结合最新的AI技术和设计理念，帮助您的品牌在数字世界中脱颖而出。
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold leading-6 text-white mb-4">服务</h3>
                <ul role="list" className="space-y-3">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-base font-semibold leading-6 text-white mb-4">技术栈</h3>
                <ul role="list" className="space-y-3">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                      React
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                      Next.js
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                      TypeScript
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold leading-6 text-white mb-4">联系我们</h3>
                <ul role="list" className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 text-gray-400">
                      <EnvelopeIcon className="h-4 w-4" />
                    </div>
                    <span className="text-base leading-6 text-gray-300 whitespace-nowrap">contact@shinan.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 text-gray-400">
                      <PhoneIcon className="h-4 w-4" />
                    </div>
                    <span className="text-base leading-6 text-gray-300 whitespace-nowrap">+86 138 0000 0000</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 text-gray-400">
                      <MapPinIcon className="h-4 w-4" />
                    </div>
                    <span className="text-base leading-6 text-gray-300 whitespace-nowrap">杭州市西湖区</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-6">
          <p className="text-sm leading-5 text-gray-400 text-center">
            &copy; 2024 杭州石楠文化科技有限公司. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
}
