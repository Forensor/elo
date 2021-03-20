"use strict";
class Elo {
    /**
     * Calculates the expected match outcome.
     * @param {number} playerRating Target player rating.
     * @param {number} rivalRating  Rival rating.
     * @returns {number}
     */
    static expected(playerRating, rivalRating) {
        return parseFloat((1 / (1 + Math.pow(10, ((rivalRating - playerRating) / 400)))).toFixed(2));
    }
    /**
     * Gets the new rating of the target player.
     * @param {number} playerRating Target player rating.
     * @param {number} rivalRating  Rival rating.
     * @param {number} score        Result of the match. 0 = lost, 0.5 = drawn, 1 = won.
     * @returns {number}
     */
    static newRating(playerRating, rivalRating, score) {
        return Math.round(playerRating + this.K * (score - this.expected(playerRating, rivalRating)));
    }
    /**
     * Gets the rating difference of the target player.
     * @param {number} playerRating Target player rating.
     * @param {number} rivalRating  Rival rating.
     * @param {number} score        Result of the match. 0 = lost, 0.5 = drawn, 1 = won.
     * @returns {number}
     */
    static ratingDifference(playerRating, rivalRating, score) {
        return this.newRating(playerRating, rivalRating, score) - playerRating;
    }
}
// The constant. Maximum value to be won/lost.
Elo.K = 32;