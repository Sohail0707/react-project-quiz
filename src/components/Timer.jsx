import { useEffect, useState } from "react";

export default function Timer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");

    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");

    setInterval(() => {
      setRemainingTime((prev) => prev - 50);
    }, 50);
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
