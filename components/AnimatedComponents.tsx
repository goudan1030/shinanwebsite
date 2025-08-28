'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// 滚动触发动画组件
export function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 浮动动画组件
export function FloatingElement({ children, className = '' }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 脉冲动画组件
export function PulseElement({ children, className = '' }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          '0 0 0 0 rgba(59, 130, 246, 0.4)',
          '0 0 0 10px rgba(59, 130, 246, 0)',
          '0 0 0 0 rgba(59, 130, 246, 0)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 打字机效果组件
export function TypewriterText({ text, className = '', speed = 50 }: {
  text: string
  className?: string
  speed?: number
}) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  )
}

// 3D卡片翻转组件
export function FlipCard({ front, back, className = '' }: {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`flip-card ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="flip-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute w-full h-full backface-hidden">
          {front}
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {back}
        </div>
      </motion.div>
    </div>
  )
}

// 粒子背景组件
export function ParticleBackground({ className = '' }: {
  className?: string
}) {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((i) => (
        <motion.div
          key={i}
          className="particle"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

// 波浪动画组件
export function WaveAnimation({ className = '' }: {
  className?: string
}) {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        viewBox="0 0 120 28"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          d="M0,15 C30,15 30,-5 60,-5 C90,-5 90,15 120,15 L120,28 L0,28 Z"
          fill="currentColor"
          opacity="0.1"
        />
        <path
          d="M0,20 C30,20 30,0 60,0 C90,0 90,20 120,20 L120,28 L0,28 Z"
          fill="currentColor"
          opacity="0.2"
        />
      </svg>
    </motion.div>
  )
}

// 渐变文字组件
export function GradientText({ children, className = '' }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.span
      className={`gradient-text ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {children}
    </motion.span>
  )
}

// 心跳动画组件
export function HeartbeatElement({ children, className = '' }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 加载动画组件
export function LoadingSpinner({ className = '' }: {
  className?: string
}) {
  return (
    <motion.div
      className={`w-6 h-6 border-2 border-gray-300 border-t-blue-600 rounded-full ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

// 进度条动画组件
export function AnimatedProgressBar({ progress, className = '' }: {
  progress: number
  className?: string
}) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <motion.div
        className="bg-blue-600 h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  )
}

// 弹跳进入动画组件
export function BounceInElement({ children, delay = 0, className = '' }: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.68, -0.55, 0.265, 1.55],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 滑入动画组件
export function SlideInElement({ children, direction = 'left', delay = 0, className = '' }: {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  className?: string
}) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 悬停缩放组件
export function HoverScaleElement({ children, className = '' }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 悬停旋转组件
export function HoverRotateElement({ children, className = '' }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ rotate: 12 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 悬停发光组件
export function HoverGlowElement({ children, className = '' }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
      }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
