# OpenHarmony WindowManager Boost

<div align="center">

**AI 驱动的 OpenHarmony WindowManager 子系统开发辅助平台**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/xxx/OpenHarmony_WindowManager_Boost)
[![Documentation](https://img.shields.io/badge/Docs-MkDocs-blue?logo=mkdocs)](https://xxx.github.io/OpenHarmony_WindowManager_Boost)
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)

</div>

---

## 概述

OpenHarmony WindowManager Boost 是一个面向 OpenHarmony WindowManager 子系统的 AI 辅助开发平台。通过智能 **SKILLS** 和自动化 **Agents**，帮助开发者更高效地理解、开发和贡献代码。

## 核心特性

- 🔍 **智能代码导航** - 快速定位模块、类、函数，理解代码结构
- 🛠️ **开发工作流辅助** - 从特性开发到 Bug 修复的全流程 AI 辅助
- 📚 **自动文档生成** - 从代码注释自动生成 API 文档和架构图
- 🤖 **智能分析 Agent** - 自动分析 PR 变更、生成测试用例、同步文档

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

### 3. 开始使用

```bash
# 查找窗口管理模块
/find-module WMComponent

# 创建新特性
/create-feature "添加窗口动画支持"

# 修复 Bug
/fix-bug #5678
```

## 项目结构

```
OpenHarmony_WindowManager_Boost/
├── pages/              # 静态网站内容 (MkDocs)
├── docs/              # 设计文档和规划
├── agentic/           # AI 辅助流程定义
│   ├── skills/        # SKILLS 定义
│   └── agents/        # Agents 定义
├── wiki/              # 深度技术文档
└── scripts/           # 工具脚本
```

## 文档

完整文档请访问：[https://xxx.github.io/OpenHarmony_WindowManager_Boost](https://xxx.github.io/OpenHarmony_WindowManager_Boost)

## 贡献

欢迎各种形式的贡献！请查看 [贡献指南](CONTRIBUTING.md) 了解详情。

## 相关链接

- [OpenHarmony](https://www.openharmony.cn/mainPlay)
- [WindowManager 仓库](https://gitcode.com/openharmony/window_window_manager)
- [项目路线图](docs/plans/roadmap.md)

## 许可证

本项目采用 Apache 2.0 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。
