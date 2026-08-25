export function calculatePayout(
  userStake: bigint,
  winningPool: bigint,
  totalPool: bigint,
): bigint {
  if (userStake <= 0n) {
    return 0n;
  }

  if (winningPool <= 0n) {
    throw new Error(
      "winning pool must be positive",
    );
  }

  return (
    userStake *
    totalPool /
    winningPool
  );
}

export function calculateProfit(
  userStake: bigint,
  payout: bigint,
): bigint {
  if (payout <= userStake) {
    return 0n;
  }

  return payout - userStake;
}

export function hasWinningStake(
  userStake: bigint,
): boolean {
  return userStake > 0n;
}

export function payoutRatio(
  userStake: bigint,
  winningPool: bigint,
): bigint {
  if (winningPool <= 0n) {
    return 0n;
  }

  return (
    userStake *
    100n /
    winningPool
  );
}

export function payoutSummary(
  userStake: bigint,
  winningPool: bigint,
  totalPool: bigint,
): string {
  const payout =
    calculatePayout(
      userStake,
      winningPool,
      totalPool,
    );

  const profit =
    calculateProfit(
      userStake,
      payout,
    );

  return [
    `stake=${userStake}`,
    `payout=${payout}`,
    `profit=${profit}`,
  ].join("\n");
}
