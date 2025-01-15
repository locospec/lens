## Setup

`npm install`

## Install packages into site

lerna add <package-name> --scope="site"

npm install -D tailwindcss postcss autoprefixer tailwindcss-scoped-preflight @tailwindcss/typography

https://github.com/vitejs/vite/issues/15167

```
  "optionalDependencies": {
    "@rollup/rollup-darwin-arm64": "^4.30.1",
    "@rollup/rollup-darwin-x64": "^4.30.1",
    "@rollup/rollup-linux-x64-gnu": "^4.30.1",
    "@swc/core-darwin-arm64": "^1.10.7",
    "@swc/core-darwin-x64": "^1.10.7",
    "@swc/core-linux-x64-gnu": "^1.10.7"
  }
```

```
npm run bp:build
```

```
npm run bp:build && npx auto canary --force
```


## Contributors

<a href="https://github.com/locospec/ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=locospec/ui" />
</a>

