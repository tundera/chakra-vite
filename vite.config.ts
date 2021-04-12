import type { UserConfig } from 'vite'

import tsconfigPaths from 'vite-tsconfig-paths'
import reactRefresh from '@vitejs/plugin-react-refresh'

const config: UserConfig = {
  plugins: [tsconfigPaths(), reactRefresh()],
}

export default config
