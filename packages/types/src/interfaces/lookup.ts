// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
  /**
   * Lookup7: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU64: {
    normal: 'u64',
    operational: 'u64',
    mandatory: 'u64'
  },
  /**
   * Lookup11: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup16: frame_system::EventRecord<tangle_standalone_runtime::Event, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup18: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup19: frame_support::weights::DispatchInfo
   **/
  FrameSupportWeightsDispatchInfo: {
    weight: 'u64',
    class: 'FrameSupportWeightsDispatchClass',
    paysFee: 'FrameSupportWeightsPays'
  },
  /**
   * Lookup20: frame_support::weights::DispatchClass
   **/
  FrameSupportWeightsDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup21: frame_support::weights::Pays
   **/
  FrameSupportWeightsPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup22: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError',
      Transactional: 'SpRuntimeTransactionalError'
    }
  },
  /**
   * Lookup23: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup24: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup25: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup26: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup27: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup31: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup32: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup33: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup34: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup37: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup38: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup39: pallet_indices::pallet::Event<T>
   **/
  PalletIndicesEvent: {
    _enum: {
      IndexAssigned: {
        who: 'AccountId32',
        index: 'u32',
      },
      IndexFreed: {
        index: 'u32',
      },
      IndexFrozen: {
        index: 'u32',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup40: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
        depositors: 'Vec<AccountId32>',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Executed: {
        refIndex: 'u32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      PreimageNoted: {
        proposalHash: 'H256',
        who: 'AccountId32',
        deposit: 'u128',
      },
      PreimageUsed: {
        proposalHash: 'H256',
        provider: 'AccountId32',
        deposit: 'u128',
      },
      PreimageInvalid: {
        proposalHash: 'H256',
        refIndex: 'u32',
      },
      PreimageMissing: {
        proposalHash: 'H256',
        refIndex: 'u32',
      },
      PreimageReaped: {
        proposalHash: 'H256',
        provider: 'AccountId32',
        deposit: 'u128',
        reaper: 'AccountId32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32',
      },
      ProposalCanceled: {
        propIndex: 'u32'
      }
    }
  },
  /**
   * Lookup42: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup43: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup45: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32'
      }
    }
  },
  /**
   * Lookup47: pallet_vesting::pallet::Event<T>
   **/
  PalletVestingEvent: {
    _enum: {
      VestingUpdated: {
        account: 'AccountId32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup48: pallet_ecdsa_claims::pallet::Event<T>
   **/
  PalletEcdsaClaimsEvent: {
    _enum: {
      Claimed: {
        who: 'AccountId32',
        ethereumAddress: 'PalletEcdsaClaimsEthereumAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup49: pallet_ecdsa_claims::EthereumAddress
   **/
  PalletEcdsaClaimsEthereumAddress: '[u8;20]',
  /**
   * Lookup51: pallet_elections_phragmen::pallet::Event<T>
   **/
  PalletElectionsPhragmenEvent: {
    _enum: {
      NewTerm: {
        newMembers: 'Vec<(AccountId32,u128)>',
      },
      EmptyTerm: 'Null',
      ElectionError: 'Null',
      MemberKicked: {
        member: 'AccountId32',
      },
      Renounced: {
        candidate: 'AccountId32',
      },
      CandidateSlashed: {
        candidate: 'AccountId32',
        amount: 'u128',
      },
      SeatHolderSlashed: {
        seatHolder: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup54: pallet_election_provider_multi_phase::pallet::Event<T>
   **/
  PalletElectionProviderMultiPhaseEvent: {
    _enum: {
      SolutionStored: {
        electionCompute: 'PalletElectionProviderMultiPhaseElectionCompute',
        prevEjected: 'bool',
      },
      ElectionFinalized: {
        electionCompute: 'Option<PalletElectionProviderMultiPhaseElectionCompute>',
      },
      Rewarded: {
        account: 'AccountId32',
        value: 'u128',
      },
      Slashed: {
        account: 'AccountId32',
        value: 'u128',
      },
      SignedPhaseStarted: {
        round: 'u32',
      },
      UnsignedPhaseStarted: {
        round: 'u32'
      }
    }
  },
  /**
   * Lookup55: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Fallback', 'Emergency']
  },
  /**
   * Lookup57: pallet_staking::pallet::pallet::Event<T>
   **/
  PalletStakingPalletEvent: {
    _enum: {
      EraPaid: '(u32,u128,u128)',
      Rewarded: '(AccountId32,u128)',
      Slashed: '(AccountId32,u128)',
      OldSlashingReportDiscarded: 'u32',
      StakersElected: 'Null',
      Bonded: '(AccountId32,u128)',
      Unbonded: '(AccountId32,u128)',
      Withdrawn: '(AccountId32,u128)',
      Kicked: '(AccountId32,AccountId32)',
      StakingElectionFailed: 'Null',
      Chilled: 'AccountId32',
      PayoutStarted: '(u32,AccountId32)',
      ValidatorPrefsSet: '(AccountId32,PalletStakingValidatorPrefs)'
    }
  },
  /**
   * Lookup58: pallet_staking::ValidatorPrefs
   **/
  PalletStakingValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup61: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup62: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32'
      }
    }
  },
  /**
   * Lookup63: pallet_bounties::pallet::Event<T, I>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup64: pallet_child_bounties::pallet::Event<T>
   **/
  PalletChildBountiesEvent: {
    _enum: {
      Added: {
        index: 'u32',
        childIndex: 'u32',
      },
      Awarded: {
        index: 'u32',
        childIndex: 'u32',
        beneficiary: 'AccountId32',
      },
      Claimed: {
        index: 'u32',
        childIndex: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      Canceled: {
        index: 'u32',
        childIndex: 'u32'
      }
    }
  },
  /**
   * Lookup65: pallet_bags_list::pallet::Event<T, I>
   **/
  PalletBagsListEvent: {
    _enum: {
      Rebagged: {
        who: 'AccountId32',
        from: 'u64',
        to: 'u64',
      },
      ScoreUpdated: {
        who: 'AccountId32',
        newScore: 'u64'
      }
    }
  },
  /**
   * Lookup66: pallet_nomination_pools::pallet::Event<T>
   **/
  PalletNominationPoolsEvent: {
    _enum: {
      Created: {
        depositor: 'AccountId32',
        poolId: 'u32',
      },
      Bonded: {
        member: 'AccountId32',
        poolId: 'u32',
        bonded: 'u128',
        joined: 'bool',
      },
      PaidOut: {
        member: 'AccountId32',
        poolId: 'u32',
        payout: 'u128',
      },
      Unbonded: {
        member: 'AccountId32',
        poolId: 'u32',
        balance: 'u128',
        points: 'u128',
        era: 'u32',
      },
      Withdrawn: {
        member: 'AccountId32',
        poolId: 'u32',
        balance: 'u128',
        points: 'u128',
      },
      Destroyed: {
        poolId: 'u32',
      },
      StateChanged: {
        poolId: 'u32',
        newState: 'PalletNominationPoolsPoolState',
      },
      MemberRemoved: {
        poolId: 'u32',
        member: 'AccountId32',
      },
      RolesUpdated: {
        root: 'Option<AccountId32>',
        stateToggler: 'Option<AccountId32>',
        nominator: 'Option<AccountId32>',
      },
      PoolSlashed: {
        poolId: 'u32',
        balance: 'u128',
      },
      UnbondingPoolSlashed: {
        poolId: 'u32',
        era: 'u32',
        balance: 'u128'
      }
    }
  },
  /**
   * Lookup67: pallet_nomination_pools::PoolState
   **/
  PalletNominationPoolsPoolState: {
    _enum: ['Open', 'Blocked', 'Destroying']
  },
  /**
   * Lookup68: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<Bytes>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallLookupFailed: {
        task: '(u32,u32)',
        id: 'Option<Bytes>',
        error: 'FrameSupportScheduleLookupError'
      }
    }
  },
  /**
   * Lookup71: frame_support::traits::schedule::LookupError
   **/
  FrameSupportScheduleLookupError: {
    _enum: ['Unknown', 'BadFormat']
  },
  /**
   * Lookup72: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup73: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup75: pallet_dkg_metadata::pallet::Event<T>
   **/
  PalletDkgMetadataEvent: {
    _enum: {
      PublicKeySubmitted: {
        compressedPubKey: 'Bytes',
        uncompressedPubKey: 'Bytes',
      },
      NextPublicKeySubmitted: {
        compressedPubKey: 'Bytes',
        uncompressedPubKey: 'Bytes',
      },
      NextPublicKeySignatureSubmitted: {
        pubKeySig: 'Bytes',
      },
      PublicKeyChanged: {
        compressedPubKey: 'Bytes',
        uncompressedPubKey: 'Bytes',
      },
      PublicKeySignatureChanged: {
        pubKeySig: 'Bytes',
      },
      MisbehaviourReportsSubmitted: {
        misbehaviourType: 'DkgRuntimePrimitivesMisbehaviourType',
        reporters: 'Vec<DkgRuntimePrimitivesCryptoPublic>',
      },
      RefreshKeysFinished: {
        nextAuthoritySetId: 'u64'
      }
    }
  },
  /**
   * Lookup76: dkg_runtime_primitives::MisbehaviourType
   **/
  DkgRuntimePrimitivesMisbehaviourType: {
    _enum: ['Keygen', 'Sign']
  },
  /**
   * Lookup78: dkg_runtime_primitives::crypto::Public
   **/
  DkgRuntimePrimitivesCryptoPublic: 'SpCoreEcdsaPublic',
  /**
   * Lookup79: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup81: pallet_dkg_proposals::pallet::Event<T>
   **/
  PalletDkgProposalsEvent: {
    _enum: {
      ProposerThresholdChanged: {
        newThreshold: 'u32',
      },
      ChainWhitelisted: {
        chainId: 'WebbProposalsHeaderTypedChainId',
      },
      ProposerAdded: {
        proposerId: 'AccountId32',
      },
      ProposerRemoved: {
        proposerId: 'AccountId32',
      },
      VoteFor: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
        who: 'AccountId32',
      },
      VoteAgainst: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
        who: 'AccountId32',
      },
      ProposalApproved: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
      },
      ProposalRejected: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
      },
      ProposalSucceeded: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
      },
      ProposalFailed: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
      },
      AuthorityProposersReset: {
        proposers: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup82: webb_proposals::header::TypedChainId
   **/
  WebbProposalsHeaderTypedChainId: {
    _enum: {
      None: 'Null',
      Evm: 'u32',
      Substrate: 'u32',
      PolkadotParachain: 'u32',
      KusamaParachain: 'u32',
      RococoParachain: 'u32',
      Cosmos: 'u32',
      Solana: 'u32',
      Ink: 'u32'
    }
  },
  /**
   * Lookup84: pallet_dkg_proposal_handler::pallet::Event<T>
   **/
  PalletDkgProposalHandlerEvent: {
    _enum: {
      InvalidProposalSignature: {
        kind: 'WebbProposalsProposalProposalKind',
        data: 'Bytes',
        invalidSignature: 'Bytes',
        expectedPublicKey: 'Option<Bytes>',
        actualPublicKey: 'Option<Bytes>',
      },
      ProposalSigned: {
        key: 'DkgRuntimePrimitivesProposalDkgPayloadKey',
        targetChain: 'WebbProposalsHeaderTypedChainId',
        data: 'Bytes',
        signature: 'Bytes'
      }
    }
  },
  /**
   * Lookup85: webb_proposals::proposal::ProposalKind
   **/
  WebbProposalsProposalProposalKind: {
    _enum: ['Refresh', 'ProposerSetUpdate', 'EVM', 'AnchorCreate', 'AnchorUpdate', 'TokenAdd', 'TokenRemove', 'WrappingFeeUpdate', 'ResourceIdUpdate', 'RescueTokens', 'MaxDepositLimitUpdate', 'MinWithdrawalLimitUpdate', 'SetVerifier', 'SetTreasuryHandler', 'FeeRecipientUpdate']
  },
  /**
   * Lookup86: dkg_runtime_primitives::proposal::DKGPayloadKey
   **/
  DkgRuntimePrimitivesProposalDkgPayloadKey: {
    _enum: {
      EVMProposal: 'u32',
      RefreshVote: 'u32',
      ProposerSetUpdateProposal: 'u32',
      AnchorCreateProposal: 'u32',
      AnchorUpdateProposal: 'u32',
      TokenAddProposal: 'u32',
      TokenRemoveProposal: 'u32',
      WrappingFeeUpdateProposal: 'u32',
      ResourceIdUpdateProposal: 'u32',
      RescueTokensProposal: 'u32',
      MaxDepositLimitUpdateProposal: 'u32',
      MinWithdrawalLimitUpdateProposal: 'u32',
      SetVerifierProposal: 'u32',
      SetTreasuryHandlerProposal: 'u32',
      FeeRecipientUpdateProposal: 'u32'
    }
  },
  /**
   * Lookup87: pallet_hasher::pallet::Event<T, I>
   **/
  PalletHasherEvent: 'Null',
  /**
   * Lookup88: pallet_asset_registry::pallet::Event<T>
   **/
  PalletAssetRegistryEvent: {
    _enum: {
      Registered: {
        assetId: 'u32',
        name: 'Bytes',
        assetType: 'PalletAssetRegistryAssetType',
      },
      Updated: {
        assetId: 'u32',
        name: 'Bytes',
        assetType: 'PalletAssetRegistryAssetType',
      },
      MetadataSet: {
        assetId: 'u32',
        symbol: 'Bytes',
        decimals: 'u8',
      },
      LocationSet: {
        assetId: 'u32',
        location: 'u32'
      }
    }
  },
  /**
   * Lookup90: pallet_asset_registry::types::AssetType<AssetId>
   **/
  PalletAssetRegistryAssetType: {
    _enum: {
      Token: 'Null',
      PoolShare: 'Vec<u32>'
    }
  },
  /**
   * Lookup92: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'u32',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'u32',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'u32',
        who: 'AccountId32',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'u32',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup94: pallet_token_wrapper::pallet::Event<T>
   **/
  PalletTokenWrapperEvent: {
    _enum: {
      WrappedToken: {
        poolShareAsset: 'u32',
        assetId: 'u32',
        amount: 'u128',
        recipient: 'AccountId32',
      },
      UnwrappedToken: {
        poolShareAsset: 'u32',
        assetId: 'u32',
        amount: 'u128',
        recipient: 'AccountId32',
      },
      UpdatedWrappingFeePercent: {
        intoPoolShareId: 'u32',
        wrappingFeePercent: 'u128'
      }
    }
  },
  /**
   * Lookup95: pallet_verifier::pallet::Event<T, I>
   **/
  PalletVerifierEvent: 'Null',
  /**
   * Lookup96: pallet_mt::pallet::Event<T, I>
   **/
  PalletMtEvent: {
    _enum: {
      TreeCreation: {
        treeId: 'u32',
        who: 'AccountId32',
      },
      LeafInsertion: {
        treeId: 'u32',
        leafIndex: 'u32',
        leaf: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement'
      }
    }
  },
  /**
   * Lookup97: tangle_standalone_runtime::protocol_substrate_config::Element
   **/
  TangleStandaloneRuntimeProtocolSubstrateConfigElement: '[u8;32]',
  /**
   * Lookup98: pallet_linkable_tree::pallet::Event<T, I>
   **/
  PalletLinkableTreeEvent: {
    _enum: {
      LinkableTreeCreation: {
        treeId: 'u32'
      }
    }
  },
  /**
   * Lookup99: pallet_mixer::pallet::Event<T, I>
   **/
  PalletMixerEvent: {
    _enum: {
      MixerCreation: {
        treeId: 'u32',
      },
      Deposit: {
        treeId: 'u32',
        leaf: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement',
      },
      Withdraw: {
        treeId: 'u32',
        recipient: 'AccountId32'
      }
    }
  },
  /**
   * Lookup100: pallet_signature_bridge::pallet::Event<T, I>
   **/
  PalletSignatureBridgeEvent: {
    _enum: {
      MaintainerSet: {
        oldMaintainer: 'Bytes',
        newMaintainer: 'Bytes',
      },
      ChainWhitelisted: {
        chainId: 'u64',
      },
      ProposalApproved: {
        chainId: 'u64',
        proposalNonce: 'u32',
      },
      ProposalSucceeded: {
        chainId: 'u64',
        proposalNonce: 'u32',
      },
      ProposalFailed: {
        chainId: 'u64',
        proposalNonce: 'u32'
      }
    }
  },
  /**
   * Lookup102: pallet_vanchor::pallet::Event<T, I>
   **/
  PalletVanchorEvent: {
    _enum: {
      VAnchorCreation: {
        treeId: 'u32',
      },
      Transaction: {
        transactor: 'AccountId32',
        treeId: 'u32',
        leafs: 'Vec<TangleStandaloneRuntimeProtocolSubstrateConfigElement>',
        amount: 'i128',
      },
      Deposit: {
        depositor: 'AccountId32',
        treeId: 'u32',
        leaf: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement',
      },
      MaxDepositAmountChanged: {
        maxDepositAmount: 'u128',
      },
      MinWithdrawAmountChanged: {
        minWithdrawAmount: 'u128'
      }
    }
  },
  /**
   * Lookup105: pallet_vanchor_handler::pallet::Event<T, I>
   **/
  PalletVanchorHandlerEvent: {
    _enum: ['AnchorCreated', 'AnchorEdgeAdded', 'AnchorEdgeUpdated', 'ResourceAnchored']
  },
  /**
   * Lookup106: pallet_token_wrapper_handler::pallet::Event<T>
   **/
  PalletTokenWrapperHandlerEvent: {
    _enum: {
      UpdatedWrappingFeePercent: {
        wrappingFeePercent: 'u128'
      }
    }
  },
  /**
   * Lookup107: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup110: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup113: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup117: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'u64',
    maxBlock: 'u64',
    perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup118: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportWeightsPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup119: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'u64',
    maxExtrinsic: 'Option<u64>',
    maxTotal: 'Option<u64>',
    reserved: 'Option<u64>'
  },
  /**
   * Lookup121: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportWeightsPerDispatchClassU32'
  },
  /**
   * Lookup122: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup123: frame_support::weights::RuntimeDbWeight
   **/
  FrameSupportWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup124: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup129: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup130: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup132: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'u64',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup134: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup137: pallet_authorship::pallet::Call<T>
   **/
  PalletAuthorshipCall: {
    _enum: {
      set_uncles: {
        newUncles: 'Vec<SpRuntimeHeader>'
      }
    }
  },
  /**
   * Lookup139: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup140: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup141: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup142: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup143: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup144: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup145: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup146: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup147: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup150: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup151: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup153: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup154: pallet_indices::pallet::Call<T>
   **/
  PalletIndicesCall: {
    _enum: {
      claim: {
        index: 'u32',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId32',
        index: 'u32',
      },
      free: {
        index: 'u32',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId32',
        index: 'u32',
        freeze: 'bool',
      },
      freeze: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup155: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposalHash: 'H256',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
        secondsUpperBound: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposalHash: 'H256',
      },
      external_propose_majority: {
        proposalHash: 'H256',
      },
      external_propose_default: {
        proposalHash: 'H256',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      cancel_queued: {
        which: 'u32',
      },
      delegate: {
        to: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      note_preimage: {
        encodedProposal: 'Bytes',
      },
      note_preimage_operational: {
        encodedProposal: 'Bytes',
      },
      note_imminent_preimage: {
        encodedProposal: 'Bytes',
      },
      note_imminent_preimage_operational: {
        encodedProposal: 'Bytes',
      },
      reap_preimage: {
        proposalHash: 'H256',
        proposalLenUpperBound: 'Compact<u32>',
      },
      unlock: {
        target: 'AccountId32',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'AccountId32',
        index: 'u32',
      },
      enact_proposal: {
        proposalHash: 'H256',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup156: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup158: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'Compact<u64>',
        lengthBound: 'Compact<u32>',
      },
      disapprove_proposal: {
        proposalHash: 'H256'
      }
    }
  },
  /**
   * Lookup159: pallet_vesting::pallet::Call<T>
   **/
  PalletVestingCall: {
    _enum: {
      vest: 'Null',
      vest_other: {
        target: 'MultiAddress',
      },
      vested_transfer: {
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      force_vested_transfer: {
        source: 'MultiAddress',
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      merge_schedules: {
        schedule1Index: 'u32',
        schedule2Index: 'u32'
      }
    }
  },
  /**
   * Lookup160: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup161: pallet_ecdsa_claims::pallet::Call<T>
   **/
  PalletEcdsaClaimsCall: {
    _enum: {
      claim: {
        dest: 'AccountId32',
        ethereumSignature: 'PalletEcdsaClaimsEcdsaSignature',
      },
      mint_claim: {
        who: 'PalletEcdsaClaimsEthereumAddress',
        value: 'u128',
        vestingSchedule: 'Option<(u128,u128,u32)>',
        statement: 'Option<PalletEcdsaClaimsStatementKind>',
      },
      claim_attest: {
        dest: 'AccountId32',
        ethereumSignature: 'PalletEcdsaClaimsEcdsaSignature',
        statement: 'Bytes',
      },
      attest: {
        statement: 'Bytes',
      },
      move_claim: {
        _alias: {
          new_: 'new',
        },
        old: 'PalletEcdsaClaimsEthereumAddress',
        new_: 'PalletEcdsaClaimsEthereumAddress',
        maybePreclaim: 'Option<AccountId32>',
      },
      force_set_expiry_config: {
        expiryBlock: 'u32',
        dest: 'AccountId32'
      }
    }
  },
  /**
   * Lookup162: pallet_ecdsa_claims::EcdsaSignature
   **/
  PalletEcdsaClaimsEcdsaSignature: '[u8;65]',
  /**
   * Lookup167: pallet_ecdsa_claims::StatementKind
   **/
  PalletEcdsaClaimsStatementKind: {
    _enum: ['Regular', 'Saft']
  },
  /**
   * Lookup168: pallet_elections_phragmen::pallet::Call<T>
   **/
  PalletElectionsPhragmenCall: {
    _enum: {
      vote: {
        votes: 'Vec<AccountId32>',
        value: 'Compact<u128>',
      },
      remove_voter: 'Null',
      submit_candidacy: {
        candidateCount: 'Compact<u32>',
      },
      renounce_candidacy: {
        renouncing: 'PalletElectionsPhragmenRenouncing',
      },
      remove_member: {
        who: 'MultiAddress',
        slashBond: 'bool',
        rerunElection: 'bool',
      },
      clean_defunct_voters: {
        numVoters: 'u32',
        numDefunct: 'u32'
      }
    }
  },
  /**
   * Lookup169: pallet_elections_phragmen::Renouncing
   **/
  PalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: 'Null',
      RunnerUp: 'Null',
      Candidate: 'Compact<u32>'
    }
  },
  /**
   * Lookup170: pallet_election_provider_multi_phase::pallet::Call<T>
   **/
  PalletElectionProviderMultiPhaseCall: {
    _enum: {
      submit_unsigned: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
        witness: 'PalletElectionProviderMultiPhaseSolutionOrSnapshotSize',
      },
      set_minimum_untrusted_score: {
        maybeNextScore: 'Option<SpNposElectionsElectionScore>',
      },
      set_emergency_election_result: {
        supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      },
      submit: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
      },
      governance_fallback: {
        maybeMaxVoters: 'Option<u32>',
        maybeMaxTargets: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup171: pallet_election_provider_multi_phase::RawSolution<tangle_standalone_runtime::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseRawSolution: {
    solution: 'TangleStandaloneRuntimeNposSolution16',
    score: 'SpNposElectionsElectionScore',
    round: 'u32'
  },
  /**
   * Lookup172: tangle_standalone_runtime::NposSolution16
   **/
  TangleStandaloneRuntimeNposSolution16: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>'
  },
  /**
   * Lookup223: sp_npos_elections::ElectionScore
   **/
  SpNposElectionsElectionScore: {
    minimalStake: 'u128',
    sumStake: 'u128',
    sumStakeSquared: 'u128'
  },
  /**
   * Lookup224: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup228: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  SpNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup229: pallet_staking::pallet::pallet::Call<T>
   **/
  PalletStakingPalletCall: {
    _enum: {
      bond: {
        controller: 'MultiAddress',
        value: 'Compact<u128>',
        payee: 'PalletStakingRewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<u128>',
      },
      unbond: {
        value: 'Compact<u128>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'PalletStakingValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<MultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'PalletStakingRewardDestination',
      },
      set_controller: {
        controller: 'MultiAddress',
      },
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      force_unstake: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      rebond: {
        value: 'Compact<u128>',
      },
      set_history_depth: {
        newHistoryDepth: 'Compact<u32>',
        eraItemsDeleted: 'Compact<u32>',
      },
      reap_stash: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<MultiAddress>',
      },
      set_staking_configs: {
        minNominatorBond: 'PalletStakingPalletConfigOpU128',
        minValidatorBond: 'PalletStakingPalletConfigOpU128',
        maxNominatorCount: 'PalletStakingPalletConfigOpU32',
        maxValidatorCount: 'PalletStakingPalletConfigOpU32',
        chillThreshold: 'PalletStakingPalletConfigOpPercent',
        minCommission: 'PalletStakingPalletConfigOpPerbill',
      },
      chill_other: {
        controller: 'AccountId32',
      },
      force_apply_min_commission: {
        validatorStash: 'AccountId32'
      }
    }
  },
  /**
   * Lookup230: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PalletStakingRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup233: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup234: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup235: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PalletStakingPalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'Percent',
      Remove: 'Null'
    }
  },
  /**
   * Lookup236: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletStakingPalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup237: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'TangleStandaloneRuntimeOpaqueSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup238: tangle_standalone_runtime::opaque::SessionKeys
   **/
  TangleStandaloneRuntimeOpaqueSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public',
    grandpa: 'SpFinalityGrandpaAppPublic',
    dkg: 'DkgRuntimePrimitivesCryptoPublic'
  },
  /**
   * Lookup239: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup240: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup241: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup242: pallet_bounties::pallet::Call<T, I>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup243: pallet_child_bounties::pallet::Call<T>
   **/
  PalletChildBountiesCall: {
    _enum: {
      add_child_bounty: {
        parentBountyId: 'Compact<u32>',
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      propose_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      accept_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      unassign_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      award_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      close_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup244: pallet_bags_list::pallet::Call<T, I>
   **/
  PalletBagsListCall: {
    _enum: {
      rebag: {
        dislocated: 'AccountId32',
      },
      put_in_front_of: {
        lighter: 'AccountId32'
      }
    }
  },
  /**
   * Lookup245: pallet_nomination_pools::pallet::Call<T>
   **/
  PalletNominationPoolsCall: {
    _enum: {
      join: {
        amount: 'Compact<u128>',
        poolId: 'u32',
      },
      bond_extra: {
        extra: 'PalletNominationPoolsBondExtra',
      },
      claim_payout: 'Null',
      unbond: {
        memberAccount: 'AccountId32',
        unbondingPoints: 'Compact<u128>',
      },
      pool_withdraw_unbonded: {
        poolId: 'u32',
        numSlashingSpans: 'u32',
      },
      withdraw_unbonded: {
        memberAccount: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      create: {
        amount: 'Compact<u128>',
        root: 'AccountId32',
        nominator: 'AccountId32',
        stateToggler: 'AccountId32',
      },
      nominate: {
        poolId: 'u32',
        validators: 'Vec<AccountId32>',
      },
      set_state: {
        poolId: 'u32',
        state: 'PalletNominationPoolsPoolState',
      },
      set_metadata: {
        poolId: 'u32',
        metadata: 'Bytes',
      },
      set_configs: {
        minJoinBond: 'PalletNominationPoolsConfigOpU128',
        minCreateBond: 'PalletNominationPoolsConfigOpU128',
        maxPools: 'PalletNominationPoolsConfigOpU32',
        maxMembers: 'PalletNominationPoolsConfigOpU32',
        maxMembersPerPool: 'PalletNominationPoolsConfigOpU32',
      },
      update_roles: {
        poolId: 'u32',
        newRoot: 'PalletNominationPoolsConfigOpAccountId32',
        newNominator: 'PalletNominationPoolsConfigOpAccountId32',
        newStateToggler: 'PalletNominationPoolsConfigOpAccountId32',
      },
      chill: {
        poolId: 'u32'
      }
    }
  },
  /**
   * Lookup246: pallet_nomination_pools::BondExtra<Balance>
   **/
  PalletNominationPoolsBondExtra: {
    _enum: {
      FreeBalance: 'u128',
      Rewards: 'Null'
    }
  },
  /**
   * Lookup247: pallet_nomination_pools::ConfigOp<T>
   **/
  PalletNominationPoolsConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup248: pallet_nomination_pools::ConfigOp<T>
   **/
  PalletNominationPoolsConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup249: pallet_nomination_pools::ConfigOp<sp_core::crypto::AccountId32>
   **/
  PalletNominationPoolsConfigOpAccountId32: {
    _enum: {
      Noop: 'Null',
      Set: 'AccountId32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup250: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: 'Bytes',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      cancel_named: {
        id: 'Bytes',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      schedule_named_after: {
        id: 'Bytes',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed'
      }
    }
  },
  /**
   * Lookup252: frame_support::traits::schedule::MaybeHashed<tangle_standalone_runtime::Call, primitive_types::H256>
   **/
  FrameSupportScheduleMaybeHashed: {
    _enum: {
      Value: 'Call',
      Hash: 'H256'
    }
  },
  /**
   * Lookup253: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup254: pallet_dkg_metadata::pallet::Call<T>
   **/
  PalletDkgMetadataCall: {
    _enum: {
      set_signature_threshold: {
        newThreshold: 'u16',
      },
      set_keygen_threshold: {
        newThreshold: 'u16',
      },
      set_refresh_delay: {
        newDelay: 'u8',
      },
      submit_public_key: {
        keysAndSignatures: 'DkgRuntimePrimitivesAggregatedPublicKeys',
      },
      submit_next_public_key: {
        keysAndSignatures: 'DkgRuntimePrimitivesAggregatedPublicKeys',
      },
      submit_public_key_signature: {
        signatureProposal: 'DkgRuntimePrimitivesProposalRefreshProposalSigned',
      },
      submit_misbehaviour_reports: {
        reports: 'DkgRuntimePrimitivesAggregatedMisbehaviourReports',
      },
      unjail: 'Null',
      force_unjail_keygen: {
        authority: 'DkgRuntimePrimitivesCryptoPublic',
      },
      force_unjail_signing: {
        authority: 'DkgRuntimePrimitivesCryptoPublic',
      },
      manual_increment_nonce: 'Null',
      manual_refresh: 'Null',
      force_change_authorities: 'Null'
    }
  },
  /**
   * Lookup255: dkg_runtime_primitives::AggregatedPublicKeys
   **/
  DkgRuntimePrimitivesAggregatedPublicKeys: {
    keysAndSignatures: 'Vec<(Bytes,Bytes)>'
  },
  /**
   * Lookup256: dkg_runtime_primitives::proposal::RefreshProposalSigned
   **/
  DkgRuntimePrimitivesProposalRefreshProposalSigned: {
    nonce: 'u32',
    signature: 'Bytes'
  },
  /**
   * Lookup257: dkg_runtime_primitives::AggregatedMisbehaviourReports<dkg_runtime_primitives::crypto::Public>
   **/
  DkgRuntimePrimitivesAggregatedMisbehaviourReports: {
    misbehaviourType: 'DkgRuntimePrimitivesMisbehaviourType',
    roundId: 'u64',
    offender: 'DkgRuntimePrimitivesCryptoPublic',
    reporters: 'Vec<DkgRuntimePrimitivesCryptoPublic>',
    signatures: 'Vec<Bytes>'
  },
  /**
   * Lookup258: pallet_dkg_proposals::pallet::Call<T>
   **/
  PalletDkgProposalsCall: {
    _enum: {
      set_threshold: {
        threshold: 'u32',
      },
      set_resource: {
        id: 'WebbProposalsHeaderResourceId',
        method: 'Bytes',
      },
      remove_resource: {
        id: 'WebbProposalsHeaderResourceId',
      },
      whitelist_chain: {
        chainId: 'WebbProposalsHeaderTypedChainId',
      },
      add_proposer: {
        nativeAccount: 'AccountId32',
        externalAccount: 'Bytes',
      },
      remove_proposer: {
        v: 'AccountId32',
      },
      acknowledge_proposal: {
        nonce: 'u32',
        srcChainId: 'WebbProposalsHeaderTypedChainId',
        rId: 'WebbProposalsHeaderResourceId',
        prop: 'Bytes',
      },
      reject_proposal: {
        nonce: 'u32',
        srcChainId: 'WebbProposalsHeaderTypedChainId',
        rId: 'WebbProposalsHeaderResourceId',
        prop: 'Bytes',
      },
      eval_vote_state: {
        nonce: 'u32',
        srcChainId: 'WebbProposalsHeaderTypedChainId',
        prop: 'Bytes'
      }
    }
  },
  /**
   * Lookup259: webb_proposals::header::ResourceId
   **/
  WebbProposalsHeaderResourceId: '[u8;32]',
  /**
   * Lookup260: pallet_dkg_proposal_handler::pallet::Call<T>
   **/
  PalletDkgProposalHandlerCall: {
    _enum: {
      submit_signed_proposals: {
        props: 'Vec<WebbProposalsProposal>',
      },
      force_submit_unsigned_proposal: {
        prop: 'WebbProposalsProposal'
      }
    }
  },
  /**
   * Lookup262: webb_proposals::proposal::Proposal
   **/
  WebbProposalsProposal: {
    _enum: {
      Signed: {
        kind: 'WebbProposalsProposalProposalKind',
        data: 'Bytes',
        signature: 'Bytes',
      },
      Unsigned: {
        kind: 'WebbProposalsProposalProposalKind',
        data: 'Bytes'
      }
    }
  },
  /**
   * Lookup263: pallet_hasher::pallet::Call<T, I>
   **/
  PalletHasherCall: {
    _enum: {
      force_set_parameters: {
        parameters: 'Bytes'
      }
    }
  },
  /**
   * Lookup264: pallet_asset_registry::pallet::Call<T>
   **/
  PalletAssetRegistryCall: {
    _enum: {
      register: {
        name: 'Bytes',
        assetType: 'PalletAssetRegistryAssetType',
        existentialDeposit: 'u128',
      },
      update: {
        assetId: 'u32',
        name: 'Bytes',
        assetType: 'PalletAssetRegistryAssetType',
        existentialDeposit: 'Option<u128>',
      },
      set_metadata: {
        assetId: 'u32',
        symbol: 'Bytes',
        decimals: 'u8',
      },
      set_location: {
        assetId: 'u32',
        location: 'u32',
      },
      add_asset_to_pool: {
        pool: 'Bytes',
        assetId: 'u32',
      },
      delete_asset_from_pool: {
        pool: 'Bytes',
        assetId: 'u32'
      }
    }
  },
  /**
   * Lookup266: orml_currencies::module::Call<T>
   **/
  OrmlCurrenciesModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      transfer_native_currency: {
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      update_balance: {
        who: 'MultiAddress',
        currencyId: 'u32',
        amount: 'i128'
      }
    }
  },
  /**
   * Lookup267: orml_tokens::module::Call<T>
   **/
  OrmlTokensModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        currencyId: 'u32',
        keepAlive: 'bool',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        currencyId: 'u32',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup268: pallet_token_wrapper::pallet::Call<T>
   **/
  PalletTokenWrapperCall: {
    _enum: {
      set_wrapping_fee: {
        fee: 'u128',
        intoPoolShareId: 'u32',
        nonce: 'u32',
      },
      wrap: {
        fromAssetId: 'u32',
        intoPoolShareId: 'u32',
        amount: 'u128',
        recipient: 'AccountId32',
      },
      unwrap: {
        fromPoolShareId: 'u32',
        intoAssetId: 'u32',
        amount: 'u128',
        recipient: 'AccountId32'
      }
    }
  },
  /**
   * Lookup269: pallet_verifier::pallet::Call<T, I>
   **/
  PalletVerifierCall: {
    _enum: {
      force_set_parameters: {
        parameters: 'Bytes'
      }
    }
  },
  /**
   * Lookup270: pallet_mt::pallet::Call<T, I>
   **/
  PalletMtCall: {
    _enum: {
      create: {
        depth: 'u8',
      },
      insert: {
        treeId: 'u32',
        leaf: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement',
      },
      force_set_default_hashes: {
        defaultHashes: 'Vec<TangleStandaloneRuntimeProtocolSubstrateConfigElement>'
      }
    }
  },
  /**
   * Lookup271: pallet_linkable_tree::pallet::Call<T, I>
   **/
  PalletLinkableTreeCall: {
    _enum: {
      create: {
        maxEdges: 'u32',
        depth: 'u8'
      }
    }
  },
  /**
   * Lookup272: pallet_mixer::pallet::Call<T, I>
   **/
  PalletMixerCall: {
    _enum: {
      create: {
        depositSize: 'u128',
        depth: 'u8',
        asset: 'u32',
      },
      deposit: {
        treeId: 'u32',
        leaf: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement',
      },
      withdraw: {
        id: 'u32',
        proofBytes: 'Bytes',
        root: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement',
        nullifierHash: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement',
        recipient: 'AccountId32',
        relayer: 'AccountId32',
        fee: 'u128',
        refund: 'u128'
      }
    }
  },
  /**
   * Lookup273: pallet_signature_bridge::pallet::Call<T, I>
   **/
  PalletSignatureBridgeCall: {
    _enum: {
      set_maintainer: {
        message: 'Bytes',
        signature: 'Bytes',
      },
      force_set_maintainer: {
        newMaintainer: 'Bytes',
      },
      set_resource: {
        id: 'WebbProposalsHeaderResourceId',
      },
      remove_resource: {
        id: 'WebbProposalsHeaderResourceId',
      },
      whitelist_chain: {
        id: 'u64',
      },
      set_resource_with_signature: {
        srcId: 'u64',
        call: 'Call',
        proposalData: 'Bytes',
        signature: 'Bytes',
      },
      execute_proposal: {
        srcId: 'u64',
        call: 'Call',
        proposalData: 'Bytes',
        signature: 'Bytes'
      }
    }
  },
  /**
   * Lookup276: pallet_vanchor::pallet::Call<T, I>
   **/
  PalletVanchorCall: {
    _enum: {
      create: {
        maxEdges: 'u32',
        depth: 'u8',
        asset: 'u32',
      },
      transact: {
        id: 'u32',
        proofData: 'WebbPrimitivesVanchorProofData',
        extData: 'WebbPrimitivesVanchorExtData',
      },
      set_max_deposit_amount: {
        maxDepositAmount: 'u128',
        nonce: 'u32',
      },
      set_min_withdraw_amount: {
        minWithdrawAmount: 'u128',
        nonce: 'u32'
      }
    }
  },
  /**
   * Lookup277: webb_primitives::types::vanchor::ProofData<tangle_standalone_runtime::protocol_substrate_config::Element>
   **/
  WebbPrimitivesVanchorProofData: {
    proof: 'Bytes',
    publicAmount: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement',
    roots: 'Vec<TangleStandaloneRuntimeProtocolSubstrateConfigElement>',
    inputNullifiers: 'Vec<TangleStandaloneRuntimeProtocolSubstrateConfigElement>',
    outputCommitments: 'Vec<TangleStandaloneRuntimeProtocolSubstrateConfigElement>',
    extDataHash: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement'
  },
  /**
   * Lookup278: webb_primitives::types::vanchor::ExtData<sp_core::crypto::AccountId32, Amount, Balance>
   **/
  WebbPrimitivesVanchorExtData: {
    recipient: 'AccountId32',
    relayer: 'AccountId32',
    extAmount: 'i128',
    fee: 'u128',
    encryptedOutput1: 'Bytes',
    encryptedOutput2: 'Bytes'
  },
  /**
   * Lookup279: pallet_vanchor_handler::pallet::Call<T, I>
   **/
  PalletVanchorHandlerCall: {
    _enum: {
      execute_vanchor_create_proposal: {
        srcChainId: 'u64',
        rId: 'WebbProposalsHeaderResourceId',
        maxEdges: 'u32',
        treeDepth: 'u8',
        asset: 'u32',
        nonce: 'u32',
      },
      execute_vanchor_update_proposal: {
        rId: 'WebbProposalsHeaderResourceId',
        merkleRoot: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement',
        srcResourceId: 'WebbProposalsHeaderResourceId',
        nonce: 'u32',
      },
      execute_set_resource_proposal: {
        rId: 'WebbProposalsHeaderResourceId'
      }
    }
  },
  /**
   * Lookup280: pallet_token_wrapper_handler::pallet::Call<T>
   **/
  PalletTokenWrapperHandlerCall: {
    _enum: {
      execute_wrapping_fee_proposal: {
        wrappingFeePercent: 'u128',
        intoPoolShareId: 'u32',
        nonce: 'u32',
      },
      execute_add_token_to_pool_share: {
        name: 'Bytes',
        assetId: 'u32',
        nonce: 'u32',
      },
      execute_remove_token_from_pool_share: {
        name: 'Bytes',
        assetId: 'u32',
        nonce: 'u32'
      }
    }
  },
  /**
   * Lookup281: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup284: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup285: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup288: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup290: pallet_balances::Releases
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup291: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup293: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup295: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
   **/
  PalletAuthorshipUncleEntryItem: {
    _enum: {
      InclusionHeight: 'u32',
      Uncle: '(H256,Option<AccountId32>)'
    }
  },
  /**
   * Lookup297: pallet_authorship::pallet::Error<T>
   **/
  PalletAuthorshipError: {
    _enum: ['InvalidUncleParent', 'UnclesAlreadySet', 'TooManyUncles', 'GenesisUncle', 'TooHighUncle', 'UncleAlreadyIncluded', 'OldUncle']
  },
  /**
   * Lookup301: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup302: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup304: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup306: pallet_indices::pallet::Error<T>
   **/
  PalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup310: pallet_democracy::PreimageStatus<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletDemocracyPreimageStatus: {
    _enum: {
      Missing: 'u32',
      Available: {
        data: 'Bytes',
        provider: 'AccountId32',
        deposit: 'u128',
        since: 'u32',
        expiry: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup311: pallet_democracy::types::ReferendumInfo<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup312: pallet_democracy::types::ReferendumStatus<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposalHash: 'H256',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup313: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup314: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup317: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup318: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup321: pallet_democracy::Releases
   **/
  PalletDemocracyReleases: {
    _enum: ['V1']
  },
  /**
   * Lookup322: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'DuplicatePreimage', 'NotImminent', 'TooEarly', 'Imminent', 'PreimageMissing', 'ReferendumInvalid', 'PreimageInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooManyProposals', 'VotingPeriodLow']
  },
  /**
   * Lookup324: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup325: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup328: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup329: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup331: pallet_ecdsa_claims::pallet::Error<T>
   **/
  PalletEcdsaClaimsError: {
    _enum: ['InvalidEthereumSignature', 'SignerHasNoClaim', 'SenderHasNoClaim', 'PotUnderflow', 'InvalidStatement', 'VestedBalanceExists']
  },
  /**
   * Lookup333: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenSeatHolder: {
    who: 'AccountId32',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup334: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenVoter: {
    votes: 'Vec<AccountId32>',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup335: pallet_elections_phragmen::pallet::Error<T>
   **/
  PalletElectionsPhragmenError: {
    _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'DuplicatedCandidate', 'TooManyCandidates', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
  },
  /**
   * Lookup336: pallet_election_provider_multi_phase::Phase<Bn>
   **/
  PalletElectionProviderMultiPhasePhase: {
    _enum: {
      Off: 'Null',
      Signed: 'Null',
      Unsigned: '(bool,u32)',
      Emergency: 'Null'
    }
  },
  /**
   * Lookup338: pallet_election_provider_multi_phase::ReadySolution<sp_core::crypto::AccountId32>
   **/
  PalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    score: 'SpNposElectionsElectionScore',
    compute: 'PalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup339: pallet_election_provider_multi_phase::RoundSnapshot<T>
   **/
  PalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    targets: 'Vec<AccountId32>'
  },
  /**
   * Lookup347: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, tangle_standalone_runtime::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'AccountId32',
    deposit: 'u128',
    rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
    callFee: 'u128'
  },
  /**
   * Lookup348: pallet_election_provider_multi_phase::pallet::Error<T>
   **/
  PalletElectionProviderMultiPhaseError: {
    _enum: ['PreDispatchEarlySubmission', 'PreDispatchWrongWinnerCount', 'PreDispatchWeakSubmission', 'SignedQueueFull', 'SignedCannotPayDeposit', 'SignedInvalidWitness', 'SignedTooMuchWeight', 'OcwCallWrongEra', 'MissingSnapshotMetadata', 'InvalidSubmissionIndex', 'CallNotAllowed', 'FallbackFailed']
  },
  /**
   * Lookup349: pallet_staking::StakingLedger<T>
   **/
  PalletStakingStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingUnlockChunk>',
    claimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup351: pallet_staking::UnlockChunk<Balance>
   **/
  PalletStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup353: pallet_staking::Nominations<T>
   **/
  PalletStakingNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup354: pallet_staking::ActiveEraInfo
   **/
  PalletStakingActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup355: pallet_staking::Exposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingExposure: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    others: 'Vec<PalletStakingIndividualExposure>'
  },
  /**
   * Lookup357: pallet_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingIndividualExposure: {
    who: 'AccountId32',
    value: 'Compact<u128>'
  },
  /**
   * Lookup358: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  PalletStakingEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup362: pallet_staking::Forcing
   **/
  PalletStakingForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup364: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup366: pallet_staking::slashing::SlashingSpans
   **/
  PalletStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup367: pallet_staking::slashing::SpanRecord<Balance>
   **/
  PalletStakingSlashingSpanRecord: {
    slashed: 'u128',
    paidOut: 'u128'
  },
  /**
   * Lookup370: pallet_staking::Releases
   **/
  PalletStakingReleases: {
    _enum: ['V1_0_0Ancient', 'V2_0_0', 'V3_0_0', 'V4_0_0', 'V5_0_0', 'V6_0_0', 'V7_0_0', 'V8_0_0', 'V9_0_0', 'V10_0_0']
  },
  /**
   * Lookup371: pallet_staking::pallet::pallet::Error<T>
   **/
  PalletStakingPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow']
  },
  /**
   * Lookup375: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup376: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup377: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup380: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup381: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup382: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup383: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup385: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup386: pallet_child_bounties::ChildBounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletChildBountiesChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    status: 'PalletChildBountiesChildBountyStatus'
  },
  /**
   * Lookup387: pallet_child_bounties::ChildBountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletChildBountiesChildBountyStatus: {
    _enum: {
      Added: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup388: pallet_child_bounties::pallet::Error<T>
   **/
  PalletChildBountiesError: {
    _enum: ['ParentBountyNotActive', 'InsufficientBountyBalance', 'TooManyChildBounties']
  },
  /**
   * Lookup389: pallet_bags_list::list::Node<T, I>
   **/
  PalletBagsListListNode: {
    id: 'AccountId32',
    prev: 'Option<AccountId32>',
    next: 'Option<AccountId32>',
    bagUpper: 'u64',
    score: 'u64'
  },
  /**
   * Lookup390: pallet_bags_list::list::Bag<T, I>
   **/
  PalletBagsListListBag: {
    head: 'Option<AccountId32>',
    tail: 'Option<AccountId32>'
  },
  /**
   * Lookup392: pallet_bags_list::pallet::Error<T, I>
   **/
  PalletBagsListError: {
    _enum: {
      List: 'PalletBagsListListListError'
    }
  },
  /**
   * Lookup393: pallet_bags_list::list::ListError
   **/
  PalletBagsListListListError: {
    _enum: ['Duplicate', 'NotHeavier', 'NotInSameBag', 'NodeNotFound']
  },
  /**
   * Lookup394: pallet_nomination_pools::PoolMember<T>
   **/
  PalletNominationPoolsPoolMember: {
    poolId: 'u32',
    points: 'u128',
    lastRecordedRewardCounter: 'u128',
    unbondingEras: 'BTreeMap<u32, u128>'
  },
  /**
   * Lookup399: pallet_nomination_pools::BondedPoolInner<T>
   **/
  PalletNominationPoolsBondedPoolInner: {
    points: 'u128',
    state: 'PalletNominationPoolsPoolState',
    memberCounter: 'u32',
    roles: 'PalletNominationPoolsPoolRoles'
  },
  /**
   * Lookup400: pallet_nomination_pools::PoolRoles<sp_core::crypto::AccountId32>
   **/
  PalletNominationPoolsPoolRoles: {
    depositor: 'AccountId32',
    root: 'Option<AccountId32>',
    nominator: 'Option<AccountId32>',
    stateToggler: 'Option<AccountId32>'
  },
  /**
   * Lookup401: pallet_nomination_pools::RewardPool<T>
   **/
  PalletNominationPoolsRewardPool: {
    lastRecordedRewardCounter: 'u128',
    lastRecordedTotalPayouts: 'u128',
    totalRewardsClaimed: 'u128'
  },
  /**
   * Lookup402: pallet_nomination_pools::SubPools<T>
   **/
  PalletNominationPoolsSubPools: {
    noEra: 'PalletNominationPoolsUnbondPool',
    withEra: 'BTreeMap<u32, PalletNominationPoolsUnbondPool>'
  },
  /**
   * Lookup403: pallet_nomination_pools::UnbondPool<T>
   **/
  PalletNominationPoolsUnbondPool: {
    points: 'u128',
    balance: 'u128'
  },
  /**
   * Lookup409: pallet_nomination_pools::pallet::Error<T>
   **/
  PalletNominationPoolsError: {
    _enum: {
      PoolNotFound: 'Null',
      PoolMemberNotFound: 'Null',
      RewardPoolNotFound: 'Null',
      SubPoolsNotFound: 'Null',
      AccountBelongsToOtherPool: 'Null',
      FullyUnbonding: 'Null',
      MaxUnbondingLimit: 'Null',
      CannotWithdrawAny: 'Null',
      MinimumBondNotMet: 'Null',
      OverflowRisk: 'Null',
      NotDestroying: 'Null',
      NotNominator: 'Null',
      NotKickerOrDestroying: 'Null',
      NotOpen: 'Null',
      MaxPools: 'Null',
      MaxPoolMembers: 'Null',
      CanNotChangeState: 'Null',
      DoesNotHavePermission: 'Null',
      MetadataExceedsMaxLen: 'Null',
      Defensive: 'PalletNominationPoolsDefensiveError',
      PartialUnbondNotAllowedPermissionlessly: 'Null'
    }
  },
  /**
   * Lookup410: pallet_nomination_pools::pallet::DefensiveError
   **/
  PalletNominationPoolsDefensiveError: {
    _enum: ['NotEnoughSpaceInUnbondPool', 'PoolNotFound', 'RewardPoolNotFound', 'SubPoolsNotFound', 'BondedStashKilledPrematurely']
  },
  /**
   * Lookup413: pallet_scheduler::ScheduledV3<frame_support::traits::schedule::MaybeHashed<tangle_standalone_runtime::Call, primitive_types::H256>, BlockNumber, tangle_standalone_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduledV3: {
    maybeId: 'Option<Bytes>',
    priority: 'u8',
    call: 'FrameSupportScheduleMaybeHashed',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'TangleStandaloneRuntimeOriginCaller'
  },
  /**
   * Lookup414: tangle_standalone_runtime::OriginCaller
   **/
  TangleStandaloneRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      Void: 'SpCoreVoid',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      Council: 'PalletCollectiveRawOrigin'
    }
  },
  /**
   * Lookup415: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup416: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup417: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup418: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange']
  },
  /**
   * Lookup419: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: 'Option<(AccountId32,u128)>',
      Requested: 'u32'
    }
  },
  /**
   * Lookup422: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooLarge', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup423: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,PalletStakingExposure)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup427: pallet_dkg_metadata::types::RoundMetadata
   **/
  PalletDkgMetadataRoundMetadata: {
    currRoundPubKey: 'Bytes',
    nextRoundPubKey: 'Bytes',
    refreshSignature: 'Bytes'
  },
  /**
   * Lookup431: pallet_dkg_metadata::pallet::Error<T>
   **/
  PalletDkgMetadataError: {
    _enum: ['NoMappedAccount', 'InvalidThreshold', 'MustBeAQueuedAuthority', 'MustBeAnActiveAuthority', 'InvalidRefreshDelay', 'InvalidPublicKeys', 'AlreadySubmittedPublicKey', 'AlreadySubmittedSignature', 'UsedSignature', 'InvalidSignature', 'InvalidMisbehaviourReports', 'RefreshInProgress', 'ManualRefreshFailed', 'NoNextPublicKey', 'InvalidControllerAccount']
  },
  /**
   * Lookup434: pallet_dkg_proposals::types::ProposalVotes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletDkgProposalsProposalVotes: {
    votesFor: 'Vec<AccountId32>',
    votesAgainst: 'Vec<AccountId32>',
    status: 'PalletDkgProposalsProposalStatus',
    expiry: 'u32'
  },
  /**
   * Lookup435: pallet_dkg_proposals::types::ProposalStatus
   **/
  PalletDkgProposalsProposalStatus: {
    _enum: ['Initiated', 'Approved', 'Rejected']
  },
  /**
   * Lookup436: pallet_dkg_proposals::pallet::Error<T>
   **/
  PalletDkgProposalsError: {
    _enum: ['InvalidPermissions', 'ThresholdNotSet', 'InvalidChainId', 'InvalidThreshold', 'ChainNotWhitelisted', 'ChainAlreadyWhitelisted', 'ResourceDoesNotExist', 'ProposerAlreadyExists', 'ProposerInvalid', 'MustBeProposer', 'ProposerAlreadyVoted', 'ProposalAlreadyExists', 'ProposalDoesNotExist', 'ProposalNotComplete', 'ProposalAlreadyComplete', 'ProposalExpired', 'ProposerCountIsZero']
  },
  /**
   * Lookup438: dkg_runtime_primitives::proposal::StoredUnsignedProposal<Timestamp>
   **/
  DkgRuntimePrimitivesProposalStoredUnsignedProposal: {
    proposal: 'WebbProposalsProposal',
    timestamp: 'u32'
  },
  /**
   * Lookup439: pallet_dkg_proposal_handler::pallet::Error<T>
   **/
  PalletDkgProposalHandlerError: {
    _enum: ['NoneValue', 'StorageOverflow', 'ProposalFormatInvalid', 'ProposalSignatureInvalid', 'ProposalDoesNotExists', 'ProposalAlreadyExists', 'ChainIdInvalid', 'ProposalsLengthOverflow']
  },
  /**
   * Lookup440: pallet_hasher::pallet::Error<T, I>
   **/
  PalletHasherError: {
    _enum: ['ParametersNotInitialized', 'HashError']
  },
  /**
   * Lookup441: pallet_asset_registry::types::AssetDetails<AssetId, Balance, sp_runtime::bounded::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAssetRegistryAssetDetails: {
    name: 'Bytes',
    assetType: 'PalletAssetRegistryAssetType',
    existentialDeposit: 'u128',
    locked: 'bool'
  },
  /**
   * Lookup442: pallet_asset_registry::types::AssetMetadata<sp_runtime::bounded::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAssetRegistryAssetMetadata: {
    symbol: 'Bytes',
    decimals: 'u8'
  },
  /**
   * Lookup443: pallet_asset_registry::pallet::Error<T>
   **/
  PalletAssetRegistryError: {
    _enum: ['NoIdAvailable', 'AssetNotFound', 'TooLong', 'AssetNotRegistered', 'AssetAlreadyRegistered', 'InvalidSharedAssetLen', 'AssetExistsInPool', 'AssetNotFoundInPool']
  },
  /**
   * Lookup444: orml_currencies::module::Error<T>
   **/
  OrmlCurrenciesModuleError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
  },
  /**
   * Lookup446: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup448: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup450: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup452: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup453: pallet_token_wrapper::pallet::Error<T>
   **/
  PalletTokenWrapperError: {
    _enum: ['InvalidAmount', 'UnregisteredAssetId', 'NotFoundInPool', 'InsufficientBalance', 'NoWrappingFeePercentFound', 'InvalidNonce']
  },
  /**
   * Lookup454: pallet_verifier::pallet::Error<T, I>
   **/
  PalletVerifierError: {
    _enum: ['ParametersNotInitialized', 'VerifyError']
  },
  /**
   * Lookup455: webb_primitives::types::DepositDetails<sp_core::crypto::AccountId32, Balance>
   **/
  WebbPrimitivesDepositDetails: {
    depositor: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup456: pallet_mt::types::TreeMetadata<sp_core::crypto::AccountId32, LeafIndex, tangle_standalone_runtime::protocol_substrate_config::Element>
   **/
  PalletMtTreeMetadata: {
    creator: 'Option<AccountId32>',
    paused: 'bool',
    leafCount: 'u32',
    maxLeaves: 'u32',
    depth: 'u8',
    root: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement',
    edgeNodes: 'Vec<TangleStandaloneRuntimeProtocolSubstrateConfigElement>'
  },
  /**
   * Lookup457: pallet_mt::pallet::Error<T, I>
   **/
  PalletMtError: {
    _enum: ['InvalidPermissions', 'InvalidTreeDepth', 'InvalidLeafIndex', 'ExceedsMaxLeaves', 'TreeDoesntExist', 'ExceedsMaxDefaultHashes']
  },
  /**
   * Lookup459: pallet_linkable_tree::types::EdgeMetadata<ChainID, tangle_standalone_runtime::protocol_substrate_config::Element, LastLeafIndex>
   **/
  PalletLinkableTreeEdgeMetadata: {
    srcChainId: 'u64',
    root: 'TangleStandaloneRuntimeProtocolSubstrateConfigElement',
    latestLeafIndex: 'u32',
    srcResourceId: 'WebbProposalsHeaderResourceId'
  },
  /**
   * Lookup462: pallet_linkable_tree::pallet::Error<T, I>
   **/
  PalletLinkableTreeError: {
    _enum: ['UnknownRoot', 'InvalidMerkleRoots', 'InvalidNeighborWithdrawRoot', 'TooManyEdges', 'EdgeAlreadyExists', 'EdgeDoesntExists', 'InvalidLatestLeafIndex']
  },
  /**
   * Lookup463: pallet_mixer::types::MixerMetadata<Balance, AssetId>
   **/
  PalletMixerMixerMetadata: {
    depositSize: 'u128',
    asset: 'u32'
  },
  /**
   * Lookup465: pallet_mixer::pallet::Error<T, I>
   **/
  PalletMixerError: {
    _enum: ['InvalidPermissions', 'InvalidWithdrawProof', 'AlreadyRevealedNullifier', 'InvalidArbitraryData', 'UnknownRoot', 'NoMixerFound']
  },
  /**
   * Lookup466: pallet_signature_bridge::pallet::Error<T, I>
   **/
  PalletSignatureBridgeError: {
    _enum: ['InvalidPermissions', 'InvalidChainId', 'ChainNotWhitelisted', 'ChainAlreadyWhitelisted', 'ResourceDoesNotExist', 'ResourceAlreadyExists', 'SignatureInvalid', 'MustBeMaintainer', 'ProposalAlreadyExists', 'CallNotConsistentWithProposalData', 'CallDoesNotMatchResourceId', 'IncorrectExecutionChainIdType', 'InvalidNonce', 'InvalidProposalData', 'InvalidCall']
  },
  /**
   * Lookup468: webb_primitives::types::vanchor::VAnchorMetadata<sp_core::crypto::AccountId32, AssetId>
   **/
  WebbPrimitivesVanchorVAnchorMetadata: {
    creator: 'Option<AccountId32>',
    asset: 'u32'
  },
  /**
   * Lookup469: pallet_vanchor::pallet::Error<T, I>
   **/
  PalletVanchorError: {
    _enum: ['InvalidTransactionProof', 'NoVAnchorFound', 'AlreadyRevealedNullifier', 'InvalidExtAmount', 'InvalidDepositAmount', 'InvalidWithdrawAmount', 'InvalidExtData', 'InvalidInputNullifiers', 'InvalidFee', 'InvalidPublicAmount', 'InvalidNonce']
  },
  /**
   * Lookup470: pallet_vanchor_handler::pallet::Error<T, I>
   **/
  PalletVanchorHandlerError: {
    _enum: ['InvalidPermissions', 'ResourceIsAlreadyAnchored', 'AnchorHandlerNotFound', 'SourceChainIdNotFound', 'StorageOverflow', 'InvalidNonce', 'InvalidResourceId']
  },
  /**
   * Lookup471: pallet_token_wrapper_handler::pallet::Error<T>
   **/
  PalletTokenWrapperHandlerError: {
    _enum: ['InvalidPermissions', 'ResourceIsAlreadyAnchored', 'TokenWrapperHandlerNotFound', 'StorageOverflow']
  },
  /**
   * Lookup473: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup474: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup475: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup477: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup478: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup479: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup480: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup483: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup484: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup485: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup486: tangle_standalone_runtime::Runtime
   **/
  TangleStandaloneRuntimeRuntime: 'Null'
};
