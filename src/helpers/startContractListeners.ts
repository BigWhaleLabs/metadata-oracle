import { Signer } from 'ethers'
import getMetadataContract from '@/helpers/getMetadataContract'
import getTokenContract from '@/helpers/getTokenContract'

export default function (signer: Signer) {
  const metadataContract = getMetadataContract(signer)

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
