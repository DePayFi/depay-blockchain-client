import { 
  getProvider as getEthereumProvider,
  setProviderEndpoints as setEthereumProviderEndpoints,
  setProvider as setEthereumProvider,
} from './blockchains/ethereum/provider'

import {
  getProvider as getBscProvider,
  setProviderEndpoints as setBscProviderEndpoints,
  setProvider as setBscProvider,
} from './blockchains/bsc/provider'

import {
  getProvider as getPolygonProvider,
  setProviderEndpoints as setPolygonProviderEndpoints,
  setProvider as setPolygonProvider,
} from './blockchains/polygon/provider'

import {
  getProvider as getSolanaProvider,
  setProviderEndpoints as setSolanaProviderEndpoints,
  setProvider as setSolanaProvider,
} from './blockchains/solana/provider'

const getProvider = (blockchain)=>{

  switch (blockchain) {
    
    case 'ethereum':
      return getEthereumProvider()
      break

    case 'bsc':
      return getBscProvider()
      break

    case 'polygon':
      return getPolygonProvider()
      break

    case 'solana':
      return getSolanaProvider();
      break
    
    default:
      throw 'Unknown blockchain: ' + blockchain
  }
}

const setProvider = (blockchain, provider)=>{

  switch (blockchain) {
    
    case 'ethereum':
      return setEthereumProvider(provider)
      break

    case 'bsc':
      return setBscProvider(provider)
      break

    case 'polygon':
      return setPolygonProvider(provider)
      break

    case 'solana':
      return setSolanaProvider(provider)
      break
    
    default:
      throw 'Unknown blockchain: ' + blockchain
  }
}

const setProviderEndpoints = (blockchain, endpoints)=>{

  switch (blockchain) {
    
    case 'ethereum':
      return setEthereumProviderEndpoints(endpoints)
      break

    case 'bsc':
      return setBscProviderEndpoints(endpoints)
      break

    case 'polygon':
      return setPolygonProviderEndpoints(endpoints)
      break

    case 'solana':
      return setSolanaProviderEndpoints(endpoints)
      break
    
    default:
      throw 'Unknown blockchain: ' + blockchain
  }
}

export {
  getProvider,
  setProvider,
  setProviderEndpoints,
}
