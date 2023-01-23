import { Contract, providers } from 'ethers'

export default function (
  tokenAddress: string,
  provider: providers.JsonRpcProvider
) {
  const abi = [
    'function name() external view returns (string memory)',
    'function symbol() external view returns (string memory)',
  ]
  return new Contract(tokenAddress, abi, provider)
}
