import type { UserConfig } from 'vite'

import tsconfigPaths from 'vite-tsconfig-paths'
import reactRefresh from '@vitejs/plugin-react-refresh'

const config: UserConfig = {
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [tsconfigPaths(), reactRefresh()],
}

export default config
