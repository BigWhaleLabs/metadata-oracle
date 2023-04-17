import { providers } from 'ethers'
import env from '@/helpers/env'

const mainnetProvider = new providers.JsonRpcProvider(env.ETH_RPC)
const goerliProvider = new providers.JsonRpcProvider(env.GOERLI_RPC)
const polygonProvider = new providers.JsonRpcProvider(env.POLYGON_RPC)
const polygonTestnetProvider = new providers.JsonRpcProvider(
  env.POLYGON_TESTNET_RPC
)
const arbitrumProvider = new providers.JsonRpcProvider(env.ARBITRUM_RPC)
const arbitrumTestnetProvider = new providers.JsonRpcProvider(
  env.ARBITRUM_TESTNET_RPC
)
const optimismProvider = new providers.JsonRpcProvider(env.OPTIMISM_RPC)
const optimismTestnetProvider = new providers.JsonRpcProvider(
  env.OPTIMISM_TESTNET_RPC
)

export default {
  arbitrumProvider,
  arbitrumTestnetProvider,
  goerliProvider,
  mainnetProvider,
  optimismProvider,
  optimismTestnetProvider,
  polygonProvider,
  polygonTestnetProvider,
}
