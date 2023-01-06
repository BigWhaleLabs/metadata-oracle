import { Contract } from 'ethers'
import provider from '@/helpers/provider'

export default function (tokenAddress: string) {
  const abi = [
    'function name() external view returns (string memory)',
    'function symbol() external view returns (string memory)',
  ]
  return new Contract(tokenAddress, abi, provider)
}
