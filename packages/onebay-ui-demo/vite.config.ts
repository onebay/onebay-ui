const path = require('path');
import type { UserConfig } from 'vite'
import tsResolver from 'vite-tsconfig-paths'

const config: UserConfig = {
  alias: {
    '/@/onebay-ui/': path.resolve(__dirname, '../onebay-ui'),
  },
  resolvers: [tsResolver],
  port: 3333
}

export default config
