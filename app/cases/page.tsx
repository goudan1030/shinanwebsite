import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  GlobeAltIcon, 
  DevicePhoneMobileIcon, 
  ShoppingBagIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HeartIcon,
  SparklesIcon,
  ArrowRightIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: '企业官网重构',
    description: '为传统制造企业打造现代化的响应式官网，提升品牌形象和用户体验',
    category: '企业官网',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    client: 'ABC制造集团',
    duration: '8周',
    results: '网站加载速度提升60%，用户停留时间增加40%',
    icon: BuildingOfficeIcon,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: '电商平台开发',
    description: '完整的电商解决方案，包含商品管理、购物车、支付集成等功能',
    category: '电商平台',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    client: 'XYZ零售',
    duration: '12周',
    results: '月销售额增长35%，用户转化率提升25%',
    icon: ShoppingBagIcon,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: '移动应用官网',
    description: '为移动应用产品设计专业的落地页，优化用户获取和转化',
    category: '移动应用',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    client: '创新科技',
    duration: '6周',
    results: '应用下载量增长50%，用户注册率提升30%',
    icon: DevicePhoneMobileIcon,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: '教育平台设计',
    description: '现代化的在线教育平台，支持课程管理、学习跟踪和互动功能',
    category: '教育科技',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Chart.js'],
    client: '未来教育',
    duration: '16周',
    results: '学生参与度提升45%，课程完成率增加60%',
    icon: AcademicCapIcon,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: '医疗健康平台',
    description: '专业的医疗健康服务平台，提供预约、咨询和健康管理功能',
    category: '医疗健康',
    image: 'https://images.unsplash.com/photo-1576091160399-112c8b0a0df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['Next.js', 'Supabase', 'Tailwind CSS', 'React Hook Form'],
    client: '健康医疗',
    duration: '20周',
    results: '患者满意度提升55%，预约效率提高40%',
    icon: HeartIcon,
    gradient: 'from-red-500 to-pink-500',
  },
  {
    id: 6,
    title: '创意机构官网',
    description: '为创意设计机构打造独特的品牌展示网站，突出创意和设计能力',
    category: '创意设计',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'GSAP'],
    client: '创意无限',
    duration: '10周',
    results: '品牌知名度提升40%，客户咨询量增长65%',
    icon: GlobeAltIcon,
    gradient: 'from-indigo-500 to-purple-500',
  },
]

const categories = [
  { name: '全部', value: 'all', count: projects.length, icon: SparklesIcon },
  { name: '企业官网', value: 'enterprise', count: 1, icon: BuildingOfficeIcon },
  { name: '电商平台', value: 'ecommerce', count: 1, icon: ShoppingBagIcon },
  { name: '移动应用', value: 'mobile', count: 1, icon: DevicePhoneMobileIcon },
  { name: '教育科技', value: 'education', count: 1, icon: AcademicCapIcon },
  { name: '医疗健康', value: 'healthcare', count: 1, icon: HeartIcon },
  { name: '创意设计', value: 'creative', count: 1, icon: GlobeAltIcon },
]

export default function CasesPage() {
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
              <span>项目案例</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              我们的项目案例
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              探索我们为各行各业客户打造的优秀项目，每一个案例都体现了我们对品质的追求和对创新的热情。
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter - 更精致的筛选器 */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-max">
          <div className="flex flex-wrap gap-3 py-8">
            {categories.map((category) => (
              <button
                key={category.value}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-soft ring-1 ring-inset ring-gray-200 hover:bg-gray-50 hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
              >
                <category.icon className="h-4 w-4 text-primary-600" />
                {category.name}
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid - 更精致的项目展示 */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="card card-hover overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative aspect-[16/9] bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-gray-700 shadow-soft ring-1 ring-inset ring-white/20`}>
                      <project.icon className="h-3 w-3" />
                      {project.category}
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  {/* Title and Description */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="badge badge-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Details */}
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">客户:</span>
                        <span className="ml-2 text-gray-600">{project.client}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">周期:</span>
                        <span className="ml-2 text-gray-600">{project.duration}</span>
                      </div>
                    </div>
                    
                    {/* Results */}
                    <div>
                      <span className="text-sm font-medium text-gray-900">成果:</span>
                      <p className="mt-1 text-sm text-gray-600">{project.results}</p>
                    </div>
                  </div>
                  
                  {/* View Details Button */}
                  <button className="w-full btn-outline group">
                    查看详情
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - 更精致的行动号召 */}
      <div className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-6">
              <SparklesIcon className="h-4 w-4" />
              <span>准备开始</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              准备开始您的项目了吗？
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              让我们携手合作，将您的想法转化为令人印象深刻的数字产品。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="btn-primary group"
              >
                联系我们
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/about" className="btn-outline group">
                了解更多
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
