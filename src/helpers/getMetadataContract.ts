import { BWLMetadataLedger__factory } from '@big-whale-labs/bwl-metadata-bridge-contract'
import { Signer } from 'ethers'
import env from '@/helpers/env'

export default function getMetadataContract(signer: Signer) {
  return BWLMetadataLedger__factory.connect(
    env.METADATA_CONTRACT_ADDRESS,
    signer
  )
}
