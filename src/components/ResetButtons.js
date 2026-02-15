import React from 'react';

const ResetButtons = ({ onReset, onRandom }) => {
  return (
    <div className="actions">
      <button 
        className="btn reset"
        onClick={onReset}
        aria-label="Reset counter"
      >
        Reset
      </button>
      <button 
        className="btn random"
        onClick={onRandom}
        aria-label="Random reset"
      >
        Random
      </button>
    </div>
  );
};

export default ResetButtons;
