import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { options } = this.props;

    return (
      <div>
        {options.map((option, index) => (
          <button
            key={index}
            type="button"
            onClick={() => this.props.onBtnClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
