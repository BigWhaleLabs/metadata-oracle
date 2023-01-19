import 'module-alias/register'
import 'source-map-support/register'

import startContractListeners from '@/helpers/startContractListeners'

void (() => {
  console.log('Listener started...')
  startContractListeners()
})()
