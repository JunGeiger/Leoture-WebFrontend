<div align="center">
	<img src="./public/favicon.svg" width="160" />
	<h1>LeotureWeb is based on SoybeanAdmin-NaiveUI 2.20</h1>
  <span><a href="./README.md">中文</a> | English</span>
</div>

---

> [!NOTE]
> The `SoybeanAdmin` quick start series videos have been uploaded to [Bilibili](https://www.bilibili.com/video/BV1YKdRYXELC) Go online [click here](https://www.bilibili.com/video/BV1YKdRYXELC) Go check it out

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
        <strong>A powerful and elegant component system for Vue 3, delivering headless interaction capabilities and ready-to-use style encapsulation.</strong><br />
        <sub>Built on a two-layer Headless + UI architecture to reuse interaction capabilities and unify interface expression.</sub>
        <br /><br />
        <img alt="Vue 3" src="https://img.shields.io/badge/Vue%203-Component%20Library-6366f1?style=flat-square&labelColor=4338ca" />
        <img alt="Headless" src="https://img.shields.io/badge/Headless-Logic%20%26%20State-818cf8?style=flat-square&labelColor=3730a3" />
        <img alt="Admin" src="https://img.shields.io/badge/Admin-Professional%20UI-a5b4fc?style=flat-square&labelColor=4f46e5" />
      </td>
    </tr>
  </table>
</div>

## Introduction

[`SoybeanAdmin`] is a clean, elegant, beautiful and powerful admin template, based on the latest front-end technology stack, including Vue3, Vite7, TypeScript, Pinia and UnoCSS. It has built-in rich theme configuration and components, strict code specifications, and an automated file routing system. In addition, it also uses the online mock data solution based on ApiFox. `SoybeanAdmin` provides you with a one-stop admin solution, no additional configuration, and out of the box. It is also a best practice for learning cutting-edge technologies quickly.

## Features

- **Cutting-edge technology application**: using the latest popular technology stack such as Vue3, Vite7, TypeScript, Pinia and UnoCSS.
- **Clear project architecture**: using pnpm monorepo architecture, clear structure, elegant and easy to understand.
- **Strict code specifications**: follow the [SoybeanJS specification](https://docs.soybeanjs.cn/standard), integrate eslint, prettier and simple-git-hooks to ensure the code is standardized.
- **TypeScript**: support strict type checking to improve code maintainability.
- **Rich theme configuration**: built-in a variety of theme configurations, perfectly integrated with UnoCSS.
- **Built-in internationalization solution**: easily realize multi-language support.
- **Automated file routing system**: automatically generate route import, declaration and type.
- **Flexible permission routing**: support both front-end static routing and back-end dynamic routing.
- **Rich page components**: built-in a variety of pages and components, including 403, 404, 500 pages, as well as layout components, tag components, theme configuration components, etc.
- **Command line tool**: built-in efficient command line tool, git commit, delete file, release, etc.
- **Mobile adaptation**: perfectly support mobile terminal to realize adaptive layout.

## Documentation [Link](https://docs.soybeanjs.cn)

## Usage

**Environment Preparation**
Make sure your environment meets the following requirements:

- **git**: you need git to clone and manage project versions.
- **NodeJS**: >=20.19.0, recommended 20.19.0 or higher.
- **pnpm**: >= 10.5.0, recommended 10.5.0 or higher.

````
**Install Dependencies**

```bash
pnpm i
````

> Since this project uses the pnpm monorepo management method, please do not use npm or yarn to install dependencies.

**Start Project**

```bash
pnpm dev
```

**Build Project**

```bash
pnpm build
```

**Code Synchronization**
Refer to the [Code Synchronization](https://docs.soybeanjs.cn/guide/sync) document.

## Git Commit Guidelines

This project has built-in `commit` command, you can execute `pnpm commit` to generate commit information that conforms to [Conventional Commits](https://www.conventionalcommits.org/) specification. When submitting PR, please be sure to use `commit` command to create commit information to ensure the standardization of information.

## Browser Support

It is recommended to use the latest version of Chrome in development for a better experience.

- IE not support
- Edge last 2 versions
- Firefox last 2 versions
- Chrome last 2 versions
- Safari last 2 versions

### License

- Author Soybean
- This project is based on the [MIT © 2021 Soybean](./LICENSE) protocol, for learning purposes only, please retain the author's copyright information for commercial use, the author does not guarantee and is not responsible for the software.
