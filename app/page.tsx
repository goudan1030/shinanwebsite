import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: '现代化技术栈',
    description: '使用最新的React、Next.js和Tailwind CSS技术，确保网站性能和用户体验',
    icon: CodeBracketIcon,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: '响应式设计',
    description: '完美适配各种设备，从手机到桌面，提供一致的用户体验',
    icon: DevicePhoneMobileIcon,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: '快速部署',
    description: '优化的构建流程，确保网站快速加载和部署',
    icon: RocketLaunchIcon,
    gradient: 'from-orange-500 to-red-500',
  },
]

const stats = [
  { id: 1, name: '项目完成', value: '100+', description: '成功交付的项目数量' },
  { id: 2, name: '客户满意度', value: '98%', description: '客户对我们的评价' },
  { id: 3, name: '技术专家', value: '15+', description: '专业的技术团队' },
  { id: 4, name: '服务年限', value: '5年+', description: '行业经验积累' },
]

const testimonials = [
  {
    body: "Photinia团队为我们打造的网站超出了预期，设计精美，功能完善，用户体验极佳。",
    author: {
      name: "张经理",
      handle: "ABC科技公司",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
  },
  {
    body: "专业的团队，高效的服务，我们的新网站上线后，客户反馈非常好，转化率明显提升。",
    author: {
      name: "李总监",
      handle: "XYZ企业集团",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
  },
  {
    body: "从设计到开发，整个过程都非常专业，团队沟通顺畅，最终交付的产品质量很高。",
    author: {
      name: "王总",
      handle: "创新科技",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section - 更精致的Clerk风格 */}
      <div className="relative isolate overflow-hidden gradient-bg">
        {/* 背景装饰 */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gray-200 to-gray-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200/50">
                <SparklesIcon className="h-4 w-4" />
                <span>最新动态</span>
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              打造卓越的
              <span className="text-gray-900">数字体验</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们专注于为企业提供现代化的网站开发服务，结合最新的技术和设计理念，
              帮助您的品牌在数字世界中脱颖而出。
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href="/contact"
                className="btn-primary group"
              >
                <span>开始项目</span>
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/cases" className="btn-outline group">
                <span>查看案例</span>
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="mx-auto mt-12 flex max-w-2xl lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-2xl flex-none sm:max-w-3xl lg:max-w-2xl">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl opacity-20 blur-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="App screenshot"
                  className="relative w-full h-auto max-w-lg rounded-xl shadow-medium ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clerk Style Bento Grid - 完整复制Clerk网站的复杂功能展示区域 */}
      <div className="relative bg-gray-950 pb-[calc(theme(padding.32)+theme(height.11))] pt-32">
        {/* 顶部装饰元素 */}
        <div className="absolute inset-x-0 -top-11 mt-[calc(-3/16*1rem)] flex items-end">
          <div className="mr-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-gray-950"></div>
          <div className="flex justify-between mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
            <svg viewBox="0 0 56 48" aria-hidden="true" className="-ml-1.5 mb-[calc(-1/16*1rem)] w-14 flex-none overflow-visible fill-gray-950">
              <path d="M 2.686 3 H -4 V 48 H 56 V 47 H 53.314 A 8 8 0 0 1 47.657 44.657 L 8.343 5.343 A 8 8 0 0 0 2.686 3 Z"></path>
            </svg>
            <svg viewBox="0 0 56 48" aria-hidden="true" className="-mr-1.5 mb-[calc(-1/16*1rem)] w-14 flex-none overflow-visible fill-gray-950">
              <path d="M 53.314 3 H 60 V 48 H 0 V 47 H 2.686 A 8 8 0 0 0 8.343 44.657 L 47.657 5.343 A 8 8 0 0 1 53.314 3 Z"></path>
            </svg>
          </div>
          <div className="ml-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-gray-950"></div>
        </div>

        {/* 背景装饰图片 */}
        <div className="absolute inset-x-0 top-0 overflow-hidden sm:pl-[50%]">
          <div className="ml-[calc(0/16*1rem)] mt-[calc(-92/16*1rem)] w-[calc(874/16*1rem)] max-w-none sm:ml-[calc(-340/16*1rem)] md:ml-[calc(-400/16*1rem)] lg:ml-[calc(-500/16*1rem)] xl:ml-[calc(-564/16*1rem)]">
            <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg opacity-20"></div>
          </div>
        </div>

        {/* 发光效果 */}
        <div className="pointer-events-none absolute inset-x-0 top-[calc(-673/16*1rem)] z-10 overflow-hidden mix-blend-overlay">
          <div className="ml-[calc(50%-(981/16*1rem))] w-[calc(2640/16*1rem)] max-w-none">
            <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="relative mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
          <div className="text-center">
            <h2 className="text-sm font-medium text-purple-400">专业服务</h2>
            <p className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.015em] text-white">
              为企业提供全方位的数字解决方案
            </p>
            <p className="mx-auto mb-4 mt-4 max-w-xl text-balance text-gray-400">
              我们拥有丰富的行业经验和专业技术团队，致力于帮助企业在数字化转型中取得成功，提供从设计到开发的一站式服务。
            </p>
            <a className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] text-white text-sm" href="/contact">
              了解我们的服务
              <svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]">
                <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
              </svg>
            </a>
          </div>

          {/* Bento 网格布局 */}
          <div className="mt-16 grid grid-cols-1 grid-rows-[repeat(12,minmax(0,1fr))] gap-2 md:grid-cols-2 md:grid-rows-6 xl:grid-flow-col xl:grid-cols-3 xl:grid-rows-4">
            
            {/* 多因素认证卡片 */}
            <div className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden">
              <div className="relative z-10 flex-none px-6 order-last pb-6">
                <h3 className="text-sm font-medium text-white">多因素认证</h3>
                <p className="mt-2 text-pretty text-sm/5 text-gray-400">
                  每个用户的自助多因素设置都会在登录时自动强制执行。
                </p>
              </div>
              <div className="pointer-events-none relative flex-auto select-none" aria-hidden="true" style={{minHeight: '10.25rem'}}>
                <div className="isolate flex h-full items-center justify-center">
                  <div className="relative">
                    <div className="flex gap-3">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex h-10 w-8 items-center justify-center overflow-hidden rounded-md bg-gray-950">
                          <div className="z-10 h-2 w-2 rounded-full bg-white opacity-0"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 欺诈防护卡片 - 跨2行 */}
            <div className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden row-span-2">
              <div className="relative z-10 flex-none px-6 pt-6">
                <h3 className="text-sm font-medium text-white">欺诈和滥用防护</h3>
                <p className="mt-2 text-pretty text-sm/5 text-gray-400">
                  通过阻止高风险临时邮箱域名来减少欺诈注册和免费试用滥用。
                </p>
              </div>
              <div className="pointer-events-none relative flex-auto select-none" aria-hidden="true" style={{minHeight: '10.25rem'}}>
                <div className="flex h-full items-center justify-center">
                  <div className="w-min">
                    <div className="flex w-[calc(304/16*1rem)] items-center gap-3.5 rounded-md bg-gray-800 bg-gradient-to-br from-white/5 to-65% p-3 ring-[0.25rem] ring-gray-950/50">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="font-mono text-2xs/4 text-gray-500 transition duration-500 group-hover:text-white">
                        检测到欺诈注册
                      </div>
                      <div className="ml-auto text-[0.625rem]/[1.125rem] text-gray-600">14:09</div>
                    </div>
                    <div className="relative pl-[2.875rem] pt-16">
                      <div className="space-y-6">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="flex items-start gap-4 text-[0.625rem]/[1.125rem]">
                            <div className="relative mt-[calc(1/16*1rem)] flex size-5 flex-none items-center justify-center rounded-full bg-gray-600/20">
                              <div className="size-1 rounded-full bg-gray-600"></div>
                            </div>
                            <div>
                              <div className="font-medium text-white opacity-0">bad_actor+{i+1}@email.com</div>
                              <div className="text-gray-600">8月4日 14:0{i+9} 已阻止</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 高级安全卡片 */}
            <div className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden">
              <div className="relative z-10 flex-none px-6 order-last pb-6">
                <h3 className="text-sm font-medium text-white">高级安全</h3>
                <p className="mt-2 text-pretty text-sm/5 text-gray-400">
                  Clerk 符合 SOC 2 type 2 和 CCPA 标准。我们定期进行第三方审计。
                </p>
              </div>
              <div className="pointer-events-none relative flex-auto select-none isolate" aria-hidden="true" style={{minHeight: '10.25rem'}}>
                <div className="absolute inset-0 -bottom-5 z-10 bg-[radial-gradient(50%_100%_at_top,theme(colors.gray.900/0),theme(colors.gray.900/0.68)_61.5%,rgb(33,33,38))]"></div>
                <div className="absolute inset-x-0 top-full z-10 mt-5 h-12 bg-gray-900"></div>
                <div className="relative flex h-full items-center justify-center">
                  <div className="relative h-[4.5rem] w-[4.5rem]">
                    <div className="absolute inset-0 z-10 rounded-full bg-gray-950/60 shadow-[0_1px_theme(colors.white/0.03)]"></div>
                    <div className="absolute inset-1 z-10 rounded-full bg-gray-800 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 shadow-[0_2px_12px_theme(colors.black/0.5)]"></div>
                    <div className="absolute inset-[calc(theme(inset.1)+1px)] z-10 rounded-full bg-gradient-to-b from-gray-850 to-gray-750"></div>
                    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true" className="absolute left-1/2 top-1/2 z-10 ml-[calc(theme(width.11)/-2)] mt-[calc(theme(height.11)/-2)] h-11 w-11">
                      <path stroke="#5DE3FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M32.147 27.52c0-5.471-4.543-9.908-10.147-9.908s-10.147 4.437-10.147 9.909c0 3.744 1.329 7.184 3.551 9.897a16.152 16.152 0 0 0 2.549 2.488m21.297-22.83C35.67 11.45 29.283 7.704 22 7.704c-7.283 0-13.67 3.746-17.25 9.372M34.176 5.785A25.735 25.735 0 0 0 22 2.75c-4.413 0-8.562 1.1-12.176 3.035M28.088 40.25c-6.322-.953-11.162-6.29-11.162-12.73 0-2.735 2.272-4.953 5.074-4.953s5.073 2.218 5.073 4.954c0 2.736 2.272 4.954 5.074 4.954s5.074-2.218 5.074-4.954c0-8.209-6.815-14.863-15.221-14.863-8.406 0-15.22 6.654-15.22 14.863 0 2.505.634 4.865 1.755 6.935M22 26.53c0 5.472 4.543 9.908 10.147 9.908.695 0 1.374-.068 2.03-.198" shapeRendering="crispEdges"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 会话管理卡片 - 跨2行 */}
            <div className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden row-span-2">
              <div className="relative z-10 flex-none px-6 pt-6">
                <h3 className="text-sm font-medium text-white">会话管理</h3>
                <p className="mt-2 text-pretty text-sm/5 text-gray-400">
                  Clerk 管理完整的会话生命周期，包括主动设备监控等关键安全功能。
                </p>
              </div>
              <div className="pointer-events-none relative flex-auto select-none" aria-hidden="true" style={{minHeight: '10.25rem'}}>
                <div className="relative flex h-full flex-col items-center justify-center">
                  <div className="relative">
                    <div className="relative z-10 mx-auto mt-12 w-64 rounded-lg bg-gray-500/5 bg-gradient-to-br from-white/5 to-65% px-6 pb-6 pt-14 text-[0.625rem]/[1.125rem] shadow-[0_1px_1px_rgba(255,255,255,0.05)_inset,0_2px_13px_rgba(0,0,0,0.2),0_1px_2px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                      <div className="mt-6 flex py-1.5">
                        <div className="w-14 flex-none text-gray-400">设备</div>
                        <div className="font-medium text-white">MacBook Pro</div>
                      </div>
                      <div className="flex border-t border-white/5 py-1.5">
                        <div className="w-14 flex-none text-gray-400">浏览器</div>
                        <div className="font-medium text-white">Chrome</div>
                      </div>
                      <div className="flex border-t border-white/5 py-1.5">
                        <div className="w-14 flex-none text-gray-400">位置</div>
                        <div className="font-medium text-white">旧金山，加利福尼亚州</div>
                      </div>
                      <div className="mt-6 rounded-md p-1 text-center font-medium text-gray-600 ring-1 ring-inset ring-gray-850 transition duration-1000 group-hover:text-white group-hover:ring-gray-700">
                        退出设备
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 社交登录卡片 */}
            <div className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden">
              <div className="relative z-10 flex-none px-6 order-last pb-6">
                <h3 className="text-sm font-medium text-white">社交登录</h3>
                <p className="mt-2 text-pretty text-sm/5 text-gray-400">
                  在几分钟内为您的应用添加高转化率的社交登录 (SSO)。20+ 选项且持续增长。
                </p>
              </div>
              <div className="pointer-events-none relative flex-auto select-none" aria-hidden="true" style={{minHeight: '10.25rem'}}>
                <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
                  <div className="relative mx-auto aspect-[98/192] w-[calc(98/16*1rem)]">
                    <div className="grid grid-cols-2 gap-2 mt-8">
                      {['Google', 'GitHub', 'Apple', 'Discord'].map((platform, i) => (
                        <div key={i} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow">
                          <div className="w-5 h-5 bg-gray-400 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 机器人检测卡片 */}
            <div className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden">
              <div className="relative z-10 flex-none px-6 order-last pb-6">
                <h3 className="text-sm font-medium text-white">机器人检测</h3>
                <p className="mt-2 text-pretty text-sm/5 text-gray-400">
                  通过内置的、持续更新的机器学习显著减少欺诈注册。
                </p>
              </div>
              <div className="pointer-events-none relative flex-auto select-none" aria-hidden="true" style={{minHeight: '10.25rem'}}>
                <div className="absolute inset-x-0 top-0 overflow-hidden rounded-t-2xl bg-gray-900" style={{height: 'calc(10.75rem)'}}>
                  <div className="isolate">
                    <div className="absolute left-1/2 top-0 z-40 aspect-square w-[calc(128/16*1rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#313136]"></div>
                    <div className="absolute left-1/2 top-0 z-30 aspect-square w-[calc(192/16*1rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2D2D32]"></div>
                    <div className="absolute left-1/2 top-0 z-20 aspect-square w-[calc(256/16*1rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29292E]"></div>
                    <div className="absolute left-1/2 top-0 z-10 aspect-square w-[calc(320/16*1rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25252A]"></div>
                    <svg viewBox="0 0 320 320" aria-hidden="true" className="absolute left-1/2 top-0 z-50 -ml-40 w-80" fill="none" stroke="white" strokeOpacity="0.08" strokeLinecap="round" strokeDasharray="0.25 4">
                      <circle cx="160" cy="0" r="64"></circle>
                      <circle cx="160" cy="0" r="96"></circle>
                      <circle cx="160" cy="0" r="128"></circle>
                      <circle cx="160" cy="0" r="160"></circle>
                    </svg>
                  </div>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="absolute -ml-0.5 -mt-0.5 h-1 w-1 rounded-full bg-gray-600" style={{
                      top: `${3 + i * 0.5}rem`,
                      left: `calc(50% + ${(i % 2 === 0 ? -1 : 1) * (2 + i * 0.5)}rem)`
                    }}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* 邮件和短信一次性密码卡片 */}
            <div className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden">
              <div className="relative z-10 flex-none px-6 order-last pb-6">
                <h3 className="text-sm font-medium text-white">邮件和短信一次性密码</h3>
                <p className="mt-2 text-pretty text-sm/5 text-gray-400">
                  快速可靠的一次性密码交付，内置防暴力破解机制。
                </p>
              </div>
              <div className="pointer-events-none relative flex-auto select-none" aria-hidden="true" style={{minHeight: '10.25rem'}}>
                <div className="absolute inset-x-0 top-0 isolate h-[calc(206/16*1rem)] overflow-hidden pt-6">
                  <div className="mx-auto h-56 w-[calc(264/16*1rem)] rounded-[calc(44/16*1rem)] bg-gray-800 p-1.5">
                    <div className="relative h-[calc(200/16*1rem)] overflow-hidden rounded-[calc(38/16*1rem)] bg-gray-950/50 px-5 pt-3 ring-1 ring-inset ring-black/5">
                      <div className="mt-6 flex flex-wrap justify-between gap-x-2 gap-y-4 text-center">
                        {['电话', '短信', '图书', '电视', 'Google', 'X', 'NatWest', 'Clerk'].map((item, i) => (
                          <div key={i} className="flex-none">
                            <div className="relative size-10 rounded-[calc(10/16*1rem)] bg-gray-800"></div>
                            <div className="mt-1.5 text-[0.625rem]/4 font-medium text-gray-300">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Magic Links 卡片 - 跨2行 */}
            <div className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden row-span-2">
              <div className="relative z-10 flex-none px-6 pt-6">
                <h3 className="text-sm font-medium text-white">魔法链接</h3>
                <p className="mt-2 text-pretty text-sm/5 text-gray-400">
                  通过魔法链接提高注册转化率并过滤垃圾邮件/欺诈。
                </p>
              </div>
              <div className="pointer-events-none relative flex-auto select-none isolate" aria-hidden="true" style={{minHeight: '10.25rem'}}>
                <div className="relative flex h-full flex-col items-center justify-center">
                  <div className="relative flex w-full justify-center break-all text-center font-mono text-[0.625rem]/[0.875rem] tracking-widest">
                    <div className="relative z-20 bg-gray-400/10 px-1 py-[0.0625rem] text-gray-400 shadow-[0_0_1px_inset] shadow-white/15 backdrop-blur-[1px]">
                      Yb9WrnC5nFrvvz
                    </div>
                  </div>
                  <div className="relative z-20 mt-9 flex w-full">
                    <div className="flex w-full flex-none flex-col items-center">
                      <div className="relative h-24 w-20 rounded-sm bg-gray-800 bg-gradient-to-br from-white/5 to-[64%]">
                        <div className="flex size-full items-center justify-center drop-shadow-[0_1px_0_theme(colors.white/10%)]">
                          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex items-center text-2xs/[1.125rem] font-semibold text-white">
                        <div>约瑟夫·科尔</div>
                      </div>
                      <div className="relative mt-0.5 font-mono text-2xs/[1.125rem] text-white/50">j.cole@⁠example.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 密码卡片 */}
            <div className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden">
              <div className="relative z-10 flex-none px-6 order-last pb-6">
                <h3 className="text-sm font-medium text-white">密码</h3>
                <p className="mt-2 text-pretty text-sm/5 text-gray-400">
                  简单安全的密码认证，包含数据泄露检测和恢复选项。
                </p>
              </div>
              <div className="pointer-events-none relative flex-auto select-none isolate" aria-hidden="true" style={{minHeight: '10.25rem'}}>
                <div className="absolute inset-0 flex flex-col items-center gap-4">
                  <div className="z-10 mt-[2.875rem] size-[4.5rem] rounded-full bg-gray-950 p-1 shadow-[0_1px_0_theme(colors.white/5%)]">
                    <div className="relative size-full overflow-hidden bg-gradient-to-b from-gray-800 to-gray-850 shadow-[inset_0_1px_0_theme(colors.white/8%)]">
                      <div className="absolute inset-4 bg-gradient-to-b from-gray-850 to-gray-800/50"></div>
                      <div className="relative z-10 size-full bg-[repeating-radial-gradient(theme(colors.black/20%)_0.125rem,transparent_0.25rem)]">
                        <div className="flex size-full items-center justify-center drop-shadow-[0_1px_0_theme(colors.white/10%)]">
                          <div className="w-2 h-9 bg-gray-950 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Features Section - 更精致的卡片设计 */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200/50 mb-6">
              <SparklesIcon className="h-4 w-4" />
              <span>为什么选择我们</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              专业的网站开发服务
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们拥有丰富的经验和专业的技术团队，致力于为客户提供最优质的网站开发服务。
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {/* 现代化技术栈 */}
              <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-50 mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">现代化技术栈</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  使用最新的React、Next.js和Tailwind CSS技术，确保网站性能和用户体验。
                </p>
              </div>

              {/* 响应式设计 */}
              <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-50 mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">响应式设计</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  完美适配各种设备，从手机到桌面，提供一致的用户体验。
                </p>
              </div>

              {/* 快速部署 */}
              <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-50 mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">快速部署</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  优化的构建流程，确保网站快速加载和部署。
                </p>
              </div>

              {/* SEO优化 */}
              <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-50 mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">SEO优化</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  专业的搜索引擎优化，提升网站在搜索结果中的排名和可见性。
                </p>
              </div>

              {/* 安全可靠 */}
              <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-50 mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">安全可靠</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  采用最新的安全标准和最佳实践，保护您的网站和用户数据安全。
                </p>
              </div>

              {/* 持续支持 */}
              <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-50 mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">持续支持</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  提供长期的技术支持和维护服务，确保您的网站始终保持最佳状态。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - 更精致的数字展示 */}
      <div className="gradient-bg-dark section-padding">
        <div className="container-max">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.id} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-300 mb-1">{stat.name}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - 更精致的评价展示 */}
      <div className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200/50 mb-6">
              <StarIcon className="h-4 w-4" />
              <span>客户评价</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              听听我们的客户怎么说
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-3 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <figure
                key={testimonialIdx}
                className={`card card-hover p-8 ${
                  testimonialIdx === 0 ? 'sm:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-base leading-7 text-gray-900 mb-6">
                  <p>"{testimonial.body}"</p>
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50 ring-2 ring-white"
                    src={testimonial.author.imageUrl}
                    alt=""
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    <div className="text-gray-600">{testimonial.author.handle}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - 更精致的行动号召 */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="relative isolate overflow-hidden bg-gray-900 rounded-3xl px-6 py-24 shadow-strong sm:px-24 xl:py-32">
            {/* 背景装饰 */}
            <div className="absolute inset-0 -z-10 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)"/>
              </svg>
            </div>
            
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              准备开始您的下一个项目了吗？
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              让我们携手合作，共同打造一个令人印象深刻的数字体验。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="bg-white text-gray-900 hover:bg-gray-50 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 shadow-soft hover:shadow-medium"
              >
                联系我们
              </a>
              <a href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                了解更多 <ArrowRightIcon className="inline ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
