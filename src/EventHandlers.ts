/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
  PoolContract_Approval_loader,
  PoolContract_Approval_handler,
  PoolContract_Burn_loader,
  PoolContract_Burn_handler,
  PoolContract_Claim_loader,
  PoolContract_Claim_handler,
  PoolContract_EIP712DomainChanged_loader,
  PoolContract_EIP712DomainChanged_handler,
  PoolContract_Fees_loader,
  PoolContract_Fees_handler,
  PoolContract_Mint_loader,
  PoolContract_Mint_handler,
  PoolContract_Swap_loader,
  PoolContract_Swap_handler,
  PoolContract_Sync_loader,
  PoolContract_Sync_handler,
  PoolContract_Transfer_loader,
  PoolContract_Transfer_handler,
} from "../generated/src/Handlers.gen";

import {
  ApprovalEntity,
  BurnEntity,
  ClaimEntity,
  EIP712DomainChangedEntity,
  FeesEntity,
  MintEntity,
  SwapEntity,
  SyncEntity,
  TransferEntity,
  EventsSummaryEntity
} from "./src/Types.gen";

const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
  approvalsCount: BigInt(0),
  burnsCount: BigInt(0),
  claimsCount: BigInt(0),
  eIP712DomainChangedsCount: BigInt(0),
  feessCount: BigInt(0),
  mintsCount: BigInt(0),
  swapsCount: BigInt(0),
  syncsCount: BigInt(0),
  transfersCount: BigInt(0),
};

PoolContract_Approval_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

PoolContract_Approval_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    approvalsCount: currentSummaryEntity.approvalsCount + BigInt(1),
  };

  let approvalEntity: ApprovalEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Approval.set(approvalEntity);
});

PoolContract_Burn_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

PoolContract_Burn_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    burnsCount: currentSummaryEntity.burnsCount + BigInt(1),
  };

  let burnEntity: BurnEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    sender: event.params.sender,
    to: event.params.to,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Burn.set(burnEntity);
});

PoolContract_Claim_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

PoolContract_Claim_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    claimsCount: currentSummaryEntity.claimsCount + BigInt(1),
  };

  let claimEntity: ClaimEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Claim.set(claimEntity);
});

PoolContract_EIP712DomainChanged_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

PoolContract_EIP712DomainChanged_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    eIP712DomainChangedsCount: currentSummaryEntity.eIP712DomainChangedsCount + BigInt(1),
  };

  let eIP712DomainChangedEntity: EIP712DomainChangedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.EIP712DomainChanged.set(eIP712DomainChangedEntity);
});

PoolContract_Fees_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

PoolContract_Fees_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    feessCount: currentSummaryEntity.feessCount + BigInt(1),
  };

  let feesEntity: FeesEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    sender: event.params.sender,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Fees.set(feesEntity);
});

PoolContract_Mint_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

PoolContract_Mint_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    mintsCount: currentSummaryEntity.mintsCount + BigInt(1),
  };

  let mintEntity: MintEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    sender: event.params.sender,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Mint.set(mintEntity);
});

PoolContract_Swap_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

PoolContract_Swap_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    swapsCount: currentSummaryEntity.swapsCount + BigInt(1),
  };

  let swapEntity: SwapEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    sender: event.params.sender,
    to: event.params.to,
    amount0In: event.params.amount0In,
    amount1In: event.params.amount1In,
    amount0Out: event.params.amount0Out,
    amount1Out: event.params.amount1Out,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Swap.set(swapEntity);
});

PoolContract_Sync_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

PoolContract_Sync_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    syncsCount: currentSummaryEntity.syncsCount + BigInt(1),
  };

  let syncEntity: SyncEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    reserve0: event.params.reserve0,
    reserve1: event.params.reserve1,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Sync.set(syncEntity);
});

PoolContract_Transfer_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

PoolContract_Transfer_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    transfersCount: currentSummaryEntity.transfersCount + BigInt(1),
  };

  let transferEntity: TransferEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Transfer.set(transferEntity);
});

