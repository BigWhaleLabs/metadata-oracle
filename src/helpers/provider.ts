import { providers } from 'ethers'
import env from '@/helpers/env'

const mainnetProvider = new providers.JsonRpcProvider(
  env.ETH_RPC_MAINNET,
  'mainnet'
)

const goerliProvider = new providers.JsonRpcProvider(
  env.ETH_RPC,
  env.ETH_NETWORK
)

export default {
  mainnetProvider,
  goerliProvider,
}
