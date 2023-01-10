import * as dotenv from 'dotenv'
import {
  ETH_RPC,
  GSN_PAYMASTER_CONTRACT_ADDRESS,
  GSN_SC_RELAY,
} from '@big-whale-labs/constants'
import { cleanEnv, num, str } from 'envalid'
import { cwd } from 'process'
import { resolve } from 'path'

dotenv.config({ path: resolve(cwd(), '.env') })

// eslint-disable-next-line node/no-process-env
export default cleanEnv(process.env, {
  PORT: num({ default: 1337 }),
  ETH_RPC: str({ default: ETH_RPC }),
  METADATA_CONTRACT_ADDRESS: str(),
  SIGNER_PRIVATE_KEY: str(),
  GSN_PAYMASTER_CONTRACT_ADDRESS: str({
    default: GSN_PAYMASTER_CONTRACT_ADDRESS,
  }),
  GSN_SC_RELAY: str({
    default: GSN_SC_RELAY,
  }),
})
