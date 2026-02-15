import React from "react";

const CounterControls = ({
  count,
  step,
  onIncrement,
  onDecrement,
  onStepChange,
}) => {
  return (
    <div className="controls">
      <button
        className="btn dec"
        onClick={onDecrement}
        aria-label="Decrement counter"
      >
        -
      </button>

      <button
        className="btn inc"
        onClick={onIncrement}
        aria-label="Increment counter"
      >
        +
      </button>

      <input
        className="step-input"
        type="number"
        value={step}
        onChange={(e) =>
          onStepChange(Math.max(1, parseInt(e.target.value) || 1))
        }
        min="1"
        max="10"
        aria-label="Step size"
      />
    </div>
  );
};

export default CounterControls;
