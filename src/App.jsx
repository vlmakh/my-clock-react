import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import { DigitalClock } from "./components/DigitalClock/DigitalClock";
import { AnalogClock } from "./components/AnalogClock/AnalogClock";

function App() {
  const [secDeg, setSecDeg] = useState(0);
  const [minDeg, setMinDeg] = useState(0);
  const [hrDeg, setHrDeg] = useState(0);
  const [current, setCurrent] = useState({});

  let time;

  const updateTime = () => {
    time = new Date();

    let hours = time.getHours().toString().padStart(2, "0");
    let minutes = time.getMinutes().toString().padStart(2, "0");
    let seconds = time.getSeconds().toString().padStart(2, "0");

    setCurrent({ hours, minutes, seconds });
    setSecDeg(time.getSeconds() * 6);
    setMinDeg(time.getMinutes() * 6 + time.getSeconds() / 10);
    setHrDeg(time.getHours() * 30 + time.getMinutes() / 2);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <DigitalClock
        hours={current.hours}
        min={current.minutes}
        sec={current.seconds}
      />

      <AnalogClock secDeg={secDeg} minDeg={minDeg} hrDeg={hrDeg} />
    </>
  );
}

export default App;
