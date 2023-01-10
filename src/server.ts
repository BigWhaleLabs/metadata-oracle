import 'module-alias/register'
import 'source-map-support/register'

import { ExternalProvider, Web3Provider } from '@ethersproject/providers'
import provider from '@/helpers/provider'
import relayProvider from '@/helpers/relayProvider'
import runApp from '@/helpers/runApp'
import startContractListeners from '@/helpers/startContractListeners'
import wallet from '@/helpers/wallet'

void (async () => {
  await runApp()
  const gsnProvider = await relayProvider(provider)
  gsnProvider.addAccount(wallet.privateKey)
  const ethersProvider = new Web3Provider(
    gsnProvider as unknown as ExternalProvider
  )
  const signer = ethersProvider.getSigner(wallet.address)

  startContractListeners(signer)
})()
