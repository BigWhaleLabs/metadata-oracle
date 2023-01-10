import { Eip1193Bridge } from '@ethersproject/experimental'
import { JsonRpcProvider } from '@ethersproject/providers'
import { RelayProvider } from '@opengsn/provider'
import { WrapBridge } from '@opengsn/provider/dist/WrapContract'
import env from '@/helpers/env'

export default function relayProvider(provider: JsonRpcProvider) {
  return RelayProvider.newProvider({
    provider: new WrapBridge(new Eip1193Bridge(provider.getSigner(), provider)),
    config: {
      paymasterAddress: env.GSN_PAYMASTER_CONTRACT_ADDRESS,
      preferredRelays: [env.GSN_SC_RELAY],
      blacklistedRelays: ['https://goerli.v3.opengsn.org/v3'],
    },
  }).init()
}
