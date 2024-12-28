import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TestContext } from '../../Context/testContext';
// import '../../../css/timer.css';


  const TestTimer = ({ duration }) => {
  const { answers } = TestContext;
  const [timeLeft, setTimeLeft] = useState(duration);
  const [style, setStyle] = useState('primary');

  const navigate = useNavigate();

  if (timeLeft == "0") {
    navigate('/result', {
      state: {
        ans: answers,
      },
    });
  }

  // Function to format the time in HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  // Function to update the timer every second
  const updateTimer = () => {
    setTimeLeft((timeLeft) => Math.max(0, timeLeft - 1));
  };

  // Start the timer on component mount
  useEffect(() => {
    const timerInterval = setInterval(updateTimer, 1000);
    if (timeLeft <= 30 && timeLeft % 2 == 0) {
      setStyle('red');
    } else {
      setStyle('blue');
    }

    // Clean up the timer on component unmount
    return () => clearInterval(timerInterval);
  }, [timeLeft]);

  return (
    <div >
      <p style={{ color: style }} >  Time Left: {formatTime(timeLeft)}</p>
    </div>
  );
};

export default TestTimer;
