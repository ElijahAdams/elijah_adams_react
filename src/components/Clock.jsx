import React, { useState, useEffect } from "react";

/**
 * Component counting the amount of time that i have been a software engineer
 */
const Clock = () => {
  const startDate = new Date('January 20, 2015 8:00')

  /**
   * Calculate the amount of time passed
   */
  let calculateTimeAmount = () =>  {
    let difference = new Date() - startDate;

    let years  = Math.floor(difference / (1000 * 60 * 60 * 24) / 365);
    let days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 365);
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return `${years} years ${days} days ${hours} hours ${minutes} minutes and ${seconds} second`;
 }

  const [timeElapsed, setTimeElapsed] = useState(calculateTimeAmount());

  useEffect(() => {
      const interval = setInterval(() => {
        setTimeElapsed(calculateTimeAmount());
      }, 1000);

      //Clearing the interval
      return () => clearInterval(interval);
  }, [timeElapsed]);

  return (
    <>
      <p>I have </p> 
      {timeElapsed} 
      <p>of experience as a software engineer, but who's counting. </p>
    </>
  )
}

export default Clock