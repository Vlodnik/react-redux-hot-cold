export const MAKE_GUESS = 'MAKE_GUESS';
export function makeGuess(guess) {
  return {
    type: MAKE_GUESS,
    guess
  };
}
