import { providers, Signer } from 'ethers';
/**
 * TDB
 */
export interface LSPFactoryOptions {
  provider: providers.Web3Provider | providers.JsonRpcProvider;
  chainId: number;
  signer: Signer;
}

export interface SignerOptions {
  deployKey: string;
  uploadGateway?: string; // TODO: implement
  chainId: number;
}
