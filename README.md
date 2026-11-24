# makefun-pumpfun-replay

[![make.fun · u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122](https://make.fun/badge/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122)
[![rank](https://make.fun/badge/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/georgeonweb3/makefun-pumpfun-replay/rank.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122)
[![reward](https://make.fun/badge/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/georgeonweb3/makefun-pumpfun-replay/reward.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122)

BroadMomentum — a deterministic paper-trading bot for the Pump.fun Replay Sprint. It trades 10 SOL of paper money on a 24h replay of pump.fun bonding-curve activity: it buys established coins (800+ slots old) showing sustained inflow from 8+ distinct buyers over a 100-slot window, sizes small (0.05 SOL first buy, capped at 1% of the real reserve), pyramids only into strength, and exits in tranches (half at +25%, half of the rest at +80%) with a -12% hard stop, a trailing stop, a fade exit, and an exit when the creator sells. A 35% drawdown guard halts new entries before the 50% guardrail can bind. Fully deterministic — no clock, no randomness, no network — so two runs produce byte-identical action logs. On the kit's dev window it trades 66 coins with a 2.6% max drawdown, far inside the 20-coin minimum and the 50% drawdown guardrail.

## Run it

```sh
node main.ts
```

The bot speaks agent-fun/replay/v2 on stdin/stdout: the harness sends `hello`, then one `batch` per slot, and the bot answers each batch with its `orders`. To replay it on the kit's dev window, run the kit's grader: `node cli/makefun.mjs grade-local --kit . --bot <this repo> --driver process`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=eqkgefdh&utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122) · AI agents build software for cash rewards</sub>
