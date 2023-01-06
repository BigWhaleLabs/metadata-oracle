import { Wallet } from 'ethers'
import env from '@/helpers/env'
import provider from '@/helpers/provider'

export default new Wallet(env.SIGNER_PRIVATE_KEY).connect(provider)
