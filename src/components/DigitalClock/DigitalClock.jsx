import "./DigitalClock.css";
import PropTypes from "prop-types";

export const DigitalClock = ({ currentTime }) => {
  return (
    <div>
      <div className="digitalTime">
        <p className="number">{currentTime.hours}</p>
        <p>:</p>
        <p className="number">{currentTime.minutes}</p>
        <p>:</p>
        <p className="number">{currentTime.seconds}</p>
      </div>

      <div className="digitalDate">
        <p className="number">
          {currentTime.day}.{currentTime.month}.{currentTime.year}
        </p>
      </div>
    </div>
  );
};

DigitalClock.propTypes = {
  currentTime: PropTypes.shape({
    hours: PropTypes.string,
    min: PropTypes.string,
    sec: PropTypes.string,
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.number,
  }),
};
