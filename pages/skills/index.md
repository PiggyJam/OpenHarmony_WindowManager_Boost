# Skills

SKILLS 是 Claude Code 的可复用能力集合，通过简单的命令即可调用强大的 AI 辅助功能。

## 代码导航 SKILLS

快速理解和定位代码。

| SKILL | 描述 | 示例 |
|-------|------|------|
| `/find-module` | 查找模块定义和引用 | `/find-module WindowScene` |
| `/explain-class` | 解释类的职责和依赖 | `/explain-class WindowLayout` |
| `/trace-call` | 追踪函数调用链 | `/trace-call CreateWindow` |
| `/search-pattern` | 搜索代码模式 | `/search-pattern "singleton pattern"` |

### [详细文档 →](navigation/)

## 开发工作流 SKILLS

辅助日常开发任务。

| SKILL | 描述 | 示例 |
|-------|------|------|
| `/create-feature` | 创建特性分支和模板 | `/create-feature "添加动画支持"` |
| `/fix-bug` | 分析和修复 Bug | `/fix-bug #1234` |
| `/submit-pr` | 提交 Pull Request | `/submit-pr` |
| `/review-code` | 代码审查辅助 | `/review-code` |

### [详细文档 →](development/)

## 文档生成 SKILLS

自动生成和更新文档。

| SKILL | 描述 | 示例 |
|-------|------|------|
| `/generate-api-doc` | 生成 API 文档 | `/generate-api-doc WindowScene` |
| `/create-diagram` | 创建架构图 | `/create-diagram sequence` |
| `/extract-wiki` | 提取 Wiki 内容 | `/extract-wiki architecture` |

### [详细文档 →](documentation/)

---

## 使用 SKILLS

### 基本用法

在 Claude Code 对话中直接输入 SKILL 命令：

```bash
/explain-class WindowScene
```

### 带参数使用

```bash
/fix-bug #1234 --analyze-only
/create-feature "添加多窗口支持" --with-tests
```

### 组合使用

```bash
# 1. 先理解现有代码
/explain-class WindowLayout

# 2. 然后创建新特性
/create-feature "添加新布局模式"

# 3. 最后提交 PR
/submit-pr
```

---

## 开发自定义 SKILLS

查看 [SKILLS 开发指南](https://github.com/xxx/OpenHarmony_WindowManager_Boost/blob/main/docs/plans/roadmap.md) 了解如何创建自己的 SKILLS。

---

!!! tip "提示"
    SKILLS 可以组合使用形成复杂的工作流。尝试串联多个 SKILLS 来完成完整的开发任务！
