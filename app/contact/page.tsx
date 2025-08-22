'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  ArrowRightIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

const contactInfo = [
  {
    name: '邮箱',
    value: 'contact@photinia.com',
    icon: EnvelopeIcon,
    description: '我们会在24小时内回复您的邮件',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: '电话',
    value: '+86 138 0000 0000',
    icon: PhoneIcon,
    description: '工作日 9:00-18:00 为您服务',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: '地址',
    value: '北京市朝阳区建国门外大街1号',
    icon: MapPinIcon,
    description: '欢迎预约到访，面对面交流',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: '工作时间',
    value: '周一至周五 9:00-18:00',
    icon: ClockIcon,
    description: '周末和节假日休息',
    gradient: 'from-orange-500 to-red-500',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // 重置表单
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
      })
    }, 5000)
  }

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section - 更精致的Clerk风格 */}
      <div className="relative isolate overflow-hidden gradient-bg">
        {/* 背景装饰 */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="container-max section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-primary-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-6">
              <SparklesIcon className="h-4 w-4" />
              <span>联系我们</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              联系我们
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              准备开始您的下一个项目了吗？我们期待与您合作，
              一起创造令人印象深刻的数字体验。
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info - 更精致的表单设计 */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600">
                  <BuildingOfficeIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    项目咨询
                  </h2>
                  <p className="text-gray-600">请填写以下信息，我们会尽快与您联系</p>
                </div>
              </div>
              
              {isSubmitted ? (
                <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckCircleIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-green-800">提交成功！</h3>
                      <p className="text-green-700">感谢您的咨询，我们会在24小时内与您联系。</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                        邮箱 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                        公司名称
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="请输入公司名称"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                        联系电话
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="请输入联系电话"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                        项目类型
                      </label>
                      <select
                        name="projectType"
                        id="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="input-field"
                      >
                        <option value="">请选择项目类型</option>
                        <option value="企业官网">企业官网</option>
                        <option value="电商平台">电商平台</option>
                        <option value="移动应用">移动应用</option>
                        <option value="教育平台">教育平台</option>
                        <option value="医疗健康">医疗健康</option>
                        <option value="创意设计">创意设计</option>
                        <option value="其他">其他</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                        预算范围
                      </label>
                      <select
                        name="budget"
                        id="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="input-field"
                      >
                        <option value="">请选择预算范围</option>
                        <option value="5万以下">5万以下</option>
                        <option value="5-10万">5-10万</option>
                        <option value="10-20万">10-20万</option>
                        <option value="20-50万">20-50万</option>
                        <option value="50万以上">50万以上</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                      项目周期
                    </label>
                    <select
                      name="timeline"
                      id="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">请选择项目周期</option>
                      <option value="1个月内">1个月内</option>
                      <option value="1-3个月">1-3个月</option>
                      <option value="3-6个月">3-6个月</option>
                      <option value="6个月以上">6个月以上</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                      项目描述
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="请详细描述您的项目需求、目标和期望..."
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          提交中...
                        </>
                      ) : (
                        <>
                          提交咨询
                          <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                联系信息
              </h2>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                我们随时准备为您提供专业的咨询服务，欢迎通过以下方式联系我们。
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.name} className="card p-6">
                    <div className="flex gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${info.gradient}`}>
                        <info.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{info.name}</h3>
                        <p className="mt-1 text-lg text-gray-600">{info.value}</p>
                        <p className="mt-1 text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Office Hours */}
              <div className="card p-6 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">办公时间</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span>周一至周五</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span>周六</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>周日</span>
                    <span className="text-gray-400">休息</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                  * 紧急项目可安排加班，请提前预约
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section - 更精致的地图展示 */}
      <div className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-6">
              <MapPinIcon className="h-4 w-4" />
              <span>我们的位置</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              欢迎到访
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们位于北京市朝阳区，交通便利，欢迎预约到访，面对面交流项目细节。
            </p>
          </div>
          
          <div className="mt-12">
            <div className="card overflow-hidden">
              <div className="aspect-[16/9] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.1234567890123!2d116.1234567890123!3d39.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA3JzM0LjQiTiAxMTbCsDA3JzM0LjQiRQ!5e0!3m2!1sen!2scn!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Photinia Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - 更精致的常见问题 */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-6">
              <SparklesIcon className="h-4 w-4" />
              <span>常见问题</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              您可能想了解的问题
            </h2>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-6">
              {[
                {
                  question: "项目开发周期一般是多久？",
                  answer: "项目周期取决于项目复杂度和功能需求。一般企业官网需要4-8周，电商平台需要8-16周，复杂系统可能需要3-6个月。我们会根据您的具体需求制定详细的项目计划。"
                },
                {
                  question: "你们提供哪些售后服务？",
                  answer: "我们提供3个月的免费维护期，包括bug修复、小功能调整等。之后可选择年度维护服务，确保网站稳定运行和持续优化。"
                },
                {
                  question: "如何保证项目质量？",
                  answer: "我们采用敏捷开发流程，分阶段交付和测试。每个阶段都有质量检查点，确保最终产品符合预期。同时提供详细的技术文档和用户手册。"
                },
                {
                  question: "可以修改现有网站吗？",
                  answer: "当然可以！我们提供网站重构和升级服务，可以基于您现有的网站进行功能增强、设计优化或技术升级，让您的网站焕发新生。"
                }
              ].map((faq, index) => (
                <div key={index} className="card p-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
