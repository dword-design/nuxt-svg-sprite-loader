import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir'
import { Builder, Nuxt } from 'nuxt'
import outputFiles from 'output-files'

import self from './index.js'

export default tester(
  {
    jsx: {
      page: endent`
      <script>
      import Logo from '@/assets/logo.svg'

      export default {
        render() {
          return <svg><use xlinkHref={\`#\${Logo.id}\`}></use></svg>
        }
      }
      </script>

    `,
    },
    options: {
      options: {
        symbolId: 'foo-[name]',
      },
      page: endent`
      <script>
      import Logo from '@/assets/logo.svg'

      export default {
        render() {
          return <svg><use xlinkHref={\`#\${Logo.id}\`}></use></svg>
        }
      }
      </script>

    `,
      resultingId: 'foo-logo',
    },
    template: {
      page: endent`
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

    `,
    },
  },
  [
    testerPluginTmpDir(),
    testerPluginPuppeteer(),
    {
      transform: config => {
        config = { resultingId: 'logo', ...config }

        return async function () {
          await outputFiles({
            'assets/logo.svg': '<svg xmlns="http://www.w3.org/2000/svg" />',
            'pages/index.vue': config.page,
          })

          const nuxt = new Nuxt({
            dev: false,
            modules: [[self, config.options]],
          })
          await new Builder(nuxt).build()
          await nuxt.listen()
          try {
            await this.page.goto('http://localhost:3000')

            const handle = await this.page.waitForSelector('#__layout')
            expect(
              await handle.evaluate(layout =>
                layout.querySelector('svg use').getAttribute('xlink:href')
              )
            ).toEqual(`#${config.resultingId}`)
            expect(
              await this.page.$eval(
                `#${config.resultingId}`,
                logo => logo.tagName
              )
            ).toEqual('symbol')
          } finally {
            await nuxt.close()
          }
        }
      },
    },
  ]
)
