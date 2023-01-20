import { Wallet } from 'ethers'
import env from '@/helpers/env'
import getProvider from '@/helpers/getProvider'

const goerliProvider = getProvider(5)

export default new Wallet(env.SIGNER_PRIVATE_KEY).connect(goerliProvider)
