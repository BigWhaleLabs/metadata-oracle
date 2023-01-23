import providers from '@/helpers/provider'

export default function getProvider(chainId: number) {
  switch (chainId) {
    case 1:
      return providers.mainnetProvider
    case 5:
      return providers.goerliProvider
    case 137:
      return providers.polygonProvider
    case 80001:
      return providers.polygonTestnetProvider
    case 42161:
      return providers.arbitrumProvider
    case 421613:
      return providers.arbitrumTestnetProvider
    case 10:
      return providers.optimismProvider
    case 420:
      return providers.optimismTestnetProvider
    default:
      return providers.mainnetProvider
  }
}
