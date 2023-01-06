import { Wallet } from 'ethers'
import provider from '@/helpers/provider'

export default new Wallet('').connect(provider)
