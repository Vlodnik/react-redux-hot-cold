export const MAKE_GUESS = 'MAKE_GUESS';
export function makeGuess(guess) {
  return {
    type: MAKE_GUESS,
    guess
  };
}

export const NEW_GAME = 'NEW_GAME';
export function newGame() {
  type: NEW_GAME
}

export const CHECK_STATUS = 'CHECK_STATUS';
export function checkStatus() {
  type: CHECK_STATUS
}

export const SEE_INFO = 'SEE_INFO';
export function seeInfo() {
  type: SEE_INFO
}
