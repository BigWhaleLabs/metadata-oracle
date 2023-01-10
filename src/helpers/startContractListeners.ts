import getTokenContract from '@/helpers/getTokenContract'
import metadataContract from '@/helpers/metadataContract'

export default function (provider?: any) {
  metadataContract.connect(provider)
  metadataContract.on('RequestMetadata', async (chainId, tokenAddress) => {
    try {
      const tokenContract = getTokenContract(tokenAddress)

      const name = await tokenContract.name()
      const symbol = await tokenContract.symbol()

      const tx = await metadataContract.storeMetadata(chainId, tokenAddress, {
        tokenAddress,
        name,
        symbol,
      })

      await tx.wait()
    } catch (error) {
      console.log(error)
    }
  })
}
