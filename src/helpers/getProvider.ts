import providers from '@/helpers/provider'

export default function getProvider(chainId: number) {
  switch (chainId) {
    case 1:
      return providers.mainnetProvider
    case 5:
      return providers.goerliProvider
    default:
      return providers.mainnetProvider
  }
}
