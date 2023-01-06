import 'module-alias/register'
import 'source-map-support/register'

import runApp from '@/helpers/runApp'
import startContractListeners from '@/helpers/startContractListeners'

void (async () => {
  await runApp()
  startContractListeners()
})()
