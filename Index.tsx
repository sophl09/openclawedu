import { Link } from 'react-router-dom';
import { Brain, Target, FileText, Users, Truck, RefreshCw, ArrowRight, ChevronRight, Sparkles, Layers, Zap } from 'lucide-react';
import Layout from '@/components/Layout';
import TierBadge from '@/components/TierBadge';
import { resources } from '@/data/mockData';
import heroImage from '@/assets/hero-edu-tech.png';
import qrcodeImage from '@/assets/qrcode.png';
import archImage from '@/assets/architecture-bg.png';
import classroomImage from '@/assets/k12-classroom.png';
import aiLearningImage from '@/assets/k12-ai-learning.png';
import collaborationImage from '@/assets/k12-collaboration.png';
import modulePerception from '@/assets/module-perception.png';
import modulePlanning from '@/assets/module-planning.png';
import moduleContent from '@/assets/module-content.png';
import moduleAdaptation from '@/assets/module-adaptation.png';
import moduleDelivery from '@/assets/module-delivery.png';
import moduleReflection from '@/assets/module-reflection.png';

const moduleImages = [modulePerception, modulePlanning, moduleContent, moduleAdaptation, moduleDelivery, moduleReflection];

const modules = [
  {
    icon: Brain,
    step: '01',
    title: '感知与意图解析',
    subtitle: 'Perception & Intent Parsing',
    desc: '接收教师输入（文本/语音/OCR），解析核心意图，提取年级、学科、课标、时长等教学约束条件，输出标准化结构参数。',
    tags: ['意图识别', '约束提取', '上下文关联'],
  },
  {
    icon: Target,
    step: '02',
    title: '教学规划与推理',
    subtitle: 'Teaching Planning & Reasoning',
    desc: '结合教育学规则与课标要求，拆解教学目标、规划执行路径、选择适配工具，输出详细执行方案。',
    tags: ['目标拆解', '教育学约束', '工具选择'],
  },
  {
    icon: FileText,
    step: '03',
    title: '内容生成',
    subtitle: 'Content Generation',
    desc: '依据执行方案，基于教育微调LLM生成结构化教学资源——教案、作业、课件、教师指南等。',
    tags: ['教案生成', '结构化输出', '教育学增强'],
  },
  {
    icon: Users,
    step: '04',
    title: '差异化适配',
    subtitle: 'Differentiated Adaptation',
    desc: '根据学情水平、语言、阅读难度，对基础资源进行难度调整与表述优化，生成基础/标准/拓展多版本内容。',
    tags: ['分层适配', '难度调整', '多版本生成'],
  },
  {
    icon: Truck,
    step: '05',
    title: '执行与交付',
    subtitle: 'Execution & Delivery',
    desc: '将适配资源以Word、PPT、在线作业等格式输出，支持与LMS、自动评分系统等外部平台集成交付。',
    tags: ['格式转换', '系统集成', '自动评分'],
  },
  {
    icon: RefreshCw,
    step: '06',
    title: '反思与迭代',
    subtitle: 'Reflection & Iteration',
    desc: '校验资源合规性与完整性，接收教师反馈，优化生成策略，更新记忆层数据，形成自我迭代闭环。',
    tags: ['自动评估', '反馈处理', '自我优化'],
  },
];

const layers = [
  { name: '交互层', desc: '接收教师输入，输出生成结果，提供编辑与反馈入口', icon: Sparkles },
  { name: '核心业务层', desc: '6大核心模块，实现感知→规划→生成→适配→交付→迭代闭环', icon: Layers },
  { name: '工具层', desc: '课标检索、自动评分、文档生成等教育专用工具集', icon: Zap },
  { name: '记忆层', desc: '用户偏好、学情数据、资源模板，支撑上下文理解与迭代', icon: Brain },
  { name: '基座层', desc: '教育微调LLM、规则引擎、工作流引擎', icon: Target },
  { name: '数据层', desc: '用户数据、教学资源、日志持久化存储', icon: FileText },
];

const featuredResources = resources.slice(0, 6);

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative mx-auto max-w-content px-6 py-20 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5 animate-pulse-glow" />
                AI 驱动的智能教学资源引擎
              </div>
              <h1 className="mb-3 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                <span className="gradient-text">因材施教，激发潜能</span>
              </h1>
              <p className="mb-5 text-2xl font-medium text-muted-foreground md:text-4xl">让分层教学触手可及</p>
              <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
                智能体自动完成感知解析、教学规划、内容生成与差异化适配，为您精准交付多层级教学资源
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/ai-assistant"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  <Brain className="h-4 w-4" />
                  开始与智能体对话
                </Link>
                <Link
                  to="/resources"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
                >
                  浏览资源库
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-1/2 flex flex-col items-center">
              <img
                src={heroImage}
                alt="OpenClaw AI教育助手"
                className="w-full animate-float rounded-2xl border border-border/40 shadow-2xl shadow-primary/10"
              />
              <img src={qrcodeImage} alt="二维码" className="mt-3 h-[72px] w-[72px] rounded" />
              <span className="mt-1 text-xs text-muted-foreground">扫码预约测试和交流</span>
              <div className="absolute -inset-1 -z-10 animate-pulse-glow rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl" />
              {/* Floating decorative elements */}
              <div className="absolute -left-4 top-8 animate-float rounded-xl border border-primary/20 bg-card/80 px-3 py-2 text-xs font-medium text-primary shadow-lg backdrop-blur-sm" style={{ animationDelay: '0.5s' }}>
                🦞 AI Agent
              </div>
              <div className="absolute -right-3 bottom-12 animate-float rounded-xl border border-primary/20 bg-card/80 px-3 py-2 text-xs font-medium text-primary shadow-lg backdrop-blur-sm" style={{ animationDelay: '1.5s' }}>
                📚 分层教学
              </div>
              <div className="absolute -right-2 top-4 animate-float rounded-xl border border-primary/20 bg-card/80 px-3 py-2 text-xs font-medium text-primary shadow-lg backdrop-blur-sm" style={{ animationDelay: '2.5s' }}>
                ✨ 智能生成
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* K12 Education Showcase */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:glow-border">
              <img src={classroomImage} alt="智能课堂" className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground">智能课堂</h3>
                <p className="mt-1 text-xs text-muted-foreground">AI赋能K12课堂教学，让每位学生获得个性化学习体验</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:glow-border">
              <img src={aiLearningImage} alt="AI分层学习" className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground">AI 分层学习</h3>
                <p className="mt-1 text-xs text-muted-foreground">智能机器人助手根据学情自动生成基础、标准、拓展三级资源</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:glow-border">
              <img src={collaborationImage} alt="在线教育平台" className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground">在线教育平台</h3>
                <p className="mt-1 text-xs text-muted-foreground">整合教材、课件、作业等资源，一站式教学资源管理</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Workflow */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="mb-4 text-center">
            <h2 className="mb-2 text-2xl font-bold text-foreground">核心工作流闭环</h2>
          </div>

          {/* Flow indicator */}
          <div className="mb-10 flex items-center justify-center gap-1 overflow-x-auto py-4">
            {modules.map((m, i) => (
              <div key={m.step} className="flex items-center gap-1">
                <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground">
                  <m.icon className="h-3.5 w-3.5 text-primary" />
                  {m.title}
                </div>
                {i < modules.length - 1 && (
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>

          {/* Module details */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <div
                key={m.step}
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:glow-border hover:bg-secondary/30"
              >
                <img src={moduleImages[i]} alt={m.title} className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <m.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/60">{m.step}</span>
                </div>
                <h3 className="mb-1 text-base font-semibold text-foreground">{m.title}</h3>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">{m.subtitle}</p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/60 bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closed loop indicator */}
          <div className="mt-8 flex items-center justify-center gap-3 text-xs text-muted-foreground">
            <RefreshCw className="h-4 w-4 text-primary animate-pulse-glow" />
            <span>反思迭代模块将反馈注入记忆层，驱动下一轮生成优化，形成持续进化的闭环</span>
          </div>
        </div>
      </section>

      {/* Architecture layers – graphical trapezoid stack */}
      <section className="relative overflow-hidden border-b border-border/60">
        <img
          src={archImage}
          alt="分层架构"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-content px-6 py-16">
          <h2 className="mb-2 text-center text-2xl font-bold text-foreground">分层架构</h2>
          <p className="mb-10 text-center text-sm text-muted-foreground">
            从交互层到数据层，6层架构确保各模块协同高效
          </p>

          {/* Graphical pyramid */}
          <div className="mx-auto max-w-3xl">
            {layers.map((layer, i) => {
              // Each layer gets progressively wider (inverted trapezoid / pyramid)
              const widthPercent = 55 + i * 9; // 55% → 100%
              const opacity = 1 - i * 0.06;
              const bgAlpha = 0.08 + i * 0.03;
              return (
                <div key={layer.name} className="flex justify-center" style={{ marginTop: i === 0 ? 0 : '-1px' }}>
                  <div
                    className="group relative flex items-center gap-4 border border-primary/20 px-6 py-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                    style={{
                      width: `${widthPercent}%`,
                      background: `linear-gradient(135deg, hsl(var(--primary) / ${bgAlpha}), hsl(var(--primary) / ${bgAlpha * 0.4}))`,
                      borderRadius: i === 0 ? '1rem 1rem 0.25rem 0.25rem' : i === layers.length - 1 ? '0.25rem 0.25rem 1rem 1rem' : '0.25rem',
                      opacity,
                    }}
                  >
                    {/* Icon circle */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 transition-colors group-hover:border-primary/60 group-hover:bg-primary/20">
                      <layer.icon className="h-5 w-5 text-primary" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-bold text-primary">{layer.name}</span>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{layer.desc}</p>
                    </div>

                    {/* Layer number */}
                    <span className="hidden shrink-0 font-mono text-2xl font-black text-primary/10 sm:block">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Connector line to next layer */}
                    {i < layers.length - 1 && (
                      <div className="absolute -bottom-3 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
                        <div className="h-3 w-px bg-primary/30" />
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section>
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">精选资源</h2>
              <p className="mt-1 text-sm text-muted-foreground">由智能体生成的分层教学资源</p>
            </div>
            <Link to="/resources" className="text-sm text-primary transition-colors hover:text-primary-glow">
              查看全部 →
            </Link>
          </div>
          <div className="divide-y divide-border/60 rounded-xl border border-border/60 bg-card">
            {featuredResources.map((r) => (
              <Link
                key={r.id}
                to={`/resources/${r.id}`}
                className="flex items-baseline gap-4 px-5 py-4 transition-all hover:bg-secondary/30"
              >
                <TierBadge tier={r.tier} />
                <span className="flex-1 text-sm font-medium text-foreground">{r.title}</span>
                <span className="hidden text-xs text-muted-foreground sm:inline">{r.subject}</span>
                <span className="hidden text-xs text-muted-foreground sm:inline">{r.grade}</span>
                <span className="text-xs text-muted-foreground">{r.teacher}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/60">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative mx-auto max-w-content px-6 py-20 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            开始使用智能体生成教学资源
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm text-muted-foreground">
            输入您的教学需求，智能体将自动完成感知解析、教学规划、内容生成与差异化适配，为您交付多层级教学资源。
          </p>
          <Link
            to="/ai-assistant"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            <Brain className="h-4 w-4" />
            与智能体对话
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
