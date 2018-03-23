import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
          />
          <StatusSection guesses={guesses}
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    guesses: state.guesses,
    feedback: state.feedback,
    auralStatus: state.auralStatus,
    correctAnswer: state.correctAnswer
  };
}

export default connect(mapStateToProps)(Game);
