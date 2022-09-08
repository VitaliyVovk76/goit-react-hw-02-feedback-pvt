import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHendleClick = (name) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  calculateAllFeedback = () => {
    const arrOfFeedback = Object.values(this.state);
    return arrOfFeedback.reduce((val, acc) => {
      return val + acc;
    }, 0);
  };

  calculatePositiveFeedback = () => {
    const total = this.calculateAllFeedback();
    const good = this.state.good;
    const percentGood = Math.round((100 / total) * good);
    return percentGood ? percentGood : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const feedbackOptions = Object.keys(this.state);
    const sumAllFeedback = this.calculateAllFeedback();
    const sumPositiveFeedback = this.calculatePositiveFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onBtnClick={this.onHendleClick}
          />
        </Section>
        <Section title="Statistics">
          {sumAllFeedback === 0 ? (
            <Notification text="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={sumAllFeedback}
              positivePercentage={sumPositiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
