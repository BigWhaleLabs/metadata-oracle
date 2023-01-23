# Metadata Oracle

## Installation and local launch

1. Clone this repo: `git clone https://github.com/BigWhaleLabs/metadata-oracle`
2. Create `.env` with the environment variables listed below
3. Run `yarn` in the root folder
4. Run `yarn start`

And you should be good to go! Feel free to fork and submit pull requests.

## Environment variables

| Name                        | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| `METADATA_CONTRACT_ADDRESS` | MetadataLedger contract address (defaults to @bwl/constants)      |
| `SIGNER_PRIVATE_KEY`        | MetadataLedger owner private key                                  |
| `ETH_RPC`                   | Ethereum node RPC URI (defaults to @bwl/constants)                |
| `GOERLI_RPC`                | Ethereum testnet Goerli node RPC URI (defaults to @bwl/constants) |
| `POLYGON_RPC`               | Polygon mainnet node RPC URI                                      |
| `POLYGON_TESTNET_RPC`       | Polygon testnet node RPC URI                                      |
| `ARBITRUM_RPC`              | Arbitrum mainnet node RPC URI                                     |
| `ARBITRUM_TESTNET_RPC`      | Arbitrum testnet node RPC URI                                     |
| `OPTIMISM_RPC`              | Optimism mainnet node RPC URI                                     |
| `OPTIMISM_TESTNET_RPC`      | Optimism testnet node RPC URI                                     |

Also, please, consider looking at `.env.sample`.
