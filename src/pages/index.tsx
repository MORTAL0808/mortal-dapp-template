import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

import { Account } from '../components'

function Home() {
  const { isConnected } = useAccount()
  return (
    <>
      
    </>
  )
}

export default Home
