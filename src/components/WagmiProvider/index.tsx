import * as React from 'react';
import { WagmiConfig } from 'wagmi';
import {
    getDefaultWallets,
    createAuthenticationAdapter,
    RainbowKitAuthenticationProvider,
    RainbowKitProvider,
  } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { defaultChains, defaultTestChains } from '@/config/chain';
import { SiweMessage } from 'siwe';

const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const response = await fetch('/api/nonce');
    return await response.text();
  },
  createMessage: ({ nonce, address, chainId }) => {
    return new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in with Ethereum to the app.',
      uri: window.location.origin,
      version: '1',
      chainId,
      nonce,
    });
  },
  getMessageBody: ({ message }) => {
    return message.prepareMessage();
  },
  verify: async ({ message, signature }) => {
    const verifyRes = await fetch('/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, signature }),
    });
    return Boolean(verifyRes.ok);
  },
  signOut: async () => {
    await fetch('/api/logout');
  },
});

const { chains, provider, webSocketProvider } = configureChains([...(process.env.isProd ? defaultTestChains : defaultChains)], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'Mortal Dapp',
  chains
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
});

function WagmiProvider({ children, pageProps }) {
    
  const { AUTHENTICATION_STATUS } = pageProps;
  return (
    <WagmiConfig client={client}>
        <RainbowKitAuthenticationProvider adapter={authenticationAdapter}
        status={AUTHENTICATION_STATUS}>
          <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
        </RainbowKitAuthenticationProvider>
    </WagmiConfig>
  );
}

export default WagmiProvider;
