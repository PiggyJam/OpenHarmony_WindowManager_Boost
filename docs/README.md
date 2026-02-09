# OpenHarmony WindowManager Boost 文档

这是一个 OpenHarmony WindowManager 子系统的 AI 辅助仓库。

WindowManager 是 OpenHarmony 和 HarmonyOS 的公共窗口管理服务底座。
- 官方代码仓库：https://gitcode.com/openharmony/window_window_manager

## 目录结构

```
docs/
└── plans/              # 项目规划和设计文档
    └── roadmap.md      # 项目演进路线图
```

## 其他目录

- `website/`：Docusaurus 静态网站项目（React + TypeScript）
- `wiki/`：对整个窗口管理服务的架构、模块、特性的详细解读
- `agentic/`：集成 OH 窗口管理子系统的 AI 辅助流程，包括 SKILLS 集合和 Agent 集合

## 静态网站

本仓库使用 Docusaurus 构建 GitHub Pages 托管的静态网站。

### 本地开发

```bash
cd website
npm install
npm start
```

访问 http://localhost:3000

### 构建

```bash
cd website
npm run build
```

### 部署

推送到 main 分支时，GitHub Actions 会自动构建并部署到 GitHub Pages。
