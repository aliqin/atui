# AGENTS.md

## Cursor Cloud specific instructions

### Project Overview

ATUI is a Vue.js 2.x UI component library (35+ components) with a Bisheng-powered documentation site. See `package.json` scripts for all available commands.

### Node.js Version

The project requires **Node.js 8** via nvm. The `.travis.yml` specifies Node 6, but Node 6's npm (v3) can no longer resolve some transitive dependencies (deleted GitHub repos, unsupported `npm:` protocol). Node 8 (npm 6) is the minimum that works.

```bash
nvm use 8.17.0
```

### gonzales-pe Workaround

`lesshint@^1.5.2` depends on `gonzales-pe` from a deleted GitHub repo (`gilt/gonzales-pe`). A git URL redirect is configured globally to point to a local bare repo populated from the npm registry version:

```
git config --global url."/tmp/gonzales-pe-repo".insteadOf "git@github.com:gilt/gonzales-pe.git"
```

If `npm install` fails with a gonzales-pe error, recreate the local repo:
```bash
cd /tmp && npm pack gonzales-pe@4.3.0 && mkdir -p gonzales-pe-repo && cd gonzales-pe-repo && git init --bare .
cd /tmp && mkdir -p gonzales-pe-work && cd gonzales-pe-work && git init . && tar xzf /tmp/gonzales-pe-4.3.0.tgz --strip-components=1 && git add -A && git commit -m "initial" && git checkout -b dev && git remote add origin /tmp/gonzales-pe-repo && git push origin dev
```

### Running Services

- **Dev server**: `npx webpack-dev-server --config build/webconfig.config.js --host 0.0.0.0 --hot` (port 8080) — serves compiled bundles at `/build/`
- **Docs site** (optional): `npx bisheng start -c ./site/bisheng.config.js` (port 8001)
- `npm start` runs both concurrently

### Known Lint/Test Issues (pre-existing)

- **ESLint**: `eslint-plugin-html@1.7.0` is incompatible with `eslint@4.19.1` — the `npm run eslint` command fails on `.vue` files. ESLint works on `.js` files only.
- **Lesshint**: `npm run lesshint` reports many warnings/errors (pre-existing in the codebase, exit code 2).
- **Unit tests**: `npm run test:unit` uses Karma + Chrome. A pre-existing error in the Slider component test (`getBoundingClientRect` on null) causes the test run to abort. PhantomJS does not work on modern systems.
- These are all pre-existing issues due to the lack of a lockfile and bitrot in old dependencies. They are not caused by the dev environment setup.

### Testing Components in Browser

The webpack dev server serves built bundles at `/build/atui.js`, `/build/greater-blue.css`, etc. To test components, create an HTML file that loads Vue from CDN and the built bundles from the dev server.
