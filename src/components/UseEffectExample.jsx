import { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
      if (seconds === 60) {
        setSeconds(0);
        setMinutes((prevMinutes) => prevMinutes + 1);
      }
      if (minutes === 60) {
        setMinutes(0);
        setHours((prevHours) => prevHours + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);
  return (
    <>
      <div>
        <h3>Use Effect Example</h3>
      </div>
      <div>
        Time Laps: {hours >= 10 ? hours : "0" + hours}:
        {minutes >= 10 ? minutes : "0" + minutes}:
        {seconds >= 10 ? seconds : "0" + seconds}
        <div>
          <button type="button">Reset Time</button>
        </div>
      </div>
    </>
  );
};

export default UseEffectExample;
