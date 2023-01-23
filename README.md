# Metadata Oracle

## Installation and local launch

1. Clone this repo: `git clone https://github.com/BigWhaleLabs/metadata-oracle`
2. Create `.env` with the environment variables listed below
3. Run `yarn` in the root folder
4. Run `yarn start`

And you should be good to go! Feel free to fork and submit pull requests.

## Environment variables

| Name                        | Description                                                |
| --------------------------- | ---------------------------------------------------------- |
| `PORT`                      | Port to run server on (defaults to 1337)                   |
| `ETH_NETWORK`               | Ethereum network (defaults to @bwl/constants)              |
| `ETH_RPC`                   | Ethereum node RPC URI (defaults to @bwl/constants)         |
| `ETH_RPC_MAINNET`           | Ethereum mainnet node RPC URI (defaults to @bwl/constants) |
| `METADATA_CONTRACT_ADDRESS` | MetadataLedger contract address                            |
| `SIGNER_PRIVATE_KEY`        | Account prevate key                                        |

Also, please, consider looking at `.env.sample`.
