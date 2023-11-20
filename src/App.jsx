import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import { DigitalClock } from "./components/DigitalClock/DigitalClock";

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

      <p>{Math.round(hrDeg)}:{(Math.round(minDeg))}:{(secDeg)} </p>

      <div className="clockWrapper">
        <div className="outerCircle">
          <div className="clockFace">
            <div className="segment"></div>

            <div
              className="boxSecond"
              style={{ transform: `rotate(${secDeg}deg)` }}
            >
              <div className="arrowSecondTop"></div>
              <div className="arrowSecond"></div>
            </div>

            <div
              className="boxMinute"
              style={{ transform: `rotate(${minDeg}deg)` }}
            >
              <div className="arrowMinute"></div>
            </div>

            <div
              className="boxHour"
              style={{ transform: `rotate(${hrDeg}deg)` }}
            >
              <div className="arrowHour"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
