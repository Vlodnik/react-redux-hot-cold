import {createStore} from 'redux';

// Actions
export const MAKE_GUESS = 'MAKE_GUESS';
export function makeGuess(guess) {
  return {
    type: MAKE_GUESS,
    guess
  };
}

export const NEW_GAME = 'NEW_GAME';
export function newGame() {
  return {
    type: NEW_GAME
  };
}

export const CHECK_STATUS = 'CHECK_STATUS';
export function checkStatus() {
  return {
    type: CHECK_STATUS
  };
}

export const SEE_INFO = 'SEE_INFO';
export function seeInfo() {
  return {
    type: SEE_INFO
  };
}

// Reducers
const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

const hotColdReducer = (state=initialState, action) => {
  if(action.type === MAKE_GUESS) {
    console.log(action.guess);

    const guess = parseInt(action.guess, 10);
    if(isNaN(guess)) {
      return Object.assign({}, state, {
        feedback: 'Please enter a valid number'
      });
    }

    const difference = Math.abs(guess - state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }


    const newState = Object.assign({}, state, {
      feedback,
      guesses: [...state.guesses, guess]
    });
    console.log(newState);
    return newState;
  }

  return state;
};

// Store
export const store = createStore(hotColdReducer);
