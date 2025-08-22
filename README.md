# Photinia 公司官网

一个现代化的公司官网，采用 Tailwind CSS 设计风格，展示专业的网站开发服务。

## 🚀 项目特色

- **现代化设计**: 采用 Tailwind CSS 设计系统，确保美观和一致性
- **响应式布局**: 完美适配各种设备尺寸
- **专业内容**: 展示公司服务、案例和团队信息
- **交互体验**: 流畅的动画和用户交互
- **SEO 友好**: 优化的页面结构和元数据

## 🛠️ 技术栈

- **前端框架**: Next.js 14 (App Router)
- **样式系统**: Tailwind CSS 3.3+
- **图标库**: Heroicons
- **动画库**: Framer Motion
- **开发语言**: TypeScript
- **构建工具**: PostCSS, Autoprefixer

## 📁 项目结构

```
photinia/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx          # 首页
│   ├── cases/            # 案例页面
│   ├── about/            # 关于我们页面
│   ├── contact/          # 联系我们页面
│   ├── layout.tsx        # 根布局
│   └── globals.css       # 全局样式
├── components/            # 可复用组件
│   ├── Navigation.tsx    # 导航组件
│   └── Footer.tsx        # 页脚组件
├── tailwind.config.js     # Tailwind CSS 配置
├── postcss.config.js      # PostCSS 配置
├── next.config.js         # Next.js 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖
```

## 🎨 设计特点

### 色彩系统
- **主色调**: 蓝色系 (#3B82F6)
- **辅助色**: 灰色系 (#6B7280)
- **背景色**: 白色和浅灰色

### 组件设计
- **按钮**: 圆角设计，悬停效果，焦点状态
- **卡片**: 阴影效果，悬停动画
- **表单**: 清晰的标签和输入框设计
- **导航**: 粘性定位，响应式菜单

### 布局原则
- **网格系统**: 使用 Tailwind CSS 的网格类
- **间距系统**: 一致的 padding 和 margin
- **响应式断点**: sm, md, lg, xl 断点适配

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产版本
```bash
npm start
```

## 📱 页面说明

### 首页 (/)
- Hero 区域展示公司核心价值
- 特色服务介绍
- 数据统计展示
- 客户评价
- 行动号召

### 案例页面 (/cases)
- 项目案例展示
- 分类筛选功能
- 详细项目信息
- 技术栈标签

### 关于我们 (/about)
- 公司故事介绍
- 核心价值观
- 团队介绍
- 发展历程时间线

### 联系我们 (/contact)
- 项目咨询表单
- 联系信息展示
- 办公时间
- 地图位置
- 常见问题

## 🎯 设计原则

1. **一致性**: 使用统一的设计语言和组件库
2. **可访问性**: 良好的对比度和键盘导航支持
3. **性能**: 优化的图片和代码分割
4. **用户体验**: 直观的导航和清晰的信息架构

## 🔧 自定义配置

### Tailwind CSS 配置
在 `tailwind.config.js` 中可以自定义：
- 颜色系统
- 字体设置
- 动画效果
- 响应式断点

### 组件样式
在 `app/globals.css` 中定义了：
- 自定义按钮样式
- 通用间距类
- 动画关键帧

## 📈 性能优化

- **图片优化**: 使用 Next.js Image 组件
- **代码分割**: 自动路由级别的代码分割
- **静态生成**: 预渲染静态页面
- **缓存策略**: 浏览器和 CDN 缓存

## 🌐 部署

项目可以部署到：
- Vercel (推荐)
- Netlify
- AWS Amplify
- 任何支持 Node.js 的托管服务

## 📝 维护说明

### 内容更新
- 案例信息在 `app/cases/page.tsx` 中更新
- 团队信息在 `app/about/page.tsx` 中更新
- 联系信息在 `app/contact/page.tsx` 中更新

### 样式调整
- 全局样式在 `app/globals.css` 中修改
- 组件样式在对应的组件文件中调整
- Tailwind 配置在 `tailwind.config.js` 中自定义

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。

## 📞 联系我们

如有问题或建议，请联系：
- 邮箱: contact@photinia.com
- 电话: +86 138 0000 0000

---

© 2024 Photinia. 保留所有权利。
