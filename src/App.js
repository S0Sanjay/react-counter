import React, { useState, useEffect, useRef } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import ResetButtons from "./components/ResetButtons";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [isDark, setIsDark] = useState(false);

  const clickAudio = useRef(new Audio("/sounds/click.mp3"));
  const resetAudio = useRef(new Audio("/sounds/reset.mp3"));
  const randomAudio = useRef(new Audio("/sounds/random.mp3"));

  const increment = () => {
    clickAudio.current.currentTime = 0;
    clickAudio.current.play();
    setCount((c) => c + step);
  };

  const decrement = () => {
    clickAudio.current.currentTime = 0;
    clickAudio.current.play();
    setCount((c) => c - step);
  };

  const reset = () => {
    resetAudio.current.currentTime = 0;
    resetAudio.current.play();
    setCount(0);
  };

  const randomReset = () => {
    randomAudio.current.currentTime = 0;
    randomAudio.current.play();
    setCount(Math.floor(Math.random() * 100) - 50);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`app ${isDark ? "dark" : ""}`}>
      <header>
        <h1>🔢 React Counter</h1>
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </header>

      <main>
        <CounterDisplay count={count} />
        <CounterControls
          count={count}
          step={step}
          onIncrement={increment}
          onDecrement={decrement}
          onStepChange={setStep}
        />
        <ResetButtons onReset={reset} onRandom={randomReset} />
      </main>
    </div>
  );
}

export default App;
