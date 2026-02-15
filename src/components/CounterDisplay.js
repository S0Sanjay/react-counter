import React from 'react';

const CounterDisplay = ({ count }) => {
  return (
    <div className="counter-display" aria-live="polite">
      <div className="count">{count}</div>
    </div>
  );
};

export default CounterDisplay;
