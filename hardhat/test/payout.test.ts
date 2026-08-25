import { expect } from "chai";

import {
  calculatePayout,
  calculateProfit,
  hasWinningStake,
  payoutRatio,
  payoutSummary,
} from "../scripts/lib/payout";

describe("payout calculation", function () {
  it("calculates a proportional payout", function () {
    expect(
      calculatePayout(
        10n,
        50n,
        100n,
      ),
    ).to.equal(20n);
  });

  it("calculates a larger payout", function () {
    expect(
      calculatePayout(
        20n,
        50n,
        100n,
      ),
    ).to.equal(40n);
  });

  it("returns zero for no winning stake", function () {
    expect(
      calculatePayout(
        0n,
        50n,
        100n,
      ),
    ).to.equal(0n);
  });

  it("rejects an empty winning pool", function () {
    expect(() =>
      calculatePayout(
        10n,
        0n,
        100n,
      ),
    ).to.throw();
  });

  it("calculates profit", function () {
    expect(
      calculateProfit(
        10n,
        20n,
      ),
    ).to.equal(10n);
  });

  it("does not report negative profit", function () {
    expect(
      calculateProfit(
        20n,
        10n,
      ),
    ).to.equal(0n);
  });

  it("detects winning stake", function () {
    expect(
      hasWinningStake(5n),
    ).to.equal(true);

    expect(
      hasWinningStake(0n),
    ).to.equal(false);
  });

  it("calculates stake percentage", function () {
    expect(
      payoutRatio(
        10n,
        50n,
      ),
    ).to.equal(20n);
  });

  it("creates a payout summary", function () {
    expect(
      payoutSummary(
        10n,
        50n,
        100n,
      ),
    ).to.contain(
      "payout=20",
    );
  });
});
