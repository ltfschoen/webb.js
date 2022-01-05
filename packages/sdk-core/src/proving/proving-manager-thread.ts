import type { JsNote, Leaves, Proof, ProofInput } from "@webb-tools/wasm-utils";
import { u8aToHex } from "@polkadot/util";
import { ProofI } from "@webb-tools/sdk-core/proving/proving-manger";
import { Note } from "../note";


export type ProvingManagerSetupInput = {
  note: string;
  relayer: string;
  recipient: string;
  leaves: Leaves;
  leafIndex: number;
  fee: number;
  refund: number;
  provingKey: Uint8Array;
};

type PMEvents = {
  proof: ProvingManagerSetupInput;
  destroy: undefined;
};

export class ProvingManagerWrapper {
  constructor() {
    self.addEventListener("message", async (event) => {
      const message = event.data as Partial<PMEvents>;
      const key = Object.keys(message)[0] as keyof PMEvents;
      switch (key) {
        case "proof": {
          const input = message.proof!;
          const proof = await this.proof(input);
          (self as unknown as Worker).postMessage({
            name: key,
            data: proof
          });
        }
          break;
        case "destroy":
          (self as unknown as Worker).terminate();
          break;
      }
    });
  }

  private static get proofBuilder() {
    return import("@webb-tools/wasm-utils").then((wasm) => {
      return wasm.JsProofInputBuilder;
    });
  }

  private static async generateProof(jsNote: JsNote, proofInput: ProofInput): Promise<Proof> {
    const wasm = await import("@webb-tools/wasm-utils");
    return wasm.generate_proof_js(jsNote, proofInput);

  }

  async proof(pmSetupInput: ProvingManagerSetupInput): Promise<ProofI> {
    const Manager = await ProvingManagerWrapper.proofBuilder;
    const pm = new Manager();
    const { note } = await Note.deserialize(pmSetupInput.note);
    pm.setLeaves(pmSetupInput.leaves);
    pm.setRelayer(pmSetupInput.relayer);
    pm.setRecipient(pmSetupInput.recipient);
    pm.setLeafIndex(String(pmSetupInput.leafIndex));
    pm.setFee(String(pmSetupInput.fee));
    pm.setRefund(String(pmSetupInput.refund));
    pm.setPk(u8aToHex(pmSetupInput.provingKey).replace("0x", ""));
    const proofInput = pm.build_js();
    const proof = await ProvingManagerWrapper.generateProof(note, proofInput);
    return {
      proof: proof.proof,
      root: proof.root,
      nullifierHash: proof.nullifierHash
    };
  }
}
