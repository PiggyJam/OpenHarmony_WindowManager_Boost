# Agents

Agents 是自动化执行的智能代理，可以完成复杂的多步骤任务。

## 可用 Agents

### 代码分析 Agent

自动分析 Pull Request 的代码变更，生成影响报告。

**功能：**
- 分析变更影响范围
- 检测潜在问题
- 评估测试覆盖率
- 生成详细报告

**触发方式：**
- PR 创建或更新时自动运行
- 评论 `/analyze` 手动触发

### [详细文档 →](analyzer.md)

---

### 测试生成 Agent

基于代码变更自动生成或更新测试用例。

**功能：**
- 生成单元测试
- 更新现有测试
- 检测测试覆盖缺失
- 支持多种测试框架

**触发方式：**
- PR 创建时自动运行
- 评论 `/generate-tests` 手动触发

### [详细文档 →](tester.md)

---

### 文档同步 Agent

检测 API 变更并自动更新文档。

**功能：**
- 检测 API 签名变更
- 自动更新文档
- 生成变更日志
- 创建文档 PR

**触发方式：**
- 每日定时运行
- PR 合并后触发
- 评论 `/sync-docs` 手动触发

### [详细文档 →](doc-sync.md)

---

## 使用 Agents

### 自动运行

大多数 Agents 会在特定事件（如 PR 创建）时自动运行。

### 手动触发

在 PR 中评论特定命令来手动触发：

```bash
/analyze
/generate-tests
/sync-docs
```

### 配置 Agents

Agents 可以通过仓库配置文件进行自定义。详情请参考各 Agent 的详细文档。

---

## Agent 开发

查看 [项目路线图](https://github.com/xxx/OpenHarmony_WindowManager_Boost/blob/main/docs/plans/roadmap.md) 了解 Agent 开发计划。

---

!!! info "状态"
    Agents 功能正在开发中。目前优先开发核心 SKILLS，Agents 将在后续阶段实现。
