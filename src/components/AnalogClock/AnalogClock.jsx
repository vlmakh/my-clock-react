import "./AnalogClock.css";

export const AnalogClock = ({ secDeg, minDeg, hrDeg }) => {
  const degrees = [];
  for (let i = 0; i < 360; i = i + 6) {
    degrees.push(i);
  }

  return (
    <div className="clockWrapper">
      <div className="outerCircle">
        <div className="clockFace">
          {degrees.map((deg) =>
            deg % 5 === 0 ? (
              <div
                key={deg}
                className="segment"
                style={{ transform: `rotate(${deg}deg)` }}
              ></div>
            ) : (
              <div
                key={deg}
                className="segment"
                style={{ transform: `rotate(${deg}deg)`, height: "8px" }}
              ></div>
            )
          )}

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

          <div className="boxHour" style={{ transform: `rotate(${hrDeg}deg)` }}>
            <div className="arrowHour"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
