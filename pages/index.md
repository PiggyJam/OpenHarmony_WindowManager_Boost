# OpenHarmony WindowManager Boost

<div class="bp-hero">
  <p class="bp-subtitle">AI 驱动的开发辅助平台</p>
</div>

---

## 概述

OpenHarmony WindowManager Boost 是一个面向 OpenHarmony WindowManager 子系统的 AI 辅助开发平台。我们通过**智能 SKILLS**和**自动化 Agents**，帮助开发者更高效地理解、开发和贡献代码。

## 核心特性

<div class="bp-grid">

### 🔍 智能代码导航

快速定位模块、类、函数，理解代码结构和依赖关系。

```bash
/find-module WindowScene
/explain-class WindowLayout
/trace-call CreateWindow
```

### 🛠️ 开发工作流辅助

从特性开发到 Bug 修复，提供全流程的 AI 辅助。

```bash
/create-feature "添加多窗口支持"
/fix-bug #1234
/submit-pr
```

### 📚 自动文档生成

从代码注释自动生成 API 文档和架构图。

```bash
/generate-api-doc WindowScene
/create-diagram architecture
```

### 🤖 智能分析 Agent

自动分析 PR 变更、生成测试用例、同步文档更新。

</div>

---

## 快速开始

### 1. 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### 2. 克隆仓库

```bash
git clone https://github.com/xxx/OpenHarmony_WindowManager_Boost.git
cd OpenHarmony_WindowManager_Boost
```

### 3. 初始化 SKILLS

```bash
claude-code install
```

### 4. 开始使用

```bash
# 查找窗口管理模块
/find-module WMComponent

# 创建新特性
/create-feature "添加窗口动画支持"

# 修复 Bug
/fix-bug #5678
```

---

## 项目结构

```
OpenHarmony_WindowManager_Boost/
├── pages/              # 静态网站内容
│   ├── wiki/          # 架构文档
│   ├── skills/        # SKILLS 使用指南
│   ├── agents/        # Agents 说明
│   └── blog/          # 开发日志
├── docs/              # 设计文档
│   └── plans/         # 项目规划
├── agentic/           # AI 辅助流程
│   ├── skills/        # SKILLS 定义
│   └── agents/        # Agents 定义
└── wiki/              # 深度技术文档
```

---

## 开发路线图

查看我们的 [项目路线图](https://github.com/xxx/OpenHarmony_WindowManager_Boost/blob/main/docs/plans/roadmap.md) 了解未来计划。

### 当前阶段：基础设施搭建

- [x] 项目初始化
- [x] MkDocs 网站框架
- [ ] CI/CD 配置
- [ ] 代码索引系统
- [ ] 首批核心 SKILLS

### 下一阶段：核心 SKILLS 开发

- [ ] 代码导航 SKILLS
- [ ] 开发工作流 SKILLS
- [ ] 文档生成 SKILLS

---

## 贡献指南

我们欢迎各种形式的贡献！

### 报告问题

在 [GitHub Issues](https://github.com/xxx/OpenHarmony_WindowManager_Boost/issues) 中报告 Bug 或提出功能请求。

### 提交代码

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交变更：`git commit -m 'Add some feature'`
4. 推送分支：`git push origin feature/your-feature`
5. 创建 Pull Request

### 贡献 SKILLS

查看 [SKILLS 开发指南](../skills/) 了解如何创建和贡献自定义 SKILLS。

---

## 相关资源

- [OpenHarmony](https://www.openharmony.cn/mainPlay)
- [WindowManager 仓库](https://gitcode.com/openharmony/window_window_manager)
- [开发文档](https://docs.openharmony.cn/)

---

## 许可证

本项目采用 Apache 2.0 许可证 - 查看 [LICENSE](https://github.com/xxx/OpenHarmony_WindowManager_Boost/blob/main/LICENSE) 文件了解详情。

---

<div class="bp-feedback">

**觉得这个项目有帮助吗？**

⭐ 给我们一个 Star | 🐛 [报告问题](https://github.com/xxx/OpenHarmony_WindowManager_Boost/issues) | 💡 [提出建议](https://github.com/xxx/OpenHarmony_WindowManager_Boost/discussions)

</div>

<style>
.bp-hero {
  text-align: center;
  padding: 3rem 0;
}

.bp-subtitle {
  font-size: 1.25rem;
  color: var(--bp-text-secondary);
  margin-bottom: 2rem;
}

.bp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.bp-grid > div {
  background: var(--bp-bg-secondary);
  border: 1px solid var(--bp-border);
  border-radius: var(--bp-radius-lg);
  padding: 1.5rem;
  transition: all var(--bp-transition-normal);
}

.bp-grid > div:hover {
  border-color: var(--bp-accent);
  box-shadow: var(--bp-shadow-glow);
  transform: translateY(-4px);
}

.bp-grid > div h3 {
  margin-top: 0;
  color: var(--bp-accent);
}

.bp-feedback {
  text-align: center;
  padding: 2rem;
  background: var(--bp-bg-secondary);
  border: 1px solid var(--bp-border);
  border-radius: var(--bp-radius-lg);
  margin-top: 3rem;
}
</style>
