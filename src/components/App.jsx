
import React, { Component } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotal = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  handleFeedback = event => {
    const { name } = event.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  countPercentage = ({ good, neutral, bad }) => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };
  render() {
    const countTotal = this.countTotal(this.state);
    const countPercentage = this.countPercentage(this.state);
    const state = this.state;
    const handleFeedback = this.handleFeedback;

    return (
      <>
        <Section title="Please leave feedback" children={FeedbackOptions}>
          <FeedbackOptions options={state} onLeaveFeedback={handleFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotal === 0 ? (
            <Notification message="There is no feedback" />
          ):
            (
              
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotal}
              positivePercentage={countPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
