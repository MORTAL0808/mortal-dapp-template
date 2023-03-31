import NextHead from 'next/head'
import React, {useEffect} from 'react'
import type { AppProps } from 'next/app'
import { themeChange } from 'theme-change'
import { Header } from '@/components/Header'
import WagmiProvider from '@/components/WagmiProvider'


import '@rainbow-me/rainbowkit/styles.css'
import '@/styles/globals.css'
import { LazyMotion, m } from "framer-motion"



function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <WagmiProvider pageProps={pageProps}>
      <NextHead>
        <title>MORTAL DAPP Template</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </NextHead>
      <Header />
      <m.div className="main-container" layout>
        <Component {...pageProps} />
      </m.div>
    </WagmiProvider>
  )
}

export default App
