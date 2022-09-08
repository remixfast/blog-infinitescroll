<p align="center">
  <a href="https://remixfast.com">
    <img src="https://remixfast.com/images/logo.png" height="48px" width="48px">
    <h1 align="center">Remix<i>Fast</i></h1>
  </a>
</p>

Code for [Remix Infinite Scrolling blog post](https://remixfast.com/blog/remix-infinite-scrolling)👀

RemixFast Stater App includes ready to integrate code to help you jump start your Remix project 🚀.

## Start

Initialize =>

```
npm run init
```

The database seed script creates a new user you can use to get started:

- Email: Your Github email
- Password: `RemixFast8`

Start UI =>

```
npm run dev
```

If you find RemixFast starter useful in building your RemixRun app, **please let others know**. 🙏 Thanks.

## [License](https://www.remixfast.com/license)

Please note that your use of code is subject to [license terms](https://www.remixfast.com/license).

## Issues🐛 / Suggestions✅ / Feedback🤔

Please contact us at [support@remixfast.com 💌](mailto://support@remixfast.com)

Twitter [@remixfast](https://twitter.com/remixfast)

## Architecture

Visit [https://remixfast.com/docs/architecture](https://remixfast.com/docs/architecture) to learn about App Architecture.

## Documentation

Visit [https://remixfast.com/docs](https://remixfast.com/docs) to view the full documentation.

## Models

Model files can be found in `app\models`

- Prisma Schema (in `\prisma` folder)
- CRUD Prisma Queries (model.server.ts)
- FormData to Model, common validation logic (model.ts)

## Routes

Route files `app\routes` provides basic list and nested detail route with loaders and actions

- List Route with loader to get list of model items (model.tsx)
- Detail Route with loader to get model detail and action to handle Create, Update and Delete (mdoel\$modelId.tsx)

## Hooks

`app\hooks` provides a simple hook `useMatchesData` to get loader data from parent route.

## Util

`app\util` includes `typecast.ts` used by FormData to Model conversion funcitons

## [RemixFast ⏩](https://remixfast.com)

RemixFast - The Remix Codebase Generator, can also generate codebase for a complete running app with

- [Models](https://remixfast.com/docs/models)
- [Routes](https://remixfast.com/docs/routes)
- [Views](https://remixfast.com/docs/views)
- [Components](https://remixfast.com/docs/components)
- [Hooks](https://remixfast.com/docs/hooks)
- RBAC Security/Authentication/Authorization
- Admin UI
- And lot of other functionality
