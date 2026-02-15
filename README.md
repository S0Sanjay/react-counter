# 🎮 React Counter Pro

A modern, production-ready React counter app with themes, step control, persistence, and responsive design.

🔗 Live Demo:
👉 [https://s0sanjay.github.io/react-counter/](https://s0sanjay.github.io/react-counter/)

---

✨ Features

* 🎨 Light (Blue) & Dark (Red/Black) themes with smooth transitions
* ➕➖ Step control (1–10) & unlimited counter range (supports negatives)
* 🔄 Reset & 🎲 Random number (-50 to +99)
* 💾 Saves count & theme in `localStorage`
* 📱 Fully responsive (desktop, tablet, mobile)
* ⚡ CSS animations & accessibility features (ARIA, focus rings, keyboard navigation)

---

🛠️ Technologies Used

* React – Component-based architecture
* HTML5 & JSX – Structure
* CSS3 & Flexbox – Styling & layout
* useState & useEffect – State management & persistence

---

📂 File Structure

```
react-counter/
├── public/
│   ├── index.html            # Main HTML file
│   └── favicon.ico
├── src/
│   ├── App.js                # Main state manager
│   ├── index.js              # Entry point
│   ├── styles.css            # Global styles
│   ├── components/
│   │   ├── CounterDisplay.js # Large animated counter
│   │   ├── CounterControls.js# Increment/Decrement + Step selector
│   │   ├── ResetButtons.js   # Reset & Random actions
│   │   └── ThemeToggle.js    # Light/Dark theme toggle
└── package.json              # Project config & dependencies
```

---

🚀 How to Run Locally

```bash
# Clone repository
git clone https://github.com/S0Sanjay/react-counter.git

# Navigate into project
cd react-counter

# Install dependencies
npm install

# Start development server
npm start
```