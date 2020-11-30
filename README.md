# Cnfs

## Tool

This project was generated using [Nx](https://nx.dev).

## Build for production

```bash
yarn build --prod
```

Output assets are in `dist/apps/dashboard`

## Serve for development

```bash
yarn start
```

By default app is served on http://localhost:4200.

## CI

Each pull request to master runs the following checks using github actions:

- Unit tests: `yarn affected:test --base=origin/master`
- Lint: `yarn affected:lint --base=origin/master`
- Build: `yarn affected:build --base=origin/master`

## Deploy

Currently it is deployed to https://rails-on-services.github.io/cnfs.ts/ using

```bash
yarn nx deploy
```
