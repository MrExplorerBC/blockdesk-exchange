export const MINIMUM_USD=10_000;
export const assets={
 BTC:{name:'Bitcoin',network:'Bitcoin Mainnet',price:118000,confirmations:3},
 ETH:{name:'Ethereum',network:'Ethereum Mainnet · Chain 1',price:3700,confirmations:12},
 SOL:{name:'Solana',network:'Solana Mainnet',price:185,confirmations:32},
 BNB:{name:'BNB',network:'BNB Smart Chain · Chain 56',price:790,confirmations:15},
 POL:{name:'Polygon',network:'Polygon PoS · Chain 137',price:.55,confirmations:128}
} as const;
export const receiveAssets=['USDC','USDT','DAI','BTC','ETH'] as const;
