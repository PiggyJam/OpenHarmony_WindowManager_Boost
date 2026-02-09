# OpenHarmony WindowManager Boost 文档

这是一个 OpenHarmony WindowManager 子系统的 AI 辅助仓库。

WindowManager 是 OpenHarmony 和 HarmonyOS 的公共窗口管理服务底座。
- 官方代码仓库：https://gitcode.com/openharmony/window_window_manager

## 目录结构

```
docs/
├── plans/              # 项目规划和设计文档
│   └── roadmap.md      # 项目演进路线图
├── stylesheets/        # 自定义 CSS 样式
│   ├── blueprint.css   # Technical Blueprint 主题样式
│   ├── animations.css  # 动画效果
│   └── syntax.css      # 代码语法高亮
└── javascripts/        # 交互式 JavaScript
    ├── connections.js  # 代码连接动画
    └── cursor.js       # 光标追踪效果
```

## 其他目录

- `wiki/`：对整个窗口管理服务的架构、模块、特性的详细解读，帮助开发者了解 OH 窗口管理子系统的设计和实现
- `agentic/`：集成 OH 窗口管理子系统的 AI 辅助流程，包括 SKILLS 集合和 Agent 集合
- `pages/`：GitHub Pages 静态网站源码

## 静态网站

本仓库提供 GitHub Pages 托管的静态网站，方便阅读和贡献。

构建和部署：
- 自动部署：推送到 main 分支时自动触发 GitHub Actions
- 本地预览：运行 `./scripts/build-docs.sh serve`