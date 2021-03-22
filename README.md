# Elo

A simple ELO system lib.

## Documentation

This library only has three functions.

### expected(playerRating: number, rivalRating: number): number

Calculates the expected match outcome.

```js
import { expected } from 'elo.js'

expected(1200, 1400) // -> 0.24
// 1200 player has 24% chance to win.
```

### newRating(playerRating: number, rivalRating: number, score: number): number

Gets the new rating of the target player.

```js
import { newRating } from 'elo.js'

newRating(1200, 1400, 1) // -> 1224
```

### ratingDifference(playerRating: number, rivalRating: number, score: number): number

Gets the rating difference of the target player.

```js
import { ratingDifference } from 'elo.js'

ratingDifference(1200, 1400, 1) // -> 24
```
