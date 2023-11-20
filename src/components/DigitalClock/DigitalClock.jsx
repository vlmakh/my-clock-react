import "./DigitalClock.css";
import PropTypes from "prop-types";

export const DigitalClock = ({ hours, min, sec }) => {
  return (
    <div className="digitalWrap">
      <p className="number">{hours}</p>
      <p>:</p>
      <p className="number">{min}</p>
      <p>:</p>
      <p className="number">{sec}</p>
    </div>
  );
};

DigitalClock.propTypes = {
  hours: PropTypes.string,
  min: PropTypes.string,
  sec: PropTypes.string,
};
