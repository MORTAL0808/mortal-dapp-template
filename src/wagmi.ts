import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient } from 'wagmi'
import { Chain, goerli, mainnet, arbitrum, arbitrumGoerli, polygon, polygonMumbai, bsc, bscTestnet, iotex, iotexTestnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const defaultChains: Chain[] = [mainnet, bsc, {...iotex, iconUrl: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/icon/iotx.svg'}, arbitrum, polygon];

const defaultTestChains: Chain[] = [goerli, bscTestnet, {...iotexTestnet, iconUrl: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/icon/iotx.svg'}, polygonMumbai, arbitrumGoerli];

const { chains, provider, webSocketProvider } = configureChains(
  [...(process.env.isProd ? defaultTestChains : defaultChains)],
  [
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'Mortal Dapp Templete',
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }
