import '@rainbow-me/rainbowkit/styles.css'
import '../styles/globals.css'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'

import { chains, client } from '../wagmi'

import { Header } from '@/components/Header'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'


function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <NextHead>
          <title>MORTAL DAPP Template</title>
          <link rel="shortcut icon" href="favicon.ico" />
        </NextHead>
        <Header />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
