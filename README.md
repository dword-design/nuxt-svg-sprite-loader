<!-- TITLE/ -->
# nuxt-svg-sprite-loader
<!-- /TITLE -->

<!-- BADGES/ -->
  <p>
    <a href="https://npmjs.org/package/nuxt-svg-sprite-loader">
      <img
        src="https://img.shields.io/npm/v/nuxt-svg-sprite-loader.svg"
        alt="npm version"
      >
    </a><img src="https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue" alt="Linux macOS Windows compatible"><a href="https://github.com/dword-design/nuxt-svg-sprite-loader/actions">
      <img
        src="https://github.com/dword-design/nuxt-svg-sprite-loader/workflows/build/badge.svg"
        alt="Build status"
      >
    </a><a href="https://codecov.io/gh/dword-design/nuxt-svg-sprite-loader">
      <img
        src="https://codecov.io/gh/dword-design/nuxt-svg-sprite-loader/branch/master/graph/badge.svg"
        alt="Coverage status"
      >
    </a><a href="https://david-dm.org/dword-design/nuxt-svg-sprite-loader">
      <img src="https://img.shields.io/david/dword-design/nuxt-svg-sprite-loader" alt="Dependency status">
    </a><img src="https://img.shields.io/badge/renovate-enabled-brightgreen" alt="Renovate enabled"><br/><a href="https://gitpod.io/#https://github.com/dword-design/nuxt-svg-sprite-loader">
      <img
        src="https://gitpod.io/button/open-in-gitpod.svg"
        alt="Open in Gitpod"
        height="32"
      >
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
</p>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
Nuxt.js module for svg-sprite-loader.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# npm
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
## Contribute

Are you missing something or want to contribute? Feel free to file an [issue](https://github.com/dword-design/nuxt-svg-sprite-loader/issues) or a [pull request](https://github.com/dword-design/nuxt-svg-sprite-loader/pulls)! ⚙️

## Support

Hey, I am Sebastian Landwehr, a freelance web developer, and I love developing web apps and open source packages. If you want to support me so that I can keep packages up to date and build more helpful tools, you can donate here:

<p>
  <a href="https://www.buymeacoffee.com/dword">
    <img
      src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
      alt="Buy Me a Coffee"
      height="32"
    >
  </a>&nbsp;If you want to send me a one time donation. The coffee is pretty good 😊.<br/>
  <a href="https://paypal.me/SebastianLandwehr">
    <img
      src="https://dword-design.de/images/paypal.svg"
      alt="PayPal"
      height="32"
    >
  </a>&nbsp;Also for one time donations if you like PayPal.<br/>
  <a href="https://www.patreon.com/dworddesign">
    <img
      src="https://dword-design.de/images/patreon.svg"
      alt="Patreon"
      height="32"
    >
  </a>&nbsp;Here you can support me regularly, which is great so I can steadily work on projects.
</p>

Thanks a lot for your support! ❤️

## License

[MIT License](https://opensource.org/licenses/MIT) © [Sebastian Landwehr](https://dword-design.de)
<!-- /LICENSE -->
