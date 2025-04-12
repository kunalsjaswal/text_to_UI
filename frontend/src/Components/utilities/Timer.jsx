import React, { useState, useEffect } from 'react';

const  Timer=({listening})=> {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let interval = null;
    if (listening) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          if (seconds === 59) {
            setMinutes(minutes => minutes + 1);
            return 0;
          } else {
            return seconds + 1;
          }
        });
      }, 1000);
    } else if (!listening && seconds !== 0) {
      clearInterval(interval);
      setSeconds(0)
      setMinutes(0)
    }
    return () => clearInterval(interval);
  }, [listening, seconds]);



  return (
    <>
      <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
    </>
  )
}
export default Timer

