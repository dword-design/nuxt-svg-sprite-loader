<!-- TITLE/ -->
# nuxt-svg-sprite-loader
<!-- /TITLE -->

<!-- BADGES/ -->
[![NPM version](https://img.shields.io/npm/v/nuxt-svg-sprite-loader.svg)](https://npmjs.org/package/nuxt-svg-sprite-loader)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)
[![Build status](https://github.com/dword-design/nuxt-svg-sprite-loader/workflows/build/badge.svg)](https://github.com/dword-design/nuxt-svg-sprite-loader/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/nuxt-svg-sprite-loader)](https://coveralls.io/github/dword-design/nuxt-svg-sprite-loader)
[![Dependency status](https://img.shields.io/david/dword-design/nuxt-svg-sprite-loader)](https://david-dm.org/dword-design/nuxt-svg-sprite-loader)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

<a href="https://gitpod.io/#https://github.com/dword-design/bar">
  <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod">
</a><a href="https://www.buymeacoffee.com/dword">
  <img
    src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
    alt="Buy Me a Coffee"
    height="32"
  >
</a><a href="https://paypal.me/SebastianLandwehr">
  <img
    src="https://dword-design.de/images/paypal.svg"
    alt="PayPal"
    height="32"
  >
</a><a href="https://www.patreon.com/dworddesign">
  <img
    src="https://dword-design.de/images/patreon.svg"
    alt="Patreon"
    height="32"
  >
</a>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
Nuxt.js module for svg-sprite-loader.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# NPM
$ npm install nuxt-svg-sprite-loader

# Yarn
$ yarn add nuxt-svg-sprite-loader
```
<!-- /INSTALL -->

## Usage

Add the module to your Nuxt.js modules list in `nuxt.config.js`:
```js
export default {
  ...
  modules: [
    'nuxt-svg-sprite-loader'
  ]
}
```

Use an SVG in your page:
```vue
<template>
  <svg><use :xlink:href="'#' + Logo.id"></use></svg>
</template>

<script>
import Logo from '@/assets/logo.svg'

export default {
  computed: {
    Logo: () => Logo,
  },
}
</script>
```

Or use it with JSX:
```vue
<script>
import Logo from '@/assets/logo.svg'

export default {
  render() {
    return <svg><use xlinkHref={`#\${Logo.id}`}></use></svg>
  }
}
</script>
```

## Options

You can pass options to the module, which are passed down to the [svg-sprite-loader](https://www.npmjs.com/package/svg-sprite-loader) NPM package. Please refer to this for the available options.

Directly:
```js
export default {
  ...
  modules: [
    ['nuxt-svg-sprite-loader', {
      symbolId: 'foo-[name]'
    }]
  ]
}
```

Top-level:
```js
export default {
  ...
  modules: [
    'nuxt-svg-sprite-loader'
  ],
  spriteSvgLoader: {
    symbolId: 'foo-[name]'
  }
}
```

<!-- LICENSE/ -->
## License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->
