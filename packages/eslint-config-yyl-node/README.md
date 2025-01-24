# eslint-config-yyl-react

为 yyl-node 项目提供 eslint@9.x, prettier@3.x 配置规则

## install

```bash
npm i eslint-config-yyl-react --save-dev
```

### 依赖包

```bash
npm i prettier@3 eslint@9 --save-dev
```

## usage

### prettier 配置

根目录新增 `prettier.config.mjs`

```js
import nodePrettierRule from 'eslint-config-yyl-node/prettier.config.mjs'
/** @type {import('prettier').Config} */
export default {
  ...nodePrettierRule
}
```

根目录新增 `.prettierignore`

```
**/js/lib/**
**/__frag/**
**/__gitcase/**
.rpt2_cache
dist/**
**/dist/**
output/**
node_modules/**
*.yml
.gitignore
.prettierignore
yarn.lock
.npmignore
.**/*.map
package-lock.json
**/*.pug
**/*.png
**/*.jpg
**/*.bmp
**/*.jpeg
**/*.gif
**/*.pug**/*
**/*.sh
**/*.conf
**/__frag/*
.log
**/*.log
.DS_Store
**/.DS_Store
**/*.webp
```

### eslint 配置

根目录新增 `eslint.config.mjs`

```js
import yylNodeConfig from 'eslint-config-yyl-node'
/** @type {import('eslint').Linter.Config[]} */
export default [
  ...yylNodeConfig,
  {
    ignores: ['node_modules/*', 'output/*', 'test/*']
  },
  {
    languageOptions: {
      globals: {}
    },
    rules: {}
  }
]
```

### npm script 配置

修改 `package.json`

```json
{
  "scripts": {
    "eslint": "eslint ./",
    "prettier": "prettier --write ./"
  }
}
```
