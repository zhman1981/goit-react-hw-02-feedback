import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = event => {
    switch (event.target.textContent) {
      case 'Good':
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        });
        break;
      case 'Neutral':
        this.setState(prevState => {
          return { neutral: prevState.neutral + 1 };
        });
        break;
      case 'Bad':
        this.setState(prevState => {
          return { bad: prevState.bad + 1 };
        });
        break;
      default:
        return;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <p>Please leave feedback</p>
        <FeedbackOptions onBtnClick={this.onClickBtn} />
        <p>Statistics</p>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default App;
