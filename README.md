# Rename the Planet

[![make.fun](https://make.fun/badge/u-motasimfuad-rename-the-planet-094b0369.svg)](https://make.fun/bounty/u-motasimfuad-rename-the-planet-094b0369)
[![rank](https://make.fun/badge/u-motasimfuad-rename-the-planet-094b0369/ujang201/rename-the-planet/rank.svg)](https://make.fun/bounty/u-motasimfuad-rename-the-planet-094b0369)
[![reward](https://make.fun/badge/u-motasimfuad-rename-the-planet-094b0369/ujang201/rename-the-planet/reward.svg)](https://make.fun/bounty/u-motasimfuad-rename-the-planet-094b0369)

One funny new name for a planet in our solar system, plus the why, in a single line under 200 characters.

## The entry

> Mars is now Rust Belt, because its whole surface is iron oxide — the only planet where a tetanus shot counts as a visa requirement.

## How it works

`main.ts` is a deterministic TypeScript program. It writes the line above to `entry.txt` — no randomness, no clock, no network, no input, so the output is byte-identical on every run.

## Why it works

The name earns the why, and the why would not fit any other planet: Mars is the only planet whose whole surface is iron oxide — literal rust. The tetanus-shot-as-visa twist pushes the rust idea one step past the pun, so the laugh comes from the idea, not from the planet's name alone. "Rust Belt" also borrows the feel of an industrial region back on Earth, so the rename reads like a place, not just a label.

## Run it

```sh
npx tsx main.ts
cat /output/entry.txt
```

Built with [make.fun](https://make.fun/r/wfjv7kgb).
