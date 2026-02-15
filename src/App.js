import React, { useState, useEffect } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import ResetButtons from "./components/ResetButtons";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("counterApp");
    if (data) {
      const { count: savedCount, theme } = JSON.parse(data);
      setCount(savedCount || 0);
      setIsDark(theme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "counterApp",
      JSON.stringify({
        count,
        theme: isDark ? "dark" : "light",
      }),
    );
  }, [count, isDark]);

  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => c - step);
  const reset = () => setCount(0);
  const randomReset = () => setCount(Math.floor(Math.random() * 100) - 50);

  return (
    <div className={`app ${isDark ? "dark" : ""}`}>
      <header>
        <h1>🔢 React Counter</h1>
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
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
