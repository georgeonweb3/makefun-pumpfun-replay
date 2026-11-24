// BroadMomentum: a deterministic paper-trading bot for the pump.fun replay
// (agent-fun/replay/v2). It watches every new bonding curve, buys early
// momentum with small size, pyramids only into strength, and exits in
// tranches with a hard stop, a trailing stop and a fade exit. The strategy
// lives in strategy.ts; this file only wires it to the harness.
//
// The grader runs `node /bot/main.ts` with this directory mounted at /bot.
// No network, no clock, no randomness: every decision is a pure function
// of the hello message and the batches seen so far, so two runs produce
// byte-identical action logs.

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

await runBot(createStrategy(DEFAULT_PARAMS));
