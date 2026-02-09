# OpenHarmony WindowManager Boost 项目路线图

## 概述

本文档描述 OpenHarmony WindowManager AI 辅助仓库的开发演进路线。我们采用**模块化渐进式架构**，从核心 SKILLS 开始，逐步添加智能 Agents，最终构建一个全面的 AI 辅助开发平台。

## 架构原则

- **模块化**：每个能力独立开发和维护
- **渐进式**：逐步演进，快速交付价值
- **社区友好**：易于贡献和扩展
- **用户导向**：解决实际开发问题

---

## 阶段 0：基础设施搭建（2-4 周）

### 0.1 GitHub Pages 静态网站

**技术选型：MkDocs with Material theme**

**选择原因：**
- 轻量级，基于 Markdown
- 内置搜索功能
- 丰富的主题和插件
- GitHub Actions 集成简单
- 支持多语言和版本控制

**站点结构：**
```
pages/
├── index.md              # 首页：项目介绍、快速开始
├── wiki/                 # 架构文档
│   ├── architecture.md   # 整体架构
│   ├── modules.md        # 模块说明
│   └── apis.md          # API 文档
├── skills/              # SKILLS 使用指南
│   ├── navigation.md    # 代码导航类
│   ├── development.md   # 开发工作流类
│   └── documentation.md # 文档生成类
├── agents/              # Agents 说明
│   ├── analyzer.md      # 代码分析 Agent
│   ├── tester.md        # 测试生成 Agent
│   └── doc-sync.md      # 文档同步 Agent
└── blog/                # 开发日志
    ├── 2024-01-initial-setup.md
    └── releases.md      # 版本公告
```

**部署配置：**
- 自动部署：推送到 main 分支时触发
- 预览：PR 自动生成预览链接
- 域名：可选自定义域名

### 0.2 CI/CD 基础

**GitHub Actions 工作流：**

```yaml
# .github/workflows/docs-deploy.yml
# 文档自动构建和部署

# .github/workflows/skills-test.yml
# SKILLS 语法和功能测试

# .github/workflows/sync-upstream.yml
# 定期同步上游代码索引（每周一次）
```

### 0.3 代码索引

**目的：** 让 AI 能够高效访问和理解上游代码

**方案选择：**
- 优先：LSP 索引（使用 clangd）
- 备选：ctags/rtags
- 存储：`.code-index/` 目录，Git LFS 管理

**同步策略：**
- 定期：每周自动同步
- 手动：提供 `/sync-index` SKILL
- 增量：仅索引变更部分

### 0.4 目录结构初始化

```
OpenHarmony_WindowManager_Boost/
├── pages/                  # GitHub Pages 静态网站源码
│   ├── index.md           # 首页
│   ├── wiki/              # 架构文档
│   ├── skills/            # SKILLS 使用指南
│   ├── agents/            # Agents 说明
│   └── blog/              # 开发日志
├── docs/                   # 设计文档
│   └── plans/             # 项目规划文档
│       └── roadmap.md     # 本文件
├── wiki/                   # 独立的 Wiki 内容（深度技术文档）
├── agentic/                # AI 辅助流程定义
│   ├── skills/            # SKILLS 定义
│   │   ├── navigation/    # 代码导航类
│   │   │   ├── find-module.md
│   │   │   ├── explain-class.md
│   │   │   └── trace-call.md
│   │   ├── development/   # 开发工作流类
│   │   │   ├── create-feature.md
│   │   │   ├── fix-bug.md
│   │   │   └── submit-pr.md
│   │   └── documentation/ # 文档生成类
│   │       ├── generate-api-doc.md
│   │       └── create-diagram.md
│   └── agents/            # Agents 定义
│       ├── analyzer/      # 代码分析 Agent
│       ├── tester/        # 测试生成 Agent
│       └── doc-sync/      # 文档同步 Agent
├── scripts/                # 工具脚本
│   ├── sync-index.sh      # 同步代码索引
│   ├── test-skills.sh     # 测试 SKILLS
│   └── build-docs.sh      # 构建文档
├── tests/                  # 测试文件
│   ├── skills/            # SKILLS 测试
│   └── agents/            # Agent 测试
├── .code-index/           # 代码索引（Git LFS）
├── .github/
│   └── workflows/         # CI/CD 配置
└── mkdocs.yml             # MkDocs 配置
```

**目录说明：**
- `pages/` - 静态网站内容源码，用于 MkDocs 构建 GitHub Pages
- `docs/` - 内部设计文档，如本 roadmap
- `wiki/` - 深度技术文档，与网站内容互补
- `agentic/` - AI 辅助流程的核心定义

---

## 阶段 1：核心 SKILLS 开发（4-8 周）

### 1.1 代码导航 SKILLS

| SKILL | 功能描述 | 输入 | 输出 |
|-------|---------|------|------|
| `/find-module` | 查找模块定义和所有引用 | 模块名/路径 | 文件位置、引用列表、依赖关系 |
| `/explain-class` | 解释类的职责、成员和依赖 | 类名 | 类说明、成员列表、继承关系、依赖图 |
| `/trace-call` | 追踪函数的完整调用链 | 函数名 | 调用树、参数流、返回值处理 |
| `/search-pattern` | 按代码模式搜索 | 模式描述 | 匹配代码片段、位置、上下文 |

**实现优先级：**
1. `/find-module` - 最基础，其他依赖
2. `/explain-class` - 独立实现，高价值
3. `/search-pattern` - 中等复杂度
4. `/trace-call` - 最复杂，依赖前三个

### 1.2 开发工作流 SKILLS

| SKILL | 功能描述 | 触发时机 |
|-------|---------|---------|
| `/create-feature` | 创建特性分支、模板文件 | 新功能开发前 |
| `/fix-bug` | 分析 Bug、定位根因、生成修复方案 | Bug 修复 |
| `/submit-pr` | 检查代码、生成 PR 描述、提交流程 | 提交 PR 时 |
| `/review-code` | 辅助代码审查，检查问题和建议 | PR Review |

**每个 SKILL 的详细流程：**

**`/create-feature` 流程：**
1. 询问功能描述
2. 检查现有代码结构
3. 创建特性分支
4. 生成代码模板
5. 列出相关测试文件
6. 生成 TODO 列表

**`/fix-bug` 流程：**
1. 解析 Bug 描述/日志
2. 定位相关代码
3. 分析可能原因
4. 生成修复方案（多个选项）
5. 创建修复分支
6. 生成测试用例

### 1.3 文档生成 SKILLS

| SKILL | 功能描述 | 输出格式 |
|-------|---------|---------|
| `/generate-api-doc` | 从代码注释生成 API 文档 | Markdown |
| `/create-diagram` | 生成架构图/流程图 | Mermaid/PNG |
| `/extract-wiki` | 从代码提取 Wiki 内容 | Markdown |

---

## 阶段 2：智能 Agents 集成（6-10 周）

### 2.1 代码分析 Agent

**功能：**
- 分析 PR 的代码变更
- 生成影响范围报告
- 检测潜在问题（性能、安全、兼容性）
- 评估测试覆盖率

**触发条件：**
- PR 创建或更新
- 手动触发（评论指令）

**输出：**
- PR 评论（摘要）
- 详细报告（Artifacts 或文件附件）

**工作流：**
```
PR 创建/更新
  → 获取代码差异
  → 分析变更模块
  → 运行静态检查
  → 生成影响报告
  → 发布 PR 评论
  → 存储详细报告
```

### 2.2 测试生成 Agent

**功能：**
- 基于代码变更自动生成测试
- 更新现有测试（参数、期望值）
- 检测测试覆盖缺失

**支持框架：**
- C++：gtest/gtest
- TypeScript：jest

**输出：**
- 测试代码文件
- 测试执行报告
- 覆盖率报告

### 2.3 文档同步 Agent

**功能：**
- 检测 API 签名变更
- 自动更新相关文档
- 生成变更日志

**触发时机：**
- 每日定时（夜间运行）
- PR 合并后

**处理策略：**
- Minor 变更：直接提交
- Major 变更：创建 PR 供审核

---

## 阶段 3：生态与扩展（持续）

### 3.1 贡献指南

**文档内容：**
- SKILLS 开发规范
- Agent 开发最佳实践
- 代码风格指南
- 测试要求
- PR 流程

**提供模板：**
- SKILL 模板文件
- Agent 配置模板
- PR 描述模板

### 3.2 插件系统

**设计目标：**
- 支持第三方 SKILLS
- SKILLS 发现和加载
- 版本管理

**接口标准：**
```yaml
# SKILL 元数据规范
name: skill-name
version: 1.0.0
description: 技能描述
author: 作者
dependencies:
  - other-skill
  - tool:requirement
```

### 3.3 社区集成

**与上游联动：**
- Issue 双向同步
- 定期分享会
- 贡献展示

**激励机制：**
- 贡献者榜单
- 优秀 SKILLS 评选
- 文档贡献奖励

---

## 里程碑

| 阶段 | 里程碑 | 预计时间 | 验收标准 |
|-----|-------|---------|---------|
| 0 | 基础设施就绪 | 第 4 周 | GitHub Pages 可访问，CI/CD 运行 |
| 1 | 核心 SKILLS 可用 | 第 12 周 | 10+ SKILLS 可用，文档完整 |
| 2 | Agents 集成 | 第 22 周 | 3+ Agents 运行，自动化覆盖主要流程 |
| 3 | 生态建立 | 持续 | 5+ 社区贡献，月活用户增长 |

---

## 风险与应对

| 风险 | 影响 | 应对措施 |
|-----|------|---------|
| 上游 API 变更 | 高 | 建立变更监控，及时适配 |
| AI 能力限制 | 中 | 设定合理预期，提供 fallback |
| 社区参与度低 | 低 | 降低贡献门槛，增加激励机制 |
| 资源不足 | 中 | 优先核心功能，渐进交付 |

---

## 联系与反馈

- Issue: [GitHub Issues](https://github.com/xxx/issues)
- Discussion: [GitHub Discussions](https://github.com/xxx/discussions)

---

*最后更新：2024-01-XX*
