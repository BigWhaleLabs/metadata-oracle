import 'module-alias/register'
import 'source-map-support/register'

import { Web3Provider } from '@ethersproject/providers'
import provider from '@/helpers/provider'
import relayProvider from '@/helpers/relayProvider'
import runApp from '@/helpers/runApp'
import startContractListeners from '@/helpers/startContractListeners'

void (async () => {
  await runApp()
  const gsnProvider = await relayProvider(provider as Web3Provider)
  startContractListeners(gsnProvider)
})()
