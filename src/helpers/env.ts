import * as dotenv from 'dotenv'
import {
  ETH_NETWORK,
  ETH_RPC_MAINNET,
  METADATA_LEDGER_CONTRACT_ADDRESS,
} from '@big-whale-labs/constants'
import { cleanEnv, str } from 'envalid'
import { cwd } from 'process'
import { resolve } from 'path'

dotenv.config({ path: resolve(cwd(), '.env') })

// eslint-disable-next-line node/no-process-env
export default cleanEnv(process.env, {
  ARBITRUM_RPC: str(),
  ARBITRUM_TESTNET_RPC: str(),
  ETH_NETWORK: str({ default: ETH_NETWORK }),
  ETH_RPC: str({ default: ETH_RPC_MAINNET }),
  GOERLI_RPC: str(),
  METADATA_CONTRACT_ADDRESS: str({ default: METADATA_LEDGER_CONTRACT_ADDRESS }),
  OPTIMISM_RPC: str(),
  OPTIMISM_TESTNET_RPC: str(),
  POLYGON_RPC: str(),
  POLYGON_TESTNET_RPC: str(),
  SIGNER_PRIVATE_KEY: str(),
})
