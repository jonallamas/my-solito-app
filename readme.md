# Challenge solito 🕴

```bash
npm install --global expo-cli
git clone ...
cd my-solito-app
```

👾 [View the website](https://example.solito.dev)

## 🔦 About

This monorepo is a starter project for an Expo + Next.js app.

## 📦 Included packages

- [Solito](https://solito.dev/) for cross-platform navigation
- [Native-base](https://nativebase.io/) for theming/design
- Expo SDK 44
- Next.js 12
- [React Navigation](https://reactnavigation.org/)
- [React Native Chart Kit](https://github.com/indiespirit/react-native-chart-kit) for line chart

## 🗂 Folder layout

- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `components` for general components
    - `features` (don't use a `screens` folder. organize by feature.)
    - `hooks` for general hooks
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next`
- Expo local dev: `yarn native`
  - Runs `expo start`

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `apps/expo`:

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).
