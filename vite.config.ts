import type { UserConfig } from 'vite'

import tsconfigPaths from 'vite-tsconfig-paths'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from '@brillout/vite-plugin-mdx'
import mdxPrism from 'mdx-prism'

const options = {
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-code-titles'),
    require('remark-slug'),
  ],
  rehypePlugins: [mdxPrism],
}

const config: UserConfig = {
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [tsconfigPaths(), reactRefresh(), mdx(options)],
}

export default config
