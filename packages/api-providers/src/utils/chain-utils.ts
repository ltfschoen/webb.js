// Copyright 2022 @webb-tools/
// SPDX-License-Identifier: Apache-2.0

import { AppConfig } from '@webb-tools/api-providers';

import { ChainTypeId, chainTypeIdToInternalId, InternalChainId } from '../chains';
import { WebbError, WebbErrorCodes } from '../webb-error';

export const getEVMChainName = (config: AppConfig, evmId: number): string => {
  const chain = Object.values(config.chains).find((chainsConfig) => chainsConfig.chainId === evmId);

  if (chain) {
    return chain.name;
  } else {
    throw WebbError.from(WebbErrorCodes.UnsupportedChain);
  }
};

export const chainNameFromInternalId = (config: AppConfig, internalId: InternalChainId): string => {
  const chain = config.chains[internalId];

  return chain.name;
};

export const getChainNameFromChainId = (config: AppConfig, chainIdType: ChainTypeId): string => {
  const internalId = chainTypeIdToInternalId(chainIdType);

  return chainNameFromInternalId(config, internalId);
};

export const getEVMChainNameFromInternal = (config: AppConfig, chainID: number): string => {
  const chain = Object.values(config.chains).find((chainsConfig) => chainsConfig.id === chainID);

  if (chain) {
    return chain.name;
  } else {
    throw WebbError.from(WebbErrorCodes.UnsupportedChain);
  }
};

export const getNativeCurrencySymbol = (config: AppConfig, evmId: number): string => {
  const chain = Object.values(config.chains).find((chainsConfig) => chainsConfig.chainId === evmId);

  if (chain) {
    const nativeCurrency = chain.nativeCurrencyId;

    return config.currencies[nativeCurrency].symbol;
  }

  return 'Unknown';
};