/// A Helper Class to Start and Manage a Local Protocol Substrate Node.
/// This Could be through a Docker Container or a Local Compiled node.

import { spawn } from 'child_process';

import { LocalNodeOpts, SubstrateNodeBase } from './substrateNodeBase.js';

const STANDALONE_DOCKER_IMAGE_URL =
  'ghcr.io/webb-tools/protocol-substrate-standalone-node:edge';

export class LocalProtocolSubstrate extends SubstrateNodeBase<TypedEvent> {
  public static async start (
    opts: LocalNodeOpts
  ): Promise<LocalProtocolSubstrate> {
    opts.ports = await super.makePorts(opts);
    const startArgs: string[] = [];

    if (opts.usageMode.mode === 'docker') {
      LocalProtocolSubstrate.pullImage({
        forcePull: opts.usageMode.forcePullImage,
        image: STANDALONE_DOCKER_IMAGE_URL
      });
      startArgs.push(
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
        STANDALONE_DOCKER_IMAGE_URL,
        'webb-standalone-node',
        '--tmp',
        '--rpc-cors',
        'all',
        '--ws-external',
        '--rpc-methods=unsafe',
        `--${opts.authority}`
      );

      if (!opts.isManual) {
        const proc = spawn('docker', startArgs, {});

        if (opts.enableLogging) {
          proc.stdout.on('data', (data: Buffer) => {
            console.log(data.toString());
          });
          proc.stderr.on('data', (data: Buffer) => {
            console.error(data.toString());
          });
        }

        return new LocalProtocolSubstrate(opts, proc);
      }

      return new LocalProtocolSubstrate(opts);
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

      return new LocalProtocolSubstrate(opts, proc);
    }
  }

  // get chainId
  public async getChainId (): Promise<number> {
    const api = await super.api();
    const chainId = api.consts.linkableTreeBn254.chainIdentifier.toNumber();

    return chainId;
  }
}

export type TypedEvent = MixerBn254DepositEvent | MixerBn254WithdrawEvent;

type MixerBn254DepositEvent = { section: 'mixerBn254'; method: 'Deposit' };
type MixerBn254WithdrawEvent = { section: 'mixerBn254'; method: 'Withdraw' };
