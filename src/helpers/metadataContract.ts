import { BWLMetadataLedger__factory } from '@big-whale-labs/bwl-metadata-bridge-contract'
import env from '@/helpers/env'
import signer from '@/helpers/signer'

export default BWLMetadataLedger__factory.connect(
  env.METADATA_CONTRACT_ADDRESS,
  signer
)
