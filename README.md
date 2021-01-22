# Storybook Workshop

This is a small repository to show some Sotrybook 6 examples.

# Table of contents

- [Storybook Workshop](#storybook-workshop)
- [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Usage](#usage)
  - [Storybook Addons](#storybook-addons)
  - [Storybook Snapshot Tests](#storybook-snapshot-tests)
  - [Further reading about Storybook](#further-reading-about-storybook)
  - [Further Reading about Design Systems](#further-reading-about-design-systems)

## Introduction

The project is simply bootstrapped with Create-React-app and Storybook 6:

```
npx create-react-app my-app
```

and then

```
npx sb init
```

## Usage

To start storybook use:

```
yarn storybook
```

## Storybook Addons

The standard Storybook initialization install the essential addons automatically:

- [Essentials](https://storybook.js.org/addons/essentials)
  - [Actions](https://storybook.js.org/addons/@storybook/addon-actions)
  - [Viewport](https://storybook.js.org/addons/@storybook/addon-viewport)
  - [Docs](https://storybook.js.org/addons/@storybook/addon-docs)
  - [Backgrounds](https://storybook.js.org/addons/@storybook/addon-backgrounds)
  - [Controls](https://storybook.js.org/addons/@storybook/addon-controls)
  - [Toolsbars](https://storybook.js.org/addons/@storybook/addon-toolbars)

Other useful addons are:

- [Accessibility](https://storybook.js.org/addons/@storybook/addon-a11y)
- [Storyshots](https://storybook.js.org/addons/@storybook/addon-**storyshots**)

https://storybook.js.org/addons/

## Storybook Snapshot Tests

You can run the test with:

```
yarn test
```

## Further reading about Storybook

- https://storybook.js.org/
- https://www.learnstorybook.com/

## Further Reading about Design Systems

- http://news.design.systems/
- https://github.com/alexpate/awesome-design-systems
