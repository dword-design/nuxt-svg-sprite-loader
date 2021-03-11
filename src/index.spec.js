import { endent, mapValues } from '@dword-design/functions'
import puppeteer from '@dword-design/puppeteer'
import { Builder, Nuxt } from 'nuxt'
import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'

let browser
let page
const runTest = config => () => {
  config = { resultingId: 'logo', ...config }
  return withLocalTmpDir(async () => {
    await outputFiles({
      'assets/logo.svg': '<svg xmlns="http://www.w3.org/2000/svg" />',
      'pages/index.vue': config.page,
    })
    const nuxt = new Nuxt({
      createRequire: 'native',
      dev: false,
      modules: [['~/../src', config.options]],
    })
    await new Builder(nuxt).build()
    await nuxt.listen()
    try {
      await page.goto('http://localhost:3000')
      const handle = await page.waitForSelector('#__layout')
      expect(
        await handle.evaluate(layout =>
          layout.querySelector('svg use').getAttribute('xlink:href')
        )
      ).toEqual(`#${config.resultingId}`)
      expect(
        await page.$eval(`#${config.resultingId}`, logo => logo.tagName)
      ).toEqual('symbol')
    } finally {
      await nuxt.close()
    }
  })
}

export default {
  after: () => browser.close(),
  before: async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
  },
  ...({
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
  } |> mapValues(runTest)),
}
