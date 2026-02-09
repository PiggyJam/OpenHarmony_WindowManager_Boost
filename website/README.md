# OpenHarmony WindowManager Boost Website

基于 Docusaurus 的项目官网，采用 **Code Gallery** 设计风格。

## 开发

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm start
```

访问 http://localhost:3000 查看效果。

### 构建

```bash
npm run build
```

构建产物在 `build` 目录。

## 设计特色

- **字体**: Playfair Display (标题) + DM Mono (代码) + Source Sans Pro (正文)
- **配色**: 温暖的米白色背景 + 琥珀色强调
- **布局**: 艺术画廊式网格布局
- **动效**: 优雅的淡入动画

## 目录结构

```
website/
├── blog/              # 博客文章
├── docs/              # 文档内容
│   ├── wiki/          # Wiki 文档
│   ├── skills/        # Skills 文档
│   └── agents/        # Agents 文档
├── src/
│   ├── components/    # React 组件
│   ├── css/           # 自定义样式
│   ├── pages/         # 页面组件
│   └── prism-themes/  # 代码高亮主题
├── static/            # 静态资源
├── docusaurus.config.ts
├── sidebars.ts
└── package.json
```

## 部署

### GitHub Pages

```bash
npm run deploy
```

### 其他平台

上传 `build` 目录内容即可。
