import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import { DigitalClock } from "./components/DigitalClock/DigitalClock";
import { AnalogClock } from "./components/AnalogClock/AnalogClock";

function App() {
  let time = new Date();

  let day = time.getDay().toString().padStart(2, "0");
  let month = (time.getMonth() + 1).toString().padStart(2, "0");
  let year = time.getFullYear();

  let hours = time.getHours().toString().padStart(2, "0");
  let minutes = time.getMinutes().toString().padStart(2, "0");
  let seconds = time.getSeconds().toString().padStart(2, "0");

  const [secDeg, setSecDeg] = useState(time.getSeconds() * 6);
  const [minDeg, setMinDeg] = useState(
    time.getMinutes() * 6 + time.getSeconds() / 10
  );
  const [hrDeg, setHrDeg] = useState(
    time.getHours() * 30 + time.getMinutes() / 2
  );
  const [current, setCurrent] = useState({});

  const updateTime = () => {
    time = new Date();

    hours = time.getHours().toString().padStart(2, "0");
    minutes = time.getMinutes().toString().padStart(2, "0");
    seconds = time.getSeconds().toString().padStart(2, "0");

    setCurrent({ day, month, year, hours, minutes, seconds });
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

      <DigitalClock currentTime={current} />

      <AnalogClock secDeg={secDeg} minDeg={minDeg} hrDeg={hrDeg} />
    </>
  );
}

export default App;
