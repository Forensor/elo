# Elo
A simply ELO system lib.
## Documentation

There are only three methods.

### .expected(playerRating: number, rivalRating: number)

Calculates the expected match outcome.

```js
Elo.expected(1200, 1400); // -> 0.24
// 1200 player has 24% chance to win.
```

### .newRating(playerRating: number, rivalRating: number, score: number)

Gets the new rating of the target player.

```js
Elo.newRating(1200, 1400, 1); // -> 1224
```

### .ratingDifference(playerRating: number, rivalRating: number, score: number)

Gets the rating difference of the target player.

```js
Elo.ratingDifference(1200, 1400, 1); // -> 24
```
