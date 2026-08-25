import {
  payoutSummary,
} from "./lib/payout";

const examples = [
  {
    name: "small winner",
    stake: 10n,
    winningPool: 50n,
    totalPool: 100n,
  },
  {
    name: "larger winner",
    stake: 20n,
    winningPool: 50n,
    totalPool: 100n,
  },
  {
    name: "small winning pool",
    stake: 5n,
    winningPool: 20n,
    totalPool: 100n,
  },
];

for (
  const example of examples
) {
  console.log(
    `--- ${example.name} ---`,
  );

  console.log(
    payoutSummary(
      example.stake,
      example.winningPool,
      example.totalPool,
    ),
  );

  console.log("");
}

console.log(
  "The calculation uses integer",
);

console.log(
  "arithmetic, so small rounding",
);

console.log(
  "differences are possible.",
);
