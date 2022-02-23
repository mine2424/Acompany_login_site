# about

this site is acompany login site.

## environment

- version
  - node v16.4.0
  - npm v8.3.0

## set up

First, set your node version
(if you use nodenv, please run this command)

```sh
nodenv local 16.4.0
```

Then run the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## architecture

This app used Clean Architecture, but I reformed the constructions of its architecture.
Since I wanted to learn and understand the complex architecture in React, I used this architecture.

this app of architecture is below the graph.

```
common/
├── plugins (collect config files)
│   └── ~.ts
components/
├── molecules (relatively simple groups of UI elements functioning together as a unit.)
│   └── ~.ts
├── organisms (relatively complex UI components composed of groups. These organisms form distinct sections of an interface.)
│   └── ~.ts
domain/
├── entity (define immutable domain model.)
│   └── ~.ts
├── interface (collect abstract class)
│   ├── repository
│   │   └── ~Repository.ts
│   └── usecase
│       └── ~UseCase.ts
├── repository (can get outside information, such as database, etc...)
│   └── ~Repository.ts
├── usecase (realize use case, only describe the process)
│   ├── index.ts
│   └── ~UseCase.ts
hooks/
├── state (state of Recoil)
│   └── ~State.ts
└── RecoilKeys.ts
└── use~.tsx
pages/
├── ~
│   └── index.tsx
└── _app.tsx
└── index.tsx
```

## statement

this app uses Reack Hook and Recoil.

## UI

this app uses Chakra UI
