import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '杭州石楠文化科技有限公司 - 专业数字解决方案服务',
  description: '杭州石楠文化科技有限公司专注于为企业提供全方位的数字解决方案，包括网站开发、移动应用开发、企业系统开发、AI应用开发等，结合最新的技术和设计理念，帮助您的品牌在数字世界中脱颖而出。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
