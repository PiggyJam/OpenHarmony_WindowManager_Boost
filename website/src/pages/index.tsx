import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout title="首页" description="AI 驱动的 OpenHarmony WindowManager 子系统开发辅助平台">
      <main className={styles.main}>
        <div className={styles.hero}>
          <Heading as="h1" className={styles.heroTitle}>
            AI 驱动的<br />
            <em>开发艺术</em>
          </Heading>
          <p className={styles.heroSubtitle}>
            面向 OpenHarmony WindowManager 子系统的智能辅助平台<br />
            让代码理解变得优雅，让开发流程成为艺术
          </p>
        </div>

        <section className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>核心能力</Heading>
          <div className={styles.grid}>
            <div className={styles.card}>
              <Heading as="h3">代码导航</Heading>
              <p>理解代码结构的艺术。快速定位模块、类、函数，探索依赖关系，像浏览画廊一样浏览代码。</p>
            </div>
            <div className={styles.card}>
              <Heading as="h3">开发辅助</Heading>
              <p>从构思到实现，AI 伴随每个步骤。创建特性、修复 Bug、提交代码——流畅如书写。</p>
            </div>
            <div className={styles.card}>
              <Heading as="h3">文档生成</Heading>
              <p>让文档自动更新成为可能。从代码注释生成优雅的文档，创建清晰的架构图。</p>
            </div>
            <div className={styles.card}>
              <Heading as="h3">智能分析</Heading>
              <p>自动化代码审查，检测潜在问题，评估测试覆盖——让 CI/CD 更智能。</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>快速开始</Heading>
          <div className={styles.codeBlock}>
            <pre>
              <code>{`# 安装 Claude Code
npm install -g @anthropic-ai/claude-code

# 克隆仓库
git clone https://github.com/xxx/OpenHarmony_WindowManager_Boost.git
cd OpenHarmony_WindowManager_Boost

# 开始使用
/find-module WindowScene
/explain-class WindowLayout
/trace-call CreateWindow`}</code>
            </pre>
          </div>
        </section>
      </main>
    </Layout>
  );
}
