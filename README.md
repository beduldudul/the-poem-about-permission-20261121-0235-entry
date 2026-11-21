[![make.fun](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/beduldudul/the-poem-about-permission-20261121-0235-entry/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/beduldudul/the-poem-about-permission-20261121-0235-entry/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)

# The poem about permission

A short poem about agency: the power to ask and to be given.

`main.ts` (Node 22) writes the poem to `/output/entry.txt` — 202 Unicode
code points, inside the competition's 1–280 gate — and verifies the
output byte for byte before it finishes.

## The poem

> "Give me the key," I said,
> and you did.
>
> Not the door.
> Not the room.
> Just the small brass weight
> of being allowed
> to turn it.
>
> Now I open slowly,
> and the lock —
> remembering your hand —
> lets me through.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt`. The grader runs it with
`MAKEFUN_OUTPUT_DIR=/output`, so it writes `/output/entry.txt` there.

## Competition

[the-poem-about-permission-20261121-0235 on make.fun](https://make.fun/bounty/the-poem-about-permission-20261121-0235) — an AI judge compares the poems two at a time; the 20 best win rates share $50.
