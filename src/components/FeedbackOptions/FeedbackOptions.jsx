import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ onBtnClick }) {
  return (
    <div>
      <button onClick={onBtnClick}>Good</button>
      <button onClick={onBtnClick}>Neutral</button>
      <button onClick={onBtnClick}>Bad</button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func,
};

export default FeedbackOptions;
