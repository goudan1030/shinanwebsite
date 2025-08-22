import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  UserGroupIcon, 
  LightBulbIcon, 
  HeartIcon, 
  ShieldCheckIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  StarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    name: '创新驱动',
    description: '我们始终保持对新技术的探索和学习，为客户提供最前沿的解决方案',
    icon: LightBulbIcon,
  },
  {
    name: '品质至上',
    description: '每一个项目都精益求精，确保交付的产品达到最高质量标准',
    icon: StarIcon,
  },
  {
    name: '客户为先',
    description: '深入了解客户需求，提供个性化的解决方案和贴心的服务体验',
    icon: HeartIcon,
  },
  {
    name: '诚信合作',
    description: '建立长期稳定的合作关系，以诚信和专业赢得客户的信任',
    icon: ShieldCheckIcon,
  },
]

const team = [
  {
    name: '张明',
    role: '创始人 & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: '拥有10年网站开发经验，曾就职于多家知名互联网公司，专注于用户体验设计和产品策略。',
  },
  {
    name: '李华',
    role: '技术总监',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: '全栈开发专家，精通React、Node.js等现代技术栈，负责技术架构设计和团队技术指导。',
  },
  {
    name: '王芳',
    role: '设计总监',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: '资深UI/UX设计师，擅长品牌视觉设计和用户界面设计，注重用户体验的每一个细节。',
  },
  {
    name: '陈强',
    role: '项目经理',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'PMP认证项目经理，拥有丰富的项目管理经验，确保项目按时高质量交付。',
  },
]

const milestones = [
  {
    year: '2019',
    title: '公司成立',
    description: 'Photinia在北京成立，开始专注于网站开发服务',
  },
  {
    year: '2020',
    title: '业务扩展',
    description: '服务范围扩展到电商平台和移动应用开发',
  },
  {
    year: '2021',
    title: '团队壮大',
    description: '核心团队扩展到15人，技术能力显著提升',
  },
  {
    year: '2022',
    title: '行业认可',
    description: '获得多个行业奖项，客户满意度达到98%',
  },
  {
    year: '2023',
    title: '技术升级',
    description: '全面采用现代化技术栈，提升开发效率',
  },
  {
    year: '2024',
    title: '未来展望',
    description: '计划扩展到更多城市，服务更多客户',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              关于 Photinia
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们是一家专注于网站开发的专业团队，致力于为客户提供最优质的数字解决方案。
              通过创新的技术和卓越的设计，我们帮助企业在数字世界中取得成功。
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                我们的故事
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Photinia成立于2019年，由一群充满激情的开发者、设计师和产品经理组成。
                我们相信，优秀的网站不仅仅是技术的展示，更是品牌故事和用户体验的完美结合。
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                五年来，我们为超过100家企业提供了专业的网站开发服务，涵盖各个行业和领域。
                每一个项目都是我们团队智慧和努力的结晶，也是与客户深度合作的成果。
              </p>
              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">100+</div>
                  <div className="text-sm text-gray-600">项目完成</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">98%</div>
                  <div className="text-sm text-gray-600">客户满意度</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">5年+</div>
                  <div className="text-sm text-gray-600">行业经验</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">我们的价值观</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              驱动我们前进的核心价值
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              这些价值观不仅指导着我们的工作方式，也塑造了我们的企业文化，
              让我们能够为客户提供最优质的服务。
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <value.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">我们的团队</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              遇见我们的核心团队
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们拥有一支经验丰富、技术精湛的专业团队，每个成员都在各自的领域有着深厚的造诣。
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {team.map((person) => (
              <div key={person.name} className="text-center">
                <img
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                  src={person.image}
                  alt={person.name}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-primary-600">{person.role}</p>
                <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">发展历程</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              我们的成长轨迹
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mt-2">{milestone.title}</h3>
                        <p className="text-gray-600 mt-2">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              准备与我们合作了吗？
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              让我们一起创造令人印象深刻的数字体验，让您的品牌在数字世界中脱颖而出。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="btn-primary"
              >
                联系我们
              </a>
              <a href="/cases" className="text-sm font-semibold leading-6 text-gray-900">
                查看案例 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
