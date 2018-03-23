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

// Reducers
const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

const hotColdReducer = (state=initialState, action) => {
  if(action.type === MAKE_GUESS) {
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

    return Object.assign({}, state, {
      feedback,
      guesses: [...state.guesses, guess]
    });
  } else if(action.type === NEW_GAME) {
    return Object.assign({}, initialState, {
      correctAnswer: Math.round(Math.random() * 100) + 1
    });
  } else if(action.type === CHECK_STATUS) {
    const { guesses, feedback } = state;
    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    return Object.assign({}, state, {
      auralStatus
    });
  }

  return state;
};

// Store
export const store = createStore(hotColdReducer);
