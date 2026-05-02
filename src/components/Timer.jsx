import { useEffect, useState } from "react";

export default function Timer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timer);
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 50);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode}
    />
  );
}
