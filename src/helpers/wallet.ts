import { Wallet } from 'ethers'
import env from '@/helpers/env'

export default new Wallet(env.SIGNER_PRIVATE_KEY)
