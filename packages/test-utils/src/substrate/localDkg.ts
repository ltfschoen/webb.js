/*
 * Copyright 2022 Webb Technologies Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
/// A Helper Class to Start and Manage a Local DKG Node.
/// This Could be through a Docker Container or a Local Compiled node.

import '@webb-tools/dkg-substrate-types';

import { spawn } from 'child_process';
import { ECPairAPI, ECPairFactory, TinySecp256k1Interface } from 'ecpair';
import * as TinySecp256k1 from 'tiny-secp256k1';

import { LocalNodeOpts, SubstrateNodeBase } from './substrateNodeBase.js';

/** The image url */
const DKG_STANDALONE_DOCKER_IMAGE_URL =
  'ghcr.io/webb-tools/dkg-standalone-node:edge';

/** Represents the LocalDkg Node that is to be spawned */
export class LocalDkg extends SubstrateNodeBase<TypedEvent> {
  public static async start (opts: LocalNodeOpts): Promise<LocalDkg> {
    opts.ports = await SubstrateNodeBase.makePorts(opts);
    const startArgs: string[] = [
      '-ldkg=debug',
      '-ldkg_metadata=debug',
      '-lruntime::offchain=debug',
      '-ldkg_proposal_handler=debug'
    ];

    if (opts.usageMode.mode === 'docker') {
      super.pullImage({
        forcePull: opts.usageMode.forcePullImage,
        image: DKG_STANDALONE_DOCKER_IMAGE_URL
      });
      const dockerArgs = [
        'run',
        '--rm',
        '--name',
        `${opts.authority}-node-${opts.ports.ws}`,
        '-p',
        `${opts.ports.ws}:9944`,
        '-p',
        `${opts.ports.http}:9933`,
        '-p',
        `${opts.ports.p2p}:30333`,
        DKG_STANDALONE_DOCKER_IMAGE_URL,
        'dkg-standalone-node',
        '--tmp',
        '--rpc-cors',
        'all',
        '--ws-external',
        '--rpc-methods=unsafe',
        `--${opts.authority}`,
        ...startArgs
      ];
      const proc = spawn('docker', dockerArgs);

      if (opts.enableLogging) {
        proc.stdout.on('data', (data: Buffer) => {
          console.log(data.toString());
        });
        proc.stderr.on('data', (data: Buffer) => {
          console.error(data.toString());
        });
      }

      return new LocalDkg(opts, proc);
    } else {
      startArgs.push(
        '--tmp',
        '--rpc-cors',
        'all',
        '--rpc-methods=unsafe',
        '--ws-external',
        `--ws-port=${opts.ports.ws}`,
        `--rpc-port=${opts.ports.http}`,
        `--port=${opts.ports.p2p}`,
        `--${opts.authority}`
      );
      const proc = spawn(opts.usageMode.nodePath, startArgs);

      if (opts.enableLogging) {
        proc.stdout.on('data', (data: Buffer) => {
          console.log(data.toString());
        });
        proc.stderr.on('data', (data: Buffer) => {
          console.error(data.toString());
        });
      }

      return new LocalDkg(opts, proc);
    }
  }

  /** Fetches the Dkg public key */
  public async fetchDkgPublicKey (): Promise<`0x${string}` | null> {
    const api = await super.api();
    const res = await api.query.dkg.dkgPublicKey();
    const json = res.toJSON() as [number, string];
    const tinysecp: TinySecp256k1Interface = TinySecp256k1;
    const ECPair: ECPairAPI = ECPairFactory(tinysecp);

    if (json && json[1] !== '0x') {
      const key = json[1];
      const dkgPubKey = ECPair.fromPublicKey(Buffer.from(key.slice(2), 'hex'), {
        compressed: false
      }).publicKey.toString('hex');

      // now we remove the `04` prefix byte and return it.
      return `0x${dkgPubKey.slice(2)}`;
    } else {
      return null;
    }
  }

  /** Gets the DKG Chain id */
  public async getChainId (): Promise<number> {
    const api = await super.api();
    const chainId = Number((await api.consts.dkgProposals.chainIdentifier).toString());

    return chainId;
  }
}

/** Represents the various event types */
export type TypedEvent =
  | NewSession
  | NextPublicKeySubmitted
  | NextPublicKeySignatureSubmitted
  | PublicKeySubmitted
  | PublicKeyChanged
  | PublicKeySignatureChanged
  | ProposalSigned;

type NewSession = { section: 'session'; method: 'NewSession' };
type NextPublicKeySubmitted = {
  section: 'dkg';
  method: 'NextPublicKeySubmitted';
};
type NextPublicKeySignatureSubmitted = {
  section: 'dkg';
  method: 'NextPublicKeySignatureSubmitted';
};
type PublicKeySubmitted = { section: 'dkg'; method: 'PublicKeySubmitted' };
type PublicKeyChanged = { section: 'dkg'; method: 'PublicKeyChanged' };
type PublicKeySignatureChanged = {
  section: 'dkg';
  method: 'PublicKeySignatureChanged';
};

type ProposalSigned = {
  section: 'dkgProposalHandler';
  method: 'ProposalSigned';
};
