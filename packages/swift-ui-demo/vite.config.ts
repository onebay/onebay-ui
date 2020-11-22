const path = require('path');
import type { UserConfig } from 'vite'
import tsResolver from 'vite-tsconfig-paths'

const config: UserConfig = {
  alias: {
    '/@/swift-ui/': path.resolve(__dirname, '../swift-ui'),
  },
  resolvers: [tsResolver],
  port: 3333
}

export default config
