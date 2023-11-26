"use client";
import React, { useState, useEffect } from "react";

function Countdown() {
  // Initialize state variables for days, hours, minutes, and seconds
  const [days, setDays] = useState<number | null>(null);
  const [hours, setHours] = useState<number | null>(null);
  const [minutes, setMinutes] = useState<number | null>(null);
  const [seconds, setSeconds] = useState<number | null>(null);
  const [countDownHidden, setCountDownHidden] = useState<boolean>(false);

  // Calculate the remaining time and update the state variables
  const calculateTimeRemaining = () => {
    // Calculate the target date based on the current date
    const now = new Date();
    const currentYear = now.getFullYear();

    let targetDate: Date;
    if (now.getMonth() !== 11)
      targetDate = new Date(`${currentYear}-12-01 00:00:00 EST`);
    else
      targetDate = new Date(
        `${currentYear}-12-${now.getDate() + 1} 00:00:00 EST`,
      );

    // Calculate the time difference
    const timeDifference = targetDate.getTime() - now.getTime();

    if (timeDifference > 0) {
      const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const remainingMinutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
      );
      const remainingSeconds = Math.floor(
        (timeDifference % (1000 * 60)) / 1000,
      );

      setDays(remainingDays);
      setHours(remainingHours);
      setMinutes(remainingMinutes);
      setSeconds(remainingSeconds);
    } else {
      // If timeDifference is not positive, hide the countdown
      setCountDownHidden(true);
    }
  };

  useEffect(() => {
    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col gap-4 py-2 pt-10 sm:pt-2">
      <p className="text-center text-sm font-extrabold leading-[1] tracking-tight text-white text-opacity-80">
        {!countDownHidden && (
          <>
            {(days && hours && minutes && seconds && (
              <>
                {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
                untill the next puzzle releases
              </>
            )) ?? <>Initiating Countdown</>}
          </>
        )}
      </p>
    </div>
  );
}

export default Countdown;
