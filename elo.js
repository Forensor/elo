/**
 * The constant. Maximum value to be won/lost.
 */
const K = 32

/**
 * Calculates the expected match outcome.
 * @param {number} playerRating Target player rating.
 * @param {number} rivalRating  Rival rating.
 * @returns {number}
 */
export const expected = (playerRating, rivalRating) =>
  parseFloat(
    (1 / (1 + Math.pow(10, (rivalRating - playerRating) / 400))).toFixed(2),
  )

/**
 * Gets the new rating of the target player.
 * @param {number} playerRating Target player rating.
 * @param {number} rivalRating  Rival rating.
 * @param {number} score        Result of the match. 0 = lost, 0.5 = drawn, 1 = won.
 * @returns {number}
 */
export const newRating = (playerRating, rivalRating, score) =>
  Math.round(playerRating + K * (score - expected(playerRating, rivalRating)))

/**
 * Gets the rating difference of the target player.
 * @param {number} playerRating Target player rating.
 * @param {number} rivalRating  Rival rating.
 * @param {number} score        Result of the match. 0 = lost, 0.5 = drawn, 1 = won.
 * @returns {number}
 */
export const ratingDifference = (playerRating, rivalRating, score) =>
  newRating(playerRating, rivalRating, score) - playerRating
