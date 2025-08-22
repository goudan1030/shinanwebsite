'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, SparklesIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: '首页', href: '/' },
  { name: '案例', href: '/cases' },
  { name: '关于我们', href: '/about' },
  { name: '联系我们', href: '/contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl nav-bg">
      <nav className="container-max flex items-center justify-between h-16">
        {/* Logo - 简约的黑色logo设计 */}
        <div className="flex items-center">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center">
                {/* 简约的黑色logo - 字母P的几何设计 */}
                <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="24" height="24" rx="6" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                  <path d="M12 8h8a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-8V8z" fill="currentColor" className="text-gray-900"/>
                  <path d="M12 20v-4h8" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                杭州石楠文化科技有限公司
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation - 跟随在logo右侧，不居中 */}
          <div className="hidden lg:flex lg:gap-x-6 ml-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-black/5 group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* CTA Buttons - 更精致的按钮设计，调整高度和间距 */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <Link 
            href="/contact" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-black/5"
          >
            登录
          </Link>
          <Link 
            href="/contact" 
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-soft hover:shadow-medium transform hover:scale-105"
          >
            开始项目
          </Link>
        </div>
        
        {/* Mobile menu button - 更精致的移动端按钮 */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-black/5 hover:text-gray-900 transition-all duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">打开主菜单</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation - 更精致的移动端菜单 */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-6 py-6 sm:max-w-sm shadow-strong border-l border-gray-200/20">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center">
                    {/* 简约的黑色logo - 字母P的几何设计 */}
                    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="4" width="24" height="24" rx="6" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                      <path d="M12 8h8a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-8V8z" fill="currentColor" className="text-gray-900"/>
                      <path d="M12 20v-4h8" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    杭州石楠文化科技有限公司
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-xl p-2.5 text-gray-700 hover:bg-gray-50/80 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">关闭菜单</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-100/50">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-xl px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50/80 hover:text-gray-700 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2.5 px-4 rounded-lg hover:bg-gray-50/80"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    登录
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    开始项目
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
