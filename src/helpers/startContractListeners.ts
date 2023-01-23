import getProvider from '@/helpers/getProvider'
import getTokenContract from '@/helpers/getTokenContract'
import metadataContract from '@/helpers/metadataContract'

export default function () {
  metadataContract.on('RequestMetadata', async (chainId, tokenAddress) => {
    try {
      console.log('chainId', chainId)
      console.log('tokenAddress', tokenAddress)

      const provider = getProvider(chainId)
      metadataContract.connect(provider)

      const tokenContract = getTokenContract(tokenAddress, provider)

      const name = await tokenContract.name()
      const symbol = await tokenContract.symbol()

      console.log(name, symbol)

      const tx = await metadataContract.storeMetadata(chainId, tokenAddress, {
        tokenAddress,
        name,
        symbol,
      })

      const reciept = await tx.wait()
      console.log(reciept.status)
    } catch (error) {
      console.log(error)
    }
  })
}
