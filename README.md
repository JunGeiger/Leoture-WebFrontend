<div align="center">
	<img src="./public/favicon.svg" width="160" />
	<h1>LeotureWeb is based on SoybeanAdmin-NaiveUI 2.20</h1>
  <span><a href="./README.en_US.md">English</a> | 中文</span>
</div>

---

> [!NOTE]
> `SoybeanAdmin` 快速上手系列视频已在 [Bilibili](https://www.bilibili.com/video/BV1YKdRYXELC) 上线 [点击这里](https://www.bilibili.com/video/BV1YKdRYXELC) 前往查看

<div align="center">
  <table width="100%">
    <tr>
      <td align="left">
        <table>
          <tr>
            <td>
              <a href="https://ui.soybeanjs.cn">
                <img alt="SoybeanUI" src="./public/favicon.svg" width="52" />
              </a>
            </td>
            <td>
              <a href="https://ui.soybeanjs.cn">
                <img
                  alt="SoybeanUI"
                  src="https://img.shields.io/badge/SoybeanUI-Headless%20%2B%20UI-6366f1?style=for-the-badge&labelColor=312e81"
                />
              </a>
            </td>
          </tr>
        </table>
        <strong>面向 Vue 3 的强大而优雅的组件系统，提供无头交互能力与开箱即用的样式封装。</strong><br />
        <sub>采用 Headless + UI 两层架构，复用底层交互能力，统一上层界面表达。</sub>
        <br /><br />
        <img alt="Vue 3" src="https://img.shields.io/badge/Vue%203-Component%20Library-6366f1?style=flat-square&labelColor=4338ca" />
        <img alt="Headless" src="https://img.shields.io/badge/Headless-Logic%20%26%20State-818cf8?style=flat-square&labelColor=3730a3" />
        <img alt="Admin" src="https://img.shields.io/badge/Admin-Professional%20UI-a5b4fc?style=flat-square&labelColor=4f46e5" />
      </td>
    </tr>
  </table>
</div>

## 简介

[`SoybeanAdmin`]是一个清新优雅、高颜值且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite7, TypeScript, Pinia 和 UnoCSS。它内置了丰富的主题配置和组件，代码规范严谨，实现了自动化的文件路由系统。此外，它还采用了基于 ApiFox 的在线Mock数据方案。`SoybeanAdmin` 为您提供了一站式的后台管理解决方案，无需额外配置，开箱即用。同样是一个快速学习前沿技术的最佳实践。

## 特性

- **前沿技术应用**：采用 Vue3, Vite7, TypeScript, Pinia 和 UnoCSS 等最新流行的技术栈。
- **清晰的项目架构**：采用 pnpm monorepo 架构，结构清晰，优雅易懂。
- **严格的代码规范**：遵循 [SoybeanJS 规范](https://docs.soybeanjs.cn/zh/standard)，集成了eslint, prettier 和 simple-git-hooks，保证代码的规范性。
- **TypeScript**： 支持严格的类型检查，提高代码的可维护性。
- **丰富的主题配置**：内置多样的主题配置，与 UnoCSS 完美结合。
- **内置国际化方案**：轻松实现多语言支持。
- **自动化文件路由系统**：自动生成路由导入、声明和类型。
- **灵活的权限路由**：同时支持前端静态路由和后端动态路由。
- **丰富的页面组件**：内置多样页面和组件，包括403、404、500页面，以及布局组件、标签组件、主题配置组件等。
- **命令行工具**：内置高效的命令行工具，git提交、删除文件、发布等。
- **移动端适配**：完美支持移动端，实现自适应布局。

### [文档地址](https://docs.soybeanjs.cn)

## 使用

**环境准备**
确保你的环境满足以下要求：

- **git**: 你需要git来克隆和管理项目版本。
- **NodeJS**: >=20.19.0，推荐 20.19.0 或更高。
- **pnpm**: >= 10.5.0，推荐 10.5.0 或更高。

````
**安装依赖**

```bash
pnpm i
````

> 由于本项目采用了 pnpm monorepo 的管理方式，因此请不要使用 npm 或 yarn 来安装依赖。

**启动项目**

```bash
pnpm dev
```

**构建项目**

```bash
pnpm build
```

**代码同步**
参考 [代码同步](https://docs.soybeanjs.cn/zh/guide/sync) 文档。

## Git 提交规范

本项目已内置 `commit` 命令，您可以通过执行 `pnpm commit` 来生成符合 [Conventional Commits](<[conventionalcommits](https://www.conventionalcommits.org/)>) 规范的提交信息。在提交PR时，请务必使用 `commit` 命令来创建提交信息，以确保信息的规范性。

## 浏览器支持

推荐使用最新版的 Chrome 浏览器进行开发，以获得更好的体验。

- IE not support
- Edge last 2 versions
- Firefox last 2 versions
- Chrome last 2 versions
- Safari last 2 versions

#### 开源协议

- 作者 Soybean
- 项目基于 [MIT © 2021 Soybean](./LICENSE) 协议，仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。
